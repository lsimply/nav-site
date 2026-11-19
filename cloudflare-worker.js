// Cloudflare Worker：替访客去读 Google 表格，再用你自己的域名把 CSV 返回给页面。
// 访客的浏览器只访问你的域名，由 Cloudflare 的服务器去访问 Google，所以大陆访客不需要访问 Google。
//
// 部署步骤见 README.md 的“用 Cloudflare 让大陆也能读到表格”。

// 你的表格 ID（链接里 /d/ 和 /edit 中间那一段）。写死在这里，别人就没法借这个接口读取其他表格。
const SHEET_ID = "xxxxxxx";  // TODO: 改成你自己的表格 ID

// 缓存时间（秒）。表格更新后，最多这么久页面才会看到变化，同时也避免频繁请求 Google。
const CACHE_SECONDS = 300;

export default {
  async fetch(request, env) {
    if (request.method !== "GET") return new Response("Method Not Allowed", { status: 405 });

    const id = (env && env.SHEET_ID) || SHEET_ID;
    const upstream = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&headers=1`;

    let res;
    try {
      res = await fetch(upstream, { cf: { cacheEverything: true, cacheTtl: CACHE_SECONDS } });
    } catch (e) {
      return new Response("upstream unreachable", { status: 502 });
    }
    if (!res.ok) return new Response("upstream error " + res.status, { status: 502 });

    const text = await res.text();
    // 表格没有设为“知道链接的任何人可查看”时，Google 返回的是登录网页，不是 CSV
    if (/^\s*</.test(text)) return new Response("sheet is not public", { status: 502 });

    return new Response(text, {
      headers: {
        "content-type": "text/csv; charset=utf-8",
        "cache-control": `public, max-age=${CACHE_SECONDS}`,
        "access-control-allow-origin": "*",
      },
    });
  },
};
