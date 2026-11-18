/* 在线表格（可选）：把表格“发布到网络”为 CSV 后，把链接填在下面的引号里，页面就会从表格读取站点；留空则只用下面的本地数据。 */
window.SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3pGJzo_VRpnznWHm-dRo2E8OvZxJyc-qdbN81DgD6nA3FDMf4f7wuBxOVnDYpw9jK55k_KAfirCUo/pub?gid=0&single=true&output=csv";

/* 本地数据：增删站点改这里，注意保持逗号和引号完整。设置了在线表格时，它同时是读取失败时的备份。 */
window.SITES_DATA = {
  "updated": "2026-11-18",
  "categories": [
    {
      "id": "tools",
      "name": "效率工具",
      "note": "打开就能用、不用注册的优先。"
    },
    {
      "id": "learn",
      "name": "学习与知识",
      "note": "免费、讲得清楚，比收藏一堆付费课更实用。"
    },
    {
      "id": "design",
      "name": "设计与素材",
      "note": "商用前先看各站的授权说明。"
    },
    {
      "id": "dev",
      "name": "开发与技术",
      "note": "查资料时我最常开的几个。"
    },
    {
      "id": "ai",
      "name": "AI 工具",
      "note": "按用途选，不追新。"
    },
    {
      "id": "media",
      "name": "影音与阅读",
      "note": ""
    },
    {
      "id": "life",
      "name": "生活实用",
      "note": "办事、出行、天气，少走弯路。"
    },
    {
      "id": "assist",
      "name": "通用助手与智能搜索",
      "note": ""
    },
    {
      "id": "agent",
      "name": "Agent 与自动化",
      "note": ""
    },
    {
      "id": "model",
      "name": "模型、API 与算力",
      "note": ""
    },
    {
      "id": "coding",
      "name": "编程与开发工具",
      "note": ""
    },
    {
      "id": "imaging",
      "name": "图像、设计与视觉创作",
      "note": ""
    },
    {
      "id": "av",
      "name": "音频、视频与数字人",
      "note": ""
    },
    {
      "id": "writing",
      "name": "写作、办公与知识管理",
      "note": ""
    },
    {
      "id": "edu",
      "name": "学习、教育与科研",
      "note": ""
    },
    {
      "id": "biz",
      "name": "营销、商业与客户服务",
      "note": ""
    },
    {
      "id": "apps",
      "name": "垂直应用与生活娱乐",
      "note": ""
    },
    {
      "id": "hub",
      "name": "导航、资讯与社区",
      "note": ""
    }
  ],
  "items": [
    {
      "c": "tools",
      "name": "Squoosh",
      "icon": "image",
      "url": "https://squoosh.app",
      "desc": "谷歌出品的图片压缩，本地处理不上传，可以并排对比压缩前后。",
      "tags": [
        "免费",
        "无需注册"
      ]
    },
    {
      "c": "tools",
      "name": "TinyPNG",
      "icon": "compress",
      "url": "https://tinypng.com",
      "desc": "批量压缩 PNG 和 JPG，画质几乎没损失，适合给网页配图瘦身。",
      "tags": [
        "免费额度"
      ]
    },
    {
      "c": "tools",
      "name": "iLovePDF",
      "icon": "file",
      "url": "https://www.ilovepdf.com",
      "desc": "PDF 合并、拆分、压缩、转换都在网页里完成，入口清晰。",
      "tags": [
        "免费额度"
      ]
    },
    {
      "c": "tools",
      "name": "Excalidraw",
      "icon": "pen",
      "url": "https://excalidraw.com",
      "desc": "手绘风白板，画流程图和草图很快，导出图片有透明背景可选。",
      "tags": [
        "开源",
        "无需注册"
      ],
      "pin": true
    },
    {
      "c": "tools",
      "name": "Remove.bg",
      "icon": "scissors",
      "url": "https://www.remove.bg",
      "desc": "上传图片一键抠图，处理人物和商品图效果稳定。",
      "tags": [
        "免费额度"
      ]
    },
    {
      "c": "tools",
      "name": "草料二维码",
      "icon": "qr",
      "url": "https://cli.im",
      "desc": "生成二维码并支持美化和批量，国内用起来顺手。",
      "tags": [
        "免费额度"
      ]
    },
    {
      "c": "learn",
      "name": "3Blue1Brown",
      "icon": "sigma",
      "url": "https://www.3blue1brown.com",
      "desc": "用动画讲线性代数、微积分和神经网络，看一遍就有直觉。",
      "tags": [
        "免费",
        "中文字幕"
      ]
    },
    {
      "c": "learn",
      "name": "可汗学院",
      "icon": "bulb",
      "url": "https://www.khanacademy.org",
      "desc": "从小学到大学的数理基础课，按知识点循序渐进，附练习。",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "learn",
      "name": "中国大学 MOOC",
      "icon": "grad",
      "url": "https://www.icourse163.org",
      "desc": "国内高校开放课程，可以直接跟着学期节奏听完一门课。",
      "tags": [
        "免费旁听"
      ]
    },
    {
      "c": "learn",
      "name": "Wikipedia",
      "icon": "globe",
      "url": "https://www.wikipedia.org",
      "desc": "了解一个陌生概念的起点，看词条末尾的参考文献顺藤摸瓜。",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "learn",
      "name": "菜鸟教程",
      "icon": "terminal",
      "url": "https://www.runoob.com",
      "desc": "各种语言和工具的入门速查，例子短、能在线运行。",
      "tags": [
        "免费",
        "中文"
      ]
    },
    {
      "c": "learn",
      "name": "Internet Archive",
      "icon": "archive",
      "url": "https://archive.org",
      "desc": "网页存档和公版书、旧资料的大仓库，链接失效时先来这里找。",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "design",
      "name": "Unsplash",
      "icon": "camera",
      "url": "https://unsplash.com",
      "desc": "质量高的免费摄影图，风格统一，做封面和背景很省事。",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "design",
      "name": "Figma",
      "icon": "layers",
      "url": "https://www.figma.com",
      "desc": "浏览器里做界面设计和协作，个人用免费版就够。",
      "tags": [
        "免费额度"
      ],
      "pin": true
    },
    {
      "c": "design",
      "name": "Coolors",
      "icon": "palette",
      "url": "https://coolors.co",
      "desc": "按空格键随机出配色，锁定喜欢的色再继续，几秒配出一套。",
      "tags": [
        "免费额度"
      ]
    },
    {
      "c": "design",
      "name": "Google Fonts",
      "icon": "type",
      "url": "https://fonts.google.com",
      "desc": "开源字体库，可以预览文字效果，网页和印刷都能用。",
      "tags": [
        "免费",
        "开源"
      ]
    },
    {
      "c": "design",
      "name": "Iconfont",
      "icon": "shapes",
      "url": "https://www.iconfont.cn",
      "desc": "阿里的图标库，数量多，可按项目收集并导出 SVG。",
      "tags": [
        "免费",
        "中文"
      ]
    },
    {
      "c": "design",
      "name": "站酷",
      "icon": "layout",
      "url": "https://www.zcool.com.cn",
      "desc": "国内设计师作品社区，找灵感和看行业审美趋势。",
      "tags": [
        "中文"
      ]
    },
    {
      "c": "dev",
      "name": "MDN Web Docs",
      "icon": "code",
      "url": "https://developer.mozilla.org",
      "desc": "前端技术的权威文档，说明准确，示例可直接复制。",
      "tags": [
        "免费",
        "有中文"
      ],
      "pin": true
    },
    {
      "c": "dev",
      "name": "GitHub",
      "icon": "branch",
      "url": "https://github.com",
      "desc": "找开源项目、读源码、托管自己的页面，一个账号全包。",
      "tags": [
        "免费"
      ],
      "pin": true
    },
    {
      "c": "dev",
      "name": "Can I use",
      "icon": "check",
      "url": "https://caniuse.com",
      "desc": "查某个 CSS 或 JS 特性各浏览器是否支持，写兼容前必看。",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "dev",
      "name": "Regex101",
      "icon": "regex",
      "url": "https://regex101.com",
      "desc": "正则调试，逐项解释每个符号，还能保存分享链接。",
      "tags": [
        "免费",
        "无需注册"
      ]
    },
    {
      "c": "dev",
      "name": "DevDocs",
      "icon": "library",
      "url": "https://devdocs.io",
      "desc": "把多种语言和框架的文档合并到一个页面，支持离线和快速搜索。",
      "tags": [
        "免费",
        "开源"
      ]
    },
    {
      "c": "dev",
      "name": "Stack Overflow",
      "icon": "message",
      "url": "https://stackoverflow.com",
      "desc": "报错信息直接搜，多数问题已经有人问过，注意看回答的日期。",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "ai",
      "name": "Claude",
      "icon": "sparkles",
      "url": "https://claude.ai",
      "desc": "写作、分析长文档和写代码，回答比较稳，适合当日常助手。",
      "tags": [
        "有免费版"
      ],
      "pin": true
    },
    {
      "c": "ai",
      "name": "Perplexity",
      "icon": "search",
      "url": "https://www.perplexity.ai",
      "desc": "带引用来源的 AI 搜索，查资料时可以顺着来源核对。",
      "tags": [
        "有免费版"
      ]
    },
    {
      "c": "ai",
      "name": "NotebookLM",
      "icon": "notebook",
      "url": "https://notebooklm.google.com",
      "desc": "上传自己的资料后只围绕这些内容回答，适合读论文和整理笔记。",
      "tags": [
        "有免费版"
      ]
    },
    {
      "c": "ai",
      "name": "Hugging Face",
      "icon": "cpu",
      "url": "https://huggingface.co",
      "desc": "开源模型和数据集的集散地，想试新模型先来这里。",
      "tags": [
        "免费",
        "开源"
      ]
    },
    {
      "c": "media",
      "name": "豆瓣",
      "icon": "star",
      "url": "https://www.douban.com",
      "desc": "找书、电影的评分和短评，看低分评论比看高分更有参考价值。",
      "tags": [
        "中文"
      ],
      "pin": true
    },
    {
      "c": "media",
      "name": "哔哩哔哩",
      "icon": "tv",
      "url": "https://www.bilibili.com",
      "desc": "中文教程和长视频最全，搜课程时按播放量和收藏比判断质量。",
      "tags": [
        "中文"
      ],
      "pin": true
    },
    {
      "c": "media",
      "name": "少数派",
      "icon": "news",
      "url": "https://sspai.com",
      "desc": "效率工具和数码使用心得，文章偏实用，少有硬广味。",
      "tags": [
        "中文"
      ]
    },
    {
      "c": "media",
      "name": "微信读书",
      "icon": "bookmark",
      "url": "https://weread.qq.com",
      "desc": "手机和网页同步进度，划线和书评做得好，适合碎片时间读。",
      "tags": [
        "有免费书"
      ]
    },
    {
      "c": "life",
      "name": "12306",
      "icon": "train",
      "url": "https://www.12306.cn",
      "desc": "火车票官方渠道，购票和改签以这里为准。",
      "tags": [
        "官方"
      ]
    },
    {
      "c": "life",
      "name": "国家政务服务平台",
      "icon": "landmark",
      "url": "https://gjzwfw.www.gov.cn",
      "desc": "全国政务服务的统一入口，办证和查询先看这里有没有线上办理。",
      "tags": [
        "官方"
      ]
    },
    {
      "c": "life",
      "name": "中国天气网",
      "icon": "cloud",
      "url": "https://www.weather.com.cn",
      "desc": "中国气象局旗下，预警信息发布得及时，出行前看一眼。",
      "tags": [
        "官方"
      ]
    },
    {
      "c": "life",
      "name": "高德地图",
      "icon": "pin",
      "url": "https://www.amap.com",
      "desc": "路线规划和实时路况，网页版也能查公交和骑行路线。",
      "tags": [
        "免费"
      ],
      "pin": true
    },
    {
      "c": "assist",
      "name": "ChatGPT",
      "icon": "sparkles",
      "url": "https://chatgpt.com/",
      "desc": "ChatGPT官方网站",
      "tags": [
        "热门",
        "需国际网络"
      ]
    },
    {
      "c": "assist",
      "name": "Gemini",
      "icon": "sparkles",
      "url": "https://gemini.google.com/",
      "desc": "谷歌 Gemini",
      "tags": [
        "热门"
      ]
    },
    {
      "c": "assist",
      "name": "DeepSeek",
      "icon": "sparkles",
      "url": "https://www.deepseek.com/",
      "desc": "热门的国产AI 大模型",
      "tags": [
        "热门"
      ]
    },
    {
      "c": "assist",
      "name": "豆包",
      "icon": "sparkles",
      "url": "https://www.doubao.com/chat/",
      "desc": "豆包- 字节跳动旗下AI 智能助手",
      "tags": [
        "热门"
      ]
    },
    {
      "c": "assist",
      "name": "千问",
      "icon": "sparkles",
      "url": "https://www.qianwen.com/",
      "desc": "阿里巴巴推出的通用AI助手，支持问答、创作、推理和多模态交互。",
      "tags": [
        "热门"
      ]
    },
    {
      "c": "assist",
      "name": "智谱清言",
      "icon": "sparkles",
      "url": "https://chatglm.cn/",
      "desc": "智谱推出的通用AI助手，基于GLM大模型，支持问答、创作、推理、工具调用与任务执行。",
      "tags": [
        "热门"
      ]
    },
    {
      "c": "assist",
      "name": "Kimi",
      "icon": "search",
      "url": "https://www.kimi.com/",
      "desc": "月之暗面推出的通用AI助手，支持长文本理解、搜索、推理与创作。"
    },
    {
      "c": "assist",
      "name": "Grok",
      "icon": "palette",
      "url": "https://grok.com/?referrer=website",
      "desc": "Grok 是由 xAI 设计的免费 AI 助手",
      "tags": [
        "需国际网络"
      ]
    },
    {
      "c": "assist",
      "name": "AItianhu",
      "icon": "sparkles",
      "url": "https://chat10.aiyunos.top/",
      "desc": "无限制的GPT-3.5 服务,GPT4"
    },
    {
      "c": "assist",
      "name": "华为小艺",
      "icon": "file",
      "url": "https://xiaoyi.huawei.com/chat/",
      "desc": "华为小艺是华为公司推出的AI智慧助手，基于最新的人工智能技术，提供了AI知识问答、AI写作、AI文档阅读和AI识图等多种AI功能，全面提升用户的生活质量和工…"
    },
    {
      "c": "assist",
      "name": "SCNet人工智能助手",
      "icon": "message",
      "url": "https://chat.scnet.cn/#/home",
      "desc": "DeepSeek 是一款基于人工智能技术的智能聊天伙伴，它运用先进的自然语言处理技术，为用户带来优质、高效的对话感受。 它能精准领会您的问题并予以确切答复…"
    },
    {
      "c": "assist",
      "name": "知乎直答",
      "icon": "chart",
      "url": "https://zhida.zhihu.com/",
      "desc": "知乎直答是知乎推出的一款使用 AI 大模型等先进技术的产品，以知乎社区的优质内容为核心，多种数据源为辅助，为人们提供一种全新的获取可靠信息的途径。接入了DE…"
    },
    {
      "c": "assist",
      "name": "Monica",
      "icon": "sparkles",
      "url": "https://monica.cn/",
      "desc": "Monica 是一个万能的助手，懂你的伙伴，由 DeepSeek 官方模型驱动。能记住与你的每次对话，像老朋友一样了解你的一切，无需解释就能懂你，给你最需要…"
    },
    {
      "c": "assist",
      "name": "TypeGpt",
      "icon": "sparkles",
      "url": "https://chat.typegpt.net/",
      "desc": "多种模型，无限制免费使用"
    },
    {
      "c": "assist",
      "name": "heck.ai",
      "icon": "search",
      "url": "https://heck.ai/",
      "desc": "100%免费使用GPT4o，免费AI搜索，支持多语言搜索。"
    },
    {
      "c": "assist",
      "name": "问小白",
      "icon": "search",
      "url": "https://www.wenxiaobai.com/",
      "desc": "问小白让你更有料, AI 智能聊天, 问答助手, AI 智能搜索, 免费无限量使用 DeepSeek R1 模型，支持联网搜索。"
    },
    {
      "c": "assist",
      "name": "聊点聚合站",
      "icon": "sparkles",
      "url": "https://liaobots.work/",
      "desc": "更新最快的 AI 聚合站，所有模型第一时间更新"
    },
    {
      "c": "assist",
      "name": "CnsGPT.fun",
      "icon": "sparkles",
      "url": "https://cnsgpt.fun/",
      "desc": "免费稳定支持gpt3.5 免翻直连 无需代理"
    },
    {
      "c": "assist",
      "name": "Skybyte Free AI Chat",
      "icon": "sparkles",
      "url": "https://cgs.skybyte.me/",
      "tags": [
        "推荐",
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "Temporary AI ChatBot",
      "icon": "message",
      "url": "https://ftac.vercel.app/",
      "desc": "Temporary AI ChatBot是一个免费的临时AI聊天机器人，旨在为用户提供即时的对话支持。它结合了先进的人工智能技术，允许用户随时随地与机器人互…"
    },
    {
      "c": "assist",
      "name": "免费且免登录GPT",
      "icon": "sparkles",
      "url": "https://44ai.cc/",
      "desc": "注册即可免费试用的国内无需梯子的chatgpt"
    },
    {
      "c": "assist",
      "name": "ChatPro",
      "icon": "sparkles",
      "url": "https://g2.iswl.one/",
      "desc": "支持GPT4-to-mini的无限次免费使用，无需登录"
    },
    {
      "c": "assist",
      "name": "Fast Palm AI ChatBot",
      "icon": "message",
      "url": "https://fast-palm-ai-chatbot.vercel.app/",
      "desc": "Fast Palm AI ChatBot 💬 人工智能聊天机器人"
    },
    {
      "c": "assist",
      "name": "免费Claude 3.5 Sonnet",
      "icon": "sparkles",
      "url": "https://claude.free2gpt.xyz/",
      "desc": "无需注册登录，国内可用，限120次/天",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "AI365",
      "icon": "sparkles",
      "url": "https://chat.ai365vip.com/",
      "desc": "打开即用 免费gpt-3.5 gpt4o和claude-3-haiku-20240307"
    },
    {
      "c": "assist",
      "name": "毕方AI助手",
      "icon": "sparkles",
      "url": "https://www.bfbke.com/chatgpt",
      "desc": "登录后永久免费使用GPT4"
    },
    {
      "c": "assist",
      "name": "AIChatOS",
      "icon": "sparkles",
      "url": "https://x.aichatos8.cn/",
      "desc": "无限制的GPT-3.5 服务",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "数字玩家",
      "icon": "sparkles",
      "url": "https://www.opkfc.com/",
      "desc": "使用免费的ChatGPT账户"
    },
    {
      "c": "assist",
      "name": "智能AI助手",
      "icon": "sparkles",
      "url": "https://chat.tinycms.xyz:3002/",
      "desc": "免费的gpt3.5，免登录，可以免费使用newbing、百度文心一言、Gemini pro",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "ChatGPTPlus.cn",
      "icon": "sparkles",
      "url": "https://chatgptplus.cn/",
      "desc": "RawChat公益站点"
    },
    {
      "c": "assist",
      "name": "ChatForAI",
      "icon": "sparkles",
      "url": "https://chatforai.store/",
      "desc": "无限制的GPT-3.5 服务",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "ChatGPT原生态",
      "icon": "sparkles",
      "url": "https://www.chat2chatgpt.com/?from=ai555",
      "desc": "原生态、流式响应、免登录、随时无限使用、免梯子"
    },
    {
      "c": "assist",
      "name": "Poe",
      "icon": "sparkles",
      "url": "https://poe.com/",
      "desc": "Poe - Fast, Helpful AI Chat",
      "tags": [
        "免费",
        "需登录"
      ]
    },
    {
      "c": "assist",
      "name": "PowerChat",
      "icon": "sparkles",
      "url": "https://www.promptboom.com/",
      "desc": "Fast, Helpful AI Chat",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "Character.AI",
      "icon": "sparkles",
      "url": "https://beta.character.ai/",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "100AI",
      "icon": "search",
      "url": "https://search.100ai.fun/",
      "desc": "不用梯子，就可使用的集成了openai.gpt-4o,claude3.5的AI搜索网站工具",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "assist",
      "name": "海鲸AI",
      "icon": "sparkles",
      "url": "https://www.atalk-ai.com/talk",
      "desc": "多模型聚合平台，支持GPT3.5、GPT4.0，谷歌Gemini，通义千问等模型"
    },
    {
      "c": "assist",
      "name": "ChatWeb",
      "icon": "sparkles",
      "url": "https://ai.berlin4h.top/"
    },
    {
      "c": "assist",
      "name": "dongstop.link",
      "icon": "sparkles",
      "url": "https://hai.dongstop.link/",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "xiamoai.top",
      "icon": "sparkles",
      "url": "https://www.xiamoai.top/",
      "desc": "免费chatgpt3，以及各种工具",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "lra.cn",
      "icon": "sparkles",
      "url": "https://chatai.lra.cn/",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "1ai.fun",
      "icon": "sparkles",
      "url": "https://1.1ai.fun/",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "智慧虾米AI",
      "icon": "sparkles",
      "url": "https://fby.xiamis.xyz/",
      "desc": "扫码登录 直达官方页面 可使用官网所有功能 免梯免魔法 稳定",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "AIVESA 智能",
      "icon": "sparkles",
      "url": "https://aivesa.cn/",
      "desc": "Aivesa智能 - 免费可联网的人工智能服务",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "ic.free-chat.asia",
      "icon": "sparkles",
      "url": "https://ic.free-chat.asia/",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "EasyGPT",
      "icon": "sparkles",
      "url": "https://site.easygpt.work/",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "ai.ls",
      "icon": "sparkles",
      "url": "https://ai.ls/",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "chat2doc.cn",
      "icon": "sparkles",
      "url": "https://chat2doc.cn/",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "夸克",
      "icon": "search",
      "url": "https://www.quark.cn/",
      "desc": "阿里巴巴旗下AI搜索与智能助手，支持问答、总结、创作和多模态工具。"
    },
    {
      "c": "assist",
      "name": "纳米 AI",
      "icon": "search",
      "url": "https://www.n.cn/",
      "desc": "360推出的多智能体AI助手，提供搜索、问答、创作及任务协作能力。"
    },
    {
      "c": "assist",
      "name": "元宝",
      "icon": "sparkles",
      "url": "https://yuanbao.tencent.com/",
      "desc": "元宝-体验DeepSeek全新版-高效AI助手"
    },
    {
      "c": "assist",
      "name": "PcPc.AI",
      "icon": "sparkles",
      "url": "https://pcpc.ai/",
      "desc": "PcPc.AI是一个一站式AI聚合平台，支持Gemini 3、GPT 5 等大模型"
    },
    {
      "c": "assist",
      "name": "讯飞星火",
      "icon": "sparkles",
      "url": "https://xinghuo.xfyun.cn/desk",
      "desc": "讯飞星火认知大模型"
    },
    {
      "c": "assist",
      "name": "360智脑",
      "icon": "sparkles",
      "url": "https://ai.360.com/",
      "desc": "360智脑 — 以人为本，安全可信"
    },
    {
      "c": "assist",
      "name": "天工",
      "icon": "sparkles",
      "url": "https://search.tiangong.cn/",
      "desc": "天工超能AI — 江苏卫视《最强大脑》特约合作伙伴"
    },
    {
      "c": "assist",
      "name": "秘塔AI搜索",
      "icon": "search",
      "url": "https://metaso.cn/",
      "desc": "秘塔AI搜索是由上海秘塔网络科技有限公司开发的一款基于大模型技术的智能搜索引擎。它通过理解用户的搜索意图，为用户提供无广告、高质量的搜索结果。接入了DEEP…"
    },
    {
      "c": "assist",
      "name": "小浣熊家族 Raccoon - AI 智能助手",
      "icon": "sparkles",
      "url": "https://xiaohuanxiong.com/",
      "desc": "Qwen Chat 网页版是阿里通义团队推出的一个集成了多个 Qwen AI 大模型的网站，并且 Qwen Chat 是基于 Open WebUI 构建的。"
    },
    {
      "c": "assist",
      "name": "QWEN CHAT",
      "icon": "sparkles",
      "url": "https://chat.qwenlm.ai/",
      "desc": "Qwen Chat 网页版是阿里通义团队推出的一个集成了多个 Qwen AI 大模型的网站，并且 Qwen Chat 是基于 Open WebUI 构建的。"
    },
    {
      "c": "assist",
      "name": "鱼聪明AI",
      "icon": "sparkles",
      "url": "https://www.yucongming.com/",
      "desc": "鱼聪明AI - 做您强大的AI助手鱼聪明AI - 做您强大的AI助手"
    },
    {
      "c": "assist",
      "name": "在问",
      "icon": "sparkles",
      "url": "https://www.zaiwen.top/",
      "desc": "让知识无界,智能触手可及",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "动点助手",
      "icon": "sparkles",
      "url": "https://wow.xjai.pro/",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "assist",
      "name": "chat35.com",
      "icon": "sparkles",
      "url": "https://chat35.com/"
    },
    {
      "c": "assist",
      "name": "Wielded",
      "icon": "sparkles",
      "url": "https://wielded.com/",
      "desc": "不仅可以与 OpenAI 无缝集成，还支持 Azure OpenAI、Claude 和 AWS Bedrock",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "assist",
      "name": "toyaml.com",
      "icon": "sparkles",
      "url": "https://toyaml.com/chat.html",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "Teach Anything",
      "icon": "sparkles",
      "url": "https://www.teach-anything.com/",
      "desc": "Teach you Anything in seconds"
    },
    {
      "c": "assist",
      "name": "ChatGPT - AI",
      "icon": "message",
      "url": "https://chatgpt35.theinspiredgroup.com/",
      "desc": "ChatGPT - AI 人工智能聊天机器人",
      "tags": [
        "推荐"
      ]
    },
    {
      "c": "assist",
      "name": "Forefront.ai",
      "icon": "sparkles",
      "url": "https://chat.forefront.ai/",
      "desc": "Your AI assistant and beyond"
    },
    {
      "c": "assist",
      "name": "核桃",
      "icon": "sparkles",
      "url": "https://ai.minihuo.com/",
      "desc": "国内ERNIE-Bot模型",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "assist",
      "name": "开放猫",
      "icon": "sparkles",
      "url": "https://openmao.panchuang.net/",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "assist",
      "name": "aixforce.app",
      "icon": "sparkles",
      "url": "https://aixforce.app/",
      "desc": "网站提供匿名试用，登录每日赠送额度"
    },
    {
      "c": "assist",
      "name": "gptplus.io",
      "icon": "sparkles",
      "url": "https://gptplus.io/",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "assist",
      "name": "ai.ci",
      "icon": "sparkles",
      "url": "https://ai.ci/",
      "tags": [
        "推荐",
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "柯基助手",
      "icon": "sparkles",
      "url": "https://www.kejilequ.com/",
      "desc": "柯基乐趣——AI助手",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "assist",
      "name": "AIGC小站",
      "icon": "sparkles",
      "url": "https://chatgpt.kungfu.wang/",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "assist",
      "name": "desk.im",
      "icon": "sparkles",
      "url": "https://desk.im/",
      "tags": [
        "推荐",
        "免费"
      ]
    },
    {
      "c": "assist",
      "name": "TIG.AI",
      "icon": "sparkles",
      "url": "https://chat.tig.im/",
      "desc": "走进 AI，拥抱未来"
    },
    {
      "c": "assist",
      "name": "hxkj.vip",
      "icon": "sparkles",
      "url": "https://ai.hxkj.vip/",
      "desc": "百晓生 - 让每个人都拥有一个属于自己的 AI 助手！",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "assist",
      "name": "AI Short",
      "icon": "sparkles",
      "url": "https://www.aishort.top/",
      "desc": "让生产力加倍的 AI 快捷指令"
    },
    {
      "c": "assist",
      "name": "wrtn.ai",
      "icon": "sparkles",
      "url": "https://wrtn.ai/",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "assist",
      "name": "openprompt.co",
      "icon": "sparkles",
      "url": "https://openprompt.co/ChatGPT"
    },
    {
      "c": "assist",
      "name": "gptbot.me",
      "icon": "sparkles",
      "url": "https://gptbot.me/",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "assist",
      "name": "onomeo",
      "icon": "image",
      "url": "https://onomeo.com/zh",
      "desc": "多模型网页对话与 OpenAI 兼容 API 服务，提供按次数限制的免费模型、图像生成和按量付费选项。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "assist",
      "name": "Honer AI — HONER 的 Android AI 助手",
      "icon": "search",
      "url": "https://xoner4.github.io/",
      "desc": "面向 Android 的 AI 助手，支持俄语和英语聊天、写作、翻译、网络搜索及照片和文档分析，含听写与朗读功能。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "assist",
      "name": "Jev 聊天助手",
      "icon": "message",
      "url": "https://chatjevs.com/",
      "desc": "开源聊天辅助工具，分析当前对话并起草候选回复，由用户决定是否发送，需自备模型 API Key。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "assist",
      "name": "樱桃茶·智域GPT",
      "icon": "music",
      "url": "https://gpt.cherrychat.org/v2/home",
      "desc": "多模型 AI 平台，提供对话、绘画、视频、音乐与知识库功能，支持中文和英文，需登录并按积分付费。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "assist",
      "name": "盖酷AI实验室",
      "icon": "message",
      "url": "http://gpt33.cn/",
      "desc": "酷盖AI实验室,人工智能,OpenAI,智能聊天工具",
      "tags": [
        "付费"
      ]
    },
    {
      "c": "assist",
      "name": "OhMyGPT",
      "icon": "sparkles",
      "url": "https://www.ohmygpt.com/",
      "desc": "登录用户每天可以免费使用150次",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "assist",
      "name": "GPT中文站",
      "icon": "sparkles",
      "url": "https://chat.uniation.net/"
    },
    {
      "c": "assist",
      "name": "HOTOKE AI",
      "icon": "sparkles",
      "url": "https://hotoke.ai/",
      "desc": "搭载gpt-3.5-turbo的机械佛将为您提供咨询"
    },
    {
      "c": "assist",
      "name": "open-gpt.app",
      "icon": "sparkles",
      "url": "https://open-gpt.app/",
      "desc": "ChatGPT 应用"
    },
    {
      "c": "agent",
      "name": "Manus",
      "icon": "bot",
      "url": "https://manus.im/",
      "desc": "能够规划并执行复杂任务的通用AI智能体，可交付研究、分析和内容成果。",
      "tags": [
        "热门"
      ]
    },
    {
      "c": "agent",
      "name": "OpenClaw(龙虾)",
      "icon": "message",
      "url": "https://openclaw.ai/",
      "desc": "真正行动的人工智能。清理你的收件箱，发送邮件，管理你的日程，帮你办理航班值机。所有这些都来自 WhatsApp、Telegram 或任何聊天......",
      "tags": [
        "推荐"
      ]
    },
    {
      "c": "agent",
      "name": "扣子",
      "icon": "bot",
      "url": "https://www.coze.cn/",
      "desc": "扣子是新一代 AI 大模型智能体开发平台。 整合了插件、长短期记忆、工作流、卡片等丰富能力，扣子能帮你低门槛、快速搭建个性化或具备商业价值的智能体，并发布到…"
    },
    {
      "c": "agent",
      "name": "ConversAI",
      "icon": "bot",
      "url": "https://ai1.yjie.fun/",
      "desc": "免费无限制GPT4、豆包、联网、多功能插件"
    },
    {
      "c": "agent",
      "name": "reworkd.ai",
      "icon": "bot",
      "url": "https://agentgpt.reworkd.ai/",
      "desc": "Agent GPT"
    },
    {
      "c": "agent",
      "name": "Gnomic智能体平台",
      "icon": "bot",
      "url": "https://www.gnomic.cn/",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "agent",
      "name": "Genspark",
      "icon": "search",
      "url": "https://www.genspark.ai/",
      "desc": "面向搜索、研究和内容交付的AI智能体工作空间，可自动完成多步骤任务。"
    },
    {
      "c": "agent",
      "name": "WorkBuddy",
      "icon": "file",
      "url": "https://www.workbuddy.cn/",
      "desc": "腾讯推出的全场景AI办公工作台，可自主规划、调用工具并交付文档、表格和多模态成果。"
    },
    {
      "c": "agent",
      "name": "DeepSeek Harness",
      "icon": "bot",
      "url": "https://www.deepseek.com/harness/",
      "desc": "开发者预览版，需本地安装运行。DeepSeek官方开源Agent运行框架，以插件组合模型、工具、技能、沙箱、子Agent和工作流。"
    },
    {
      "c": "agent",
      "name": "QClaw",
      "icon": "bot",
      "url": "https://qclaw.qq.com/",
      "desc": "QClaw - 微信远程办公AI 助手| 腾讯出品"
    },
    {
      "c": "agent",
      "name": "Cursor CLI",
      "icon": "file",
      "url": "https://cursor.com/cn/cli",
      "desc": "编程编写功能强大的脚本和自动化程序。自动更新文档、触发安全审查或构建自定义编码代理。"
    },
    {
      "c": "agent",
      "name": "Codex",
      "icon": "palette",
      "url": "https://openai.com/zh-Hans-CN/codex/",
      "desc": "Codex 应用专为多代理工作流程而设计，是代理编码的指挥中心。"
    },
    {
      "c": "agent",
      "name": "SourceWeft",
      "icon": "bot",
      "url": "https://sourceweft.com/zh-CN",
      "desc": "开源、可自托管的 AI 工作空间，结合多智能体协作、Skills、MCP 与带引用的知识库，支持研究、规划和创作，提供 Web 与桌面端。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "agent",
      "name": "Orkas",
      "icon": "code",
      "url": "https://orkas.ai/",
      "desc": "开源、本地优先的 AI 团队桌面应用，通过 Commander 对话协调专业 Agent，并接入多种本地编程智能体会话。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "agent",
      "name": "精酿 BrewReel",
      "icon": "tv",
      "url": "https://brewreel.com/",
      "desc": "开源视频创作 Agent Skill，通过模型编写分镜 JSON、Remotion 渲染竖版宣传片，提供配方、行业模板和配乐。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "agent",
      "name": "Mobile AI Use - 智能手机AI自动化",
      "icon": "bot",
      "url": "https://mobile-ai-use.com/",
      "desc": "通过浏览器以自然语言操作手机设备的自动化智能体，可理解指令并与应用界面交互执行任务。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "agent",
      "name": "小蓝助手 Blue（BlueDoAI）",
      "icon": "file",
      "url": "https://www.bluedoai.com/tools",
      "desc": "面向 Windows 的桌面智能体，在授权后处理本地文档、图片、脚本与多步骤任务，可自配 API 或使用付费托管模型。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "agent",
      "name": "PlaceCall",
      "icon": "bot",
      "url": "https://voygr.tech/placecall",
      "desc": "为 AI Agent 提供真实电话任务，可联系美国商家订位、预约和询价，返回结果、文字记录与录音，提供 MCP 和 REST API。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "agent",
      "name": "Remio",
      "icon": "bot",
      "url": "https://remio.ai/",
      "desc": "本地优先的 AI 记忆与知识库客户端，为 Agent 索引和检索个人文件、网页、录音等上下文。"
    },
    {
      "c": "agent",
      "name": "唐可创研 TANCO SkillHub",
      "icon": "bot",
      "url": "https://skillhub.cn/enterprise/org-j3zmzop1?publisher=%E5%94%90%E5%8F%AF%E5%88%9B%E7%A0%94",
      "desc": "面向 AI Agent 与 AI 工作流的可复用 Skill 中心，提供调研、项目拆解、任务链和多 Agent 交接等工作流。"
    },
    {
      "c": "agent",
      "name": "豆包智能体下架自救指南",
      "icon": "chart",
      "url": "https://doubaodaochu.com/",
      "desc": "豆包及通义千问智能体的数据备份、人设导出、迁移指南和替代平台横评。"
    },
    {
      "c": "agent",
      "name": "PlugClaw",
      "icon": "bot",
      "url": "https://plugos.net/plugclaw",
      "desc": "即插即用的私人 AI 计算机，可运行应用、管理工作流并自动执行任务。"
    },
    {
      "c": "model",
      "name": "商汤秒画",
      "icon": "cpu",
      "url": "https://miaohua.sensetime.com/inspiration?invite_code=wWxy4kmmP",
      "desc": "商汤秒画SenseMirage – AI作画，有手就行！还是免费的！"
    },
    {
      "c": "model",
      "name": "免费ChatGPT API",
      "icon": "cpu",
      "url": "https://chat.freegpt.work/",
      "desc": "多种模型，支持GPT-4，每日300次免费使用。无需注册，可以使用免费API Key."
    },
    {
      "c": "model",
      "name": "ChatGPT Gratis",
      "icon": "cpu",
      "url": "https://chatgptgratis.eu/zh/chat.html",
      "desc": "GPT4-omni、llama3.1-405b模型"
    },
    {
      "c": "model",
      "name": "Proxify",
      "icon": "cpu",
      "url": "https://proxify.poixe.com/",
      "desc": "一个开源、轻量、自托管的 AI 接口反向代理"
    },
    {
      "c": "model",
      "name": "ggwk",
      "icon": "cpu",
      "url": "https://www.ggwk.online/",
      "desc": "ggwkChat：高效快捷的api服务，包括Claude，GPT，gemini，GPTs全系列、gpt-4-all等官网主流模型，全面提升您的学习与工作效率。"
    },
    {
      "c": "model",
      "name": "MiniMax开放平台",
      "icon": "music",
      "url": "https://platform.minimaxi.com/",
      "desc": "MiniMax面向开发者的AI开放平台，提供语言、视频、语音、图像与音乐模型API，支持构建多模态智能应用。"
    },
    {
      "c": "model",
      "name": "智谱 BigModel开放平台",
      "icon": "cpu",
      "url": "https://open.bigmodel.cn/",
      "desc": "智谱面向开发者和企业的大模型开放平台，提供GLM系列模型及文本、视觉、多模态能力的API与开发工具。"
    },
    {
      "c": "model",
      "name": "百川大模型",
      "icon": "cpu",
      "url": "https://www.baichuan-ai.com/home",
      "desc": "汇聚世界知识，创作妙笔生花"
    },
    {
      "c": "model",
      "name": "腾讯混元",
      "icon": "cpu",
      "url": "https://hunyuan.tencent.com/",
      "desc": "由腾讯研发的大语言模型，具备强大的中文创作能力， 复杂语境下的逻辑推理能力，以及可靠的任务执行能力"
    },
    {
      "c": "model",
      "name": "AIMLAPI.com",
      "icon": "cpu",
      "url": "https://aimlapi.com/app/?utm_source=carrot&utm_medium=github&utm_campaign=integration",
      "desc": "Access 300+ AI Models with a Single AI API"
    },
    {
      "c": "model",
      "name": "Llama",
      "icon": "cpu",
      "url": "https://llama.meta.com/",
      "desc": "Meta 羊驼"
    },
    {
      "c": "model",
      "name": "Wbot-2",
      "icon": "cpu",
      "url": "https://docs.api.ecylt.top/wbot/wbot-2-fei-free",
      "desc": "WZH团队推出的第二代语言模型，提供免费API供开发者调用，支持联网"
    },
    {
      "c": "model",
      "name": "YesIamAI-是的我是AI",
      "icon": "cpu",
      "url": "https://yesiamai.com/",
      "desc": "WZH团队推出的第二代语言模型，提供免费API供开发者调用，支持联网",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "model",
      "name": "huggingface.co",
      "icon": "cpu",
      "url": "https://huggingface.co/spaces/AUST001/ChatGPT",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "model",
      "name": "GPTZZZ",
      "icon": "cpu",
      "url": "https://gptzzz.ai/",
      "desc": "面向中文开发者的第三方 AI API 中转服务，提供多厂商模型、OpenAI 兼容接口和 Claude Messages 接口。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "model",
      "name": "TokenWorks（硅碳相变 Token工厂）",
      "icon": "cpu",
      "url": "https://www.token8341.com/",
      "desc": "大模型 API 聚合网关，接入 DeepSeek、Kimi、GLM、通义千问、MiniMax 等模型，兼容 OpenAI 与 Anthropic 协议。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "model",
      "name": "LinkAGI",
      "icon": "cpu",
      "url": "https://api.linktoagi.com/",
      "desc": "面向开发者的 AI API 中转服务，提供 GPT、Claude、Gemini 等模型、独立 API Key、按量计费与用量查询。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "model",
      "name": "apimodels.app",
      "icon": "music",
      "url": "https://apimodels.app/zh",
      "desc": "通过一套 OpenAI 兼容接口调用图像、视频、语音与语言模型的聚合 API 平台。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "model",
      "name": "Twinkle Model",
      "icon": "cpu",
      "url": "https://big-model.smart-agi.com/",
      "desc": "提供 GPT、Claude 及国产大模型的第三方 API 中转服务，可在模型广场查询公开价格。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "model",
      "name": "Teapot Router",
      "icon": "code",
      "url": "https://teapotrouter.com/",
      "desc": "面向开发者的 AI API 网关，兼容 Anthropic 与 OpenAI 协议，支持编程工具接入和按量计费。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "model",
      "name": "qionggeme",
      "icon": "cpu",
      "url": "https://qionggeme.com/",
      "desc": "面向开发者的 OpenAI-compatible 多模型 AI API 中转服务。"
    },
    {
      "c": "model",
      "name": "TeamoRouter",
      "icon": "code",
      "url": "https://teamorouter.com/",
      "desc": "兼容 Anthropic 与 OpenAI 协议的多模型 AI API 网关，面向国内开发者和编程客户端。"
    },
    {
      "c": "model",
      "name": "DaoXE",
      "icon": "cpu",
      "url": "https://daoxe.com/",
      "desc": "面向非中国大陆地区中文开发者的多协议 AI API 网关。"
    },
    {
      "c": "model",
      "name": "呆呆兽中转站",
      "icon": "cpu",
      "url": "https://ddshub.cc/home",
      "desc": "提供 Claude 与 Codex 模型的 AI API 中转服务。"
    },
    {
      "c": "model",
      "name": "ApiSmart",
      "icon": "cpu",
      "url": "https://apismart.ai/",
      "desc": "通过兼容 API 统一接入多个主流 AI 模型的平台。"
    },
    {
      "c": "model",
      "name": "CoderPlan",
      "icon": "cpu",
      "url": "https://coderplan.ai/",
      "desc": "统一 LLM API 网关，支持 Claude、OpenAI 和 Gemini 系列模型。"
    },
    {
      "c": "model",
      "name": "玄枢API",
      "icon": "cpu",
      "url": "https://xuanshuapi.com/register",
      "desc": "面向企业、团队和开发者的多模型 AI 网关，统一接入 Claude、GPT、Grok 和 Gemini。"
    },
    {
      "c": "model",
      "name": "飞源 API",
      "icon": "cpu",
      "url": "https://feiyuanapi.com/",
      "desc": "面向 AI 客户端、IDE、Agent 和自动化脚本的 OpenAI-compatible 多模型 API 服务。"
    },
    {
      "c": "model",
      "name": "openkey.cloud",
      "icon": "cpu",
      "url": "https://faucet.openkey.cloud/",
      "desc": "Free ChatGPT API",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "coding",
      "name": "Cursor",
      "icon": "code",
      "url": "https://cursor.com/",
      "desc": "AI代码编辑器，提供代码补全、问答、重构和智能体式开发能力。",
      "tags": [
        "热门"
      ]
    },
    {
      "c": "coding",
      "name": "FreelyAi",
      "icon": "code",
      "url": "https://freelyai.liujiarong.online/",
      "desc": "全网最爽AI神器！🔥完全免费+免登录，满血DeepSeek-R1无限次用，畅玩众多智能模型，写作绘图代码全搞定💥"
    },
    {
      "c": "coding",
      "name": "NexusAI",
      "icon": "code",
      "url": "https://www.nexusmind.tech/",
      "desc": "NexusAI is your gateway to unlimited image generation and AI-powered chat expe…"
    },
    {
      "c": "coding",
      "name": "永久免费GPT4",
      "icon": "code",
      "url": "http://a.x-code.fun/",
      "desc": "免注册永久免费使用GPT4",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "coding",
      "name": "完全免费无广告GPT3.5",
      "icon": "code",
      "url": "https://chat.weijiajin.com/",
      "desc": "完全免费无广告，基于AI的编程助手，提供智能代码补全。"
    },
    {
      "c": "coding",
      "name": "ChatGPT",
      "icon": "code",
      "url": "https://codenews.cc/chatgpt",
      "desc": "ChatGPT中文版在线使用、永久免费、无需登录",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "coding",
      "name": "X-Copilot",
      "icon": "code",
      "url": "https://idea.chat.cloud.copilot.xr21.me/",
      "desc": "多种模型免费使用， 需要登录",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "coding",
      "name": "zyq-chatgpt.github.io",
      "icon": "code",
      "url": "https://zyq-chatgpt.github.io/",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "coding",
      "name": "TRAE",
      "icon": "code",
      "url": "https://www.trae.cn/",
      "desc": "字节跳动推出的AI编程工具，支持代码生成、理解、调试与智能体开发。"
    },
    {
      "c": "coding",
      "name": "Lovable",
      "icon": "code",
      "url": "https://lovable.dev/",
      "desc": "通过自然语言生成和迭代全栈Web应用的AI软件开发平台。"
    },
    {
      "c": "coding",
      "name": "豆包MarsCode AI",
      "icon": "code",
      "url": "https://www.marscode.cn/chat-playground",
      "desc": "豆包旗下的编程助手，提供智能补全、智能预测、智能问答等能力，节省开发时间，释放脑海中的创造力"
    },
    {
      "c": "coding",
      "name": "DetectorTools.ai",
      "icon": "code",
      "url": "https://detectortools.ai/",
      "desc": "用于文本、深度伪造和代码的 AI 检测器工具"
    },
    {
      "c": "coding",
      "name": "创想AI",
      "icon": "code",
      "url": "https://ideaiai.com/",
      "desc": "免登录、免费GPT，支持GPT4，支持Midjourney绘图"
    },
    {
      "c": "coding",
      "name": "Public Free Suffix",
      "icon": "code",
      "url": "https://publicfreesuffix.org/",
      "desc": "面向开发者、学生和 AI 应用的免费子域名与 Anycast DNS 托管服务，提供 REST API 和 MCP，支持域名注册及 DNS 记录管理。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "coding",
      "name": "POMOAI",
      "icon": "code",
      "url": "https://www.pomoai.com/",
      "desc": "面向中文用户的开源 AI 工作台，提供 GitHub 项目发现、活跃度分析、部署说明和桌面端一键启动。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "coding",
      "name": "Xquik",
      "icon": "search",
      "url": "https://xquik.com/",
      "desc": "提供 X / Twitter 搜索、推文与账号数据导出、回复及关注者查询的开发工具，支持 API 和 MCP 接入。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "coding",
      "name": "agent-qa",
      "icon": "code",
      "url": "https://vostride.com/",
      "desc": "面向网页、Android 与 iOS 应用的测试智能体，提供 CLI、MCP 和持久记忆，输出可复核的测试证据。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "coding",
      "name": "ReadGZH",
      "icon": "code",
      "url": "https://readgzh.site/",
      "desc": "将微信公众号文章转换为适合 AI 读取的精简页面，提供 REST API、MCP 与有限免费额度。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "coding",
      "name": "FaviconDL",
      "icon": "image",
      "url": "https://favicondl.com/",
      "desc": "按网址查找并下载网站发布的 ICO、PNG 和 SVG 图标，提供免 Key JSON API 与图片转 favicon 功能。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "coding",
      "name": "All API Hub",
      "icon": "code",
      "url": "https://all-api-hub.qixing1217.top/",
      "desc": "AI API 中转站账号管理扩展，集中查看余额与用量，提供模型比价及自动签到。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "coding",
      "name": "FlashData Google Search 与 YouTube 数据工具（MCP / CLI）",
      "icon": "search",
      "url": "https://flashdata.dev/",
      "desc": "为 AI Agent 提供 Google 搜索、YouTube 搜索与元数据、已有字幕及媒体交付的数据工具，支持 MCP 与 CLI，API 按 Credi…",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "coding",
      "name": "easi.run",
      "icon": "code",
      "url": "https://easi.run/",
      "desc": "可自托管的 Chrome 浏览器会话服务，供外部 AI Agent 通过 MCP 或 REST 操作，支持实时查看、人工接管与隔离配置。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "coding",
      "name": "Aural",
      "icon": "code",
      "url": "https://aural-ai.com/",
      "desc": "开源、可自托管的 AI 面试平台，支持多模态面试、自适应追问、评分、代码编辑器与白板。"
    },
    {
      "c": "coding",
      "name": "AI代码生成器",
      "icon": "code",
      "url": "https://aws.amazon.com/cn/codewhisperer/",
      "desc": "Amazon AI代码生成器",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "coding",
      "name": "智普AI",
      "icon": "code",
      "url": "http://models.aminer.cn/",
      "desc": "认知大模型"
    },
    {
      "c": "coding",
      "name": "Tabnine AI",
      "icon": "code",
      "url": "https://www.tabnine.com/",
      "desc": "The AI coding assistant that you control"
    },
    {
      "c": "coding",
      "name": "Notion AI",
      "icon": "code",
      "url": "https://www.notion.so/product/ai",
      "desc": "Knowledge, answers, ideas. One click away."
    },
    {
      "c": "coding",
      "name": "github.com",
      "icon": "code",
      "url": "https://github.com/features/copilot/",
      "desc": "GitHubCopilot"
    },
    {
      "c": "coding",
      "name": "aihelperbot.com",
      "icon": "code",
      "url": "https://aihelperbot.com/",
      "desc": "AI Build SQL"
    },
    {
      "c": "coding",
      "name": "bito.ai",
      "icon": "code",
      "url": "https://bito.ai/",
      "desc": "AI编程辅助工具"
    },
    {
      "c": "coding",
      "name": "replit.com",
      "icon": "code",
      "url": "https://replit.com/site/ghostwriter",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "coding",
      "name": "regex.ai",
      "icon": "code",
      "url": "https://regex.ai/",
      "desc": "AI正则表达式"
    },
    {
      "c": "coding",
      "name": "codeium.com",
      "icon": "code",
      "url": "https://codeium.com/",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "coding",
      "name": "kodezi.com",
      "icon": "code",
      "url": "https://kodezi.com/",
      "desc": "AI编程助手"
    },
    {
      "c": "imaging",
      "name": "Midjourney",
      "icon": "palette",
      "url": "https://www.midjourney.com/",
      "desc": "主流AI图像生成平台，通过文本提示创作高质量艺术与设计视觉。",
      "tags": [
        "热门"
      ]
    },
    {
      "c": "imaging",
      "name": "AIBox-一站式AI工具平台",
      "icon": "layout",
      "url": "https://chat.aibox365.cn/",
      "desc": "一站式AI工具平台，提供GPT4o、o1、Claude3.5、Gemini1.5等模型，支持Midjourney绘图、AIPPT等应用，每日提供免费使用额度。"
    },
    {
      "c": "imaging",
      "name": "免费ChatGPT-4、Claude 3.5 Sonne",
      "icon": "image",
      "url": "https://easychat.fun/",
      "desc": "免费gpt-4和claude3，无要注册登录，无付费渠道，可画图识文件，基础模型150次/天，部分模型50次/天（gpt-4-all），可用模型包括：ope…"
    },
    {
      "c": "imaging",
      "name": "360鸿图",
      "icon": "image",
      "url": "https://tu.360.cn/",
      "desc": "只要输入文字描述的创意，就能快速生成多种不同风格的精美画作～. 高级设置. 叠加风格. 请输入，按回车确认. 插画. 油画. 摄影. 水彩. 素描. 水墨画…"
    },
    {
      "c": "imaging",
      "name": "AI问答宝",
      "icon": "search",
      "url": "https://share.wendabao.net/",
      "desc": "免费GPT-4，支持联网搜索、画图，无需登录",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "imaging",
      "name": "小狐狸GPT",
      "icon": "palette",
      "url": "https://xhlgpt.com/",
      "desc": "只能绘画，智能写作",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "imaging",
      "name": "3AM",
      "icon": "image",
      "url": "https://3am.com.hk/",
      "desc": "註冊後完全免費無限制使用GPT3.5Turbo ， Claude3 Haiku ， Midjourney Relax模式，專注繁體中文AI 體驗 介面簡潔…"
    },
    {
      "c": "imaging",
      "name": "比心123问答绘画",
      "icon": "palette",
      "url": "https://1.bixin123.com/",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "imaging",
      "name": "财源AI",
      "icon": "image",
      "url": "https://ai.cyvip.vip/",
      "desc": "支持GPT4，支持Midjourney绘图"
    },
    {
      "c": "imaging",
      "name": "Canva AI",
      "icon": "tv",
      "url": "https://www.canva.com/ai/",
      "desc": "Canva内置AI创意套件，支持生成设计、图像、文案、演示和视频。"
    },
    {
      "c": "imaging",
      "name": "即梦 AI",
      "icon": "tv",
      "url": "https://jimeng.jianying.com/",
      "desc": "字节跳动旗下AI创作平台，支持文生图、图生图与视频生成编辑。"
    },
    {
      "c": "imaging",
      "name": "Leonardo.Ai",
      "icon": "tv",
      "url": "https://leonardo.ai/",
      "desc": "面向创作者的AI视觉平台，提供图像生成、编辑、画布与视频创作工具。"
    },
    {
      "c": "imaging",
      "name": "HelloGen",
      "icon": "tv",
      "url": "https://hellogen.ai/",
      "desc": "HelloGen 是 AI 图片和视频生成工作台，生图免费不限量、无水印且带商用授权。图片可选 Z-Image Turbo、Qwen Image Edit、…"
    },
    {
      "c": "imaging",
      "name": "ArtImageHub",
      "icon": "image",
      "url": "https://toolverto.com/",
      "desc": "AI 老照片修复工具，修复划痕、褪色、损坏照片，支持上色，免费试用"
    },
    {
      "c": "imaging",
      "name": "nano-banana PRO中文版",
      "icon": "image",
      "url": "https://www.nano-banana.cn/",
      "desc": "nano-banana PRO 纳米香蕉中文官方站|Ai生成高清4K图片|手绘手办节日提示词大全"
    },
    {
      "c": "imaging",
      "name": "瓜皮AI绘画 (MJ)",
      "icon": "palette",
      "url": "http://hh.gpihh.cc/",
      "desc": "瓜皮AI绘画是基于 Midjourney 的一款 AI 绘图工具"
    },
    {
      "c": "imaging",
      "name": "closeai.red",
      "icon": "layout",
      "url": "https://gonnai.com/",
      "desc": "AI对话、文生图、文字生成PPT",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "imaging",
      "name": "TattooStencil",
      "icon": "image",
      "url": "https://tattoostencil.org/",
      "desc": "将照片、手稿或手写字转换为可打印的纹身转印线稿，提供免费预览与按额度生成。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "imaging",
      "name": "Vivify GPT Image 2.5",
      "icon": "image",
      "url": "https://vivify.video/models/gpt-image-2-5",
      "desc": "文生图与参考图编辑工具，提供 GPT Image 2.5 模型选项，适用于产品图、海报和社交素材，按积分生成。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "imaging",
      "name": "aigeneratornsfw.com",
      "icon": "tv",
      "url": "https://aigeneratornsfw.com/",
      "desc": "面向成年用户的浏览器图像与视频创作工具，支持参考图编辑、图生视频和文生视频，提供有限免费积分及付费选项。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "imaging",
      "name": "Fomrix",
      "icon": "image",
      "url": "https://fomrix.com/",
      "desc": "从文字或参考图生成 GLB 三维资产，另提供浏览器模型查看与格式转换工具；AI 生成需账号和积分。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "imaging",
      "name": "Describe Image",
      "icon": "notebook",
      "url": "https://describeimage.io/",
      "desc": "将图片、截图和文档转换为描述、替代文本、OCR 文本与提示词，另支持视觉问答和视频笔记，含有限免费额度。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "imaging",
      "name": "BabyVideo.ai",
      "icon": "tv",
      "url": "https://babyvideo.ai/",
      "desc": "基于经授权的照片生成娱乐性未来宝宝预览，并提供照片动画与创意视频功能，使用签到或付费积分。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "imaging",
      "name": "中文 AI 创作卡片工具",
      "icon": "tv",
      "url": "https://prompthink.com/",
      "desc": "帮助小红书、短视频、朋友圈、电商和职场场景快速生成中文内容的 AI 创作卡片工具。"
    },
    {
      "c": "imaging",
      "name": "InnerCanvas",
      "icon": "palette",
      "url": "https://innercanvas.app/",
      "desc": "通过绘画提示生成非诊断性的 AI 引导反思报告，用于私人自我觉察和日记。"
    },
    {
      "c": "imaging",
      "name": "pixsolo.com",
      "icon": "palette",
      "url": "https://pixsolo.com/",
      "desc": "基于 Web 的 Apple App Store 和 Google Play 商店截图设计与美化工具。"
    },
    {
      "c": "imaging",
      "name": "Easy Remove Watermark",
      "icon": "image",
      "url": "https://easyremovewatermark.com/",
      "desc": "在浏览器本地去除 Gemini 生成图片右下角可见水印的免费工具。"
    },
    {
      "c": "imaging",
      "name": "AI Colors",
      "icon": "image",
      "url": "https://aicolors.co/",
      "desc": "AI Color Palette Generator - Browse, Edit, Visualize and Generate Unique Palet…"
    },
    {
      "c": "av",
      "name": "可灵 AI",
      "icon": "tv",
      "url": "https://klingai.com/",
      "desc": "快手推出的AI视频与图像生成平台，支持文本或图片生成高质量视频。"
    },
    {
      "c": "av",
      "name": "海螺视频",
      "icon": "tv",
      "url": "https://hailuoai.com/",
      "desc": "MiniMax旗下AI视频创作平台，支持文生视频、图生视频、多模态参考、图片生成与创意特效。",
      "tags": [
        "热门"
      ]
    },
    {
      "c": "av",
      "name": "ElevenLabs",
      "icon": "music",
      "url": "https://elevenlabs.io/",
      "desc": "AI语音生成平台，提供文本转语音、声音克隆、配音与音频智能体。"
    },
    {
      "c": "av",
      "name": "Suno",
      "icon": "music",
      "url": "https://suno.com/",
      "desc": "通过提示词生成完整歌曲、歌词和人声的主流AI音乐创作平台。"
    },
    {
      "c": "av",
      "name": "Unlucid AI",
      "icon": "tv",
      "url": "https://unlucid.ai/",
      "desc": "为梦想家们提供的免费、无限制的 AI 工具。利用 AI 的力量创作、编辑和制作动画视频。"
    },
    {
      "c": "av",
      "name": "云衍AI",
      "icon": "music",
      "url": "https://ai.yunyan.chat/chat",
      "desc": "3.5模型永久免费。对接官网全部GPTS应用，无需自己再写提示词，一站式AI应用，AI对话，AI绘画，AI音乐，AI视频，一套全搞定！！",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "av",
      "name": "光梦 AlphaDrama",
      "icon": "music",
      "url": "https://www.getalphadrama.com/",
      "desc": "AI 短剧、漫剧与带货视频创作平台，支持小说转剧本、角色形象一致性、自动分镜、配音字幕和多模型视频生成；国内入口为 ad.yosweet.cn。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "av",
      "name": "LiveFaceSwap",
      "icon": "tv",
      "url": "https://livefaceswap.ai/",
      "desc": "面向实时摄像头画面的换脸工具，可通过虚拟摄像头接入 OBS、Zoom 等应用，云端处理按积分使用。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "av",
      "name": "压缩 (yasuo.app) / NeatCompress",
      "icon": "file",
      "url": "https://yasuo.app/",
      "desc": "在浏览器本地压缩视频、图片和 PDF，使用 WebCodecs 与 WebAssembly，无需上传文件。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "av",
      "name": "Hotel Lobby AI",
      "icon": "tv",
      "url": "https://hotellobbyaigenerator.co/",
      "desc": "基于短视频模板或自备视频替换经授权的成年人肖像，另有双人图像创作工具，提供有限试用。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "av",
      "name": "VocalRemove Studio",
      "icon": "tv",
      "url": "https://www.echoseq.com/zh",
      "desc": "提供 AI 人声分离、降噪和多轨拆分，另含浏览器本地音频裁剪、拼接及格式转换；AI 功能需登录及会员。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "av",
      "name": "声之帆 VoxSail",
      "icon": "music",
      "url": "https://voxsail.com/zh",
      "desc": "音视频本地化工作台，支持转写、字幕翻译、AI 配音、在线校对与媒体导出，提供体验积分及付费订阅。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "av",
      "name": "kxAI 音频转录专家",
      "icon": "globe",
      "url": "https://kx.bamboochat.cn/",
      "desc": "提供音视频和实时内容转文字及翻译。"
    },
    {
      "c": "av",
      "name": "思畅AI",
      "icon": "tv",
      "url": "https://sichang.xyz/",
      "desc": "私密、无审查的中文 AI 角色扮演、沉浸对话及图像视频创作平台。"
    },
    {
      "c": "av",
      "name": "优秀同传",
      "icon": "music",
      "url": "https://interpreter.youshowedu.com/",
      "desc": "面向会议、课堂、旅行和日常交流的实时语音识别与翻译工具。"
    },
    {
      "c": "av",
      "name": "BibiGPT",
      "icon": "tv",
      "url": "https://bibigpt.co/",
      "desc": "一键总结音视频内容"
    },
    {
      "c": "writing",
      "name": "腾讯ima.copilot",
      "icon": "pen",
      "url": "https://ima.qq.com/",
      "desc": "腾讯 ima. copilot 是腾讯旗下基于自研的混元大模型技术推出的 AI 智能工作台，主要面向学习、办公等场景"
    },
    {
      "c": "writing",
      "name": "心流AI助手",
      "icon": "library",
      "url": "https://www.iflow.cn/",
      "desc": "心流是一款AI助手，帮助你高效获取知识，无论是日常娱乐生活百科还是专业学术论文知识，都可以轻松解答，让你快速进入心流状态，让知识随心流动！"
    },
    {
      "c": "writing",
      "name": "厉害猫AI",
      "icon": "pen",
      "url": "https://www.lihaimao.com/",
      "desc": "免费问答，内涵2w+写作模式"
    },
    {
      "c": "writing",
      "name": "WPS AI",
      "icon": "file",
      "url": "https://ai.wps.cn/",
      "desc": "金山办公推出的AI办公助手，覆盖文档、表格、演示和PDF智能处理。"
    },
    {
      "c": "writing",
      "name": "Gamma",
      "icon": "file",
      "url": "https://gamma.app/",
      "desc": "AI驱动的演示、文档与网页创作工具，可快速生成并协作编辑内容。"
    },
    {
      "c": "writing",
      "name": "Lynote.ai",
      "icon": "globe",
      "url": "https://lynote.ai/",
      "desc": "AI 文本人性化改写平台：自动融合 LLM 多轮重写与跨引擎翻译等管线，为每段文本选择最优方案，让 AI 草稿更自然、更易读，提供免费试用"
    },
    {
      "c": "writing",
      "name": "opao.xyz",
      "icon": "pen",
      "url": "https://aappt.opao.xyz/",
      "tags": [
        "需登录"
      ]
    },
    {
      "c": "writing",
      "name": "kdpbook.io",
      "icon": "file",
      "url": "https://kdpbook.io/",
      "desc": "对话式 AI 图书工作室，支持写作、配图、排版，并导出 Amazon KDP 内页、封面 PDF 和 Kindle 电子书。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "writing",
      "name": "Pagekin（AI 小说作家）",
      "icon": "pen",
      "url": "https://www.orz.md/ai-novel-writer",
      "desc": "开源长篇小说创作桌面软件，在同一工作台管理角色、世界观、大纲、章节、审稿与修稿。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "writing",
      "name": "ORANO",
      "icon": "search",
      "url": "https://oranoai.com/",
      "desc": "将收藏的视频、文章和 PDF 整理为可搜索的摘要、要点和行动计划，支持网页及移动端，另有 Pro 订阅。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "writing",
      "name": "漫画翻译器",
      "icon": "globe",
      "url": "https://www.mangatranslate.com/zh-CN",
      "desc": "识别并翻译漫画图片中的文字，支持批量翻译、在线校对与排版编辑，并提供 API 接入。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "writing",
      "name": "Doc2X",
      "icon": "globe",
      "url": "https://doc2x.noedgeai.com/",
      "desc": "AI 文档解析与翻译工具，将 PDF、扫描件和图片转换为 Word、Markdown 或 LaTeX，识别公式与表格，提供插件和 API。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "writing",
      "name": "HumanizeAI",
      "icon": "pen",
      "url": "https://www.humanizeaiwork.com/",
      "desc": "将 AI 生成的英文草稿改写为更自然的文字，支持多种风格，提供免注册使用入口。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "writing",
      "name": "Voxt",
      "icon": "music",
      "url": "https://voxt.actnow.dev/",
      "desc": "AI 语音生产力应用，提供转录、翻译、语音对话、笔记、自动化以及会议字幕和摘要。"
    },
    {
      "c": "writing",
      "name": "Talks-AI",
      "icon": "file",
      "url": "https://www.talks-ai.com/",
      "desc": "5分钟训练你的专属AI聊天机器人，秒懂文档，类似chatpdf\\chatdoc\\quivr\\chatgpt，效率神器。",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "writing",
      "name": "ChatDOC",
      "icon": "file",
      "url": "https://chatdoc.com/",
      "desc": "AI Chat with PDF Documents | 与文件交谈获取即时答案，并附带引用来源。"
    },
    {
      "c": "writing",
      "name": "文心一言",
      "icon": "file",
      "url": "https://yiyan.baidu.com/welcome",
      "desc": "既能写文案、读文档，又能脑洞大开、答疑解惑，还能倾听你的故事、感受你的心声。"
    },
    {
      "c": "writing",
      "name": "DocsGPT",
      "icon": "pen",
      "url": "https://docsgpt.arc53.com/",
      "desc": "Technical documentation assistant"
    },
    {
      "c": "writing",
      "name": "DeepL Write",
      "icon": "pen",
      "url": "https://www.deepl.com/zh/write",
      "desc": "人工智能驱动的写作助手"
    },
    {
      "c": "writing",
      "name": "朱鸾AI写作助手",
      "icon": "pen",
      "url": "https://wenzhang.zhuluan.com/",
      "desc": "AI文章生成器"
    },
    {
      "c": "writing",
      "name": "Friday AI",
      "icon": "pen",
      "url": "https://heyfriday.cn/",
      "desc": "Friday AI, 智能写作系统"
    },
    {
      "c": "writing",
      "name": "Writesonic",
      "icon": "pen",
      "url": "https://writesonic.com/",
      "desc": "Best AI Writer, Copywriting & Paraphrasing Tool"
    },
    {
      "c": "writing",
      "name": "MotionGo",
      "icon": "layout",
      "url": "http://motion.yoo-ai.com/",
      "desc": "命令式智能对话一键生成PPT，让PPT文档表达更加快速、高效"
    },
    {
      "c": "writing",
      "name": "OnePoint",
      "icon": "message",
      "url": "https://www.1ptai.com/",
      "desc": "AI 聊天、编写、阅读和编码",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "writing",
      "name": "xiezuocat.com",
      "icon": "pen",
      "url": "https://xiezuocat.com/",
      "desc": "密塔写作猫"
    },
    {
      "c": "edu",
      "name": "范文喵",
      "icon": "grad",
      "url": "https://ai.wolian.chat/",
      "desc": "针对大学生群体的写作工具"
    },
    {
      "c": "edu",
      "name": "DocGPT-第二大脑",
      "icon": "library",
      "url": "https://chat.phitrellis.com/",
      "desc": "免费使用GPT-4o mini，支持上传文献，论文撰写"
    },
    {
      "c": "edu",
      "name": "ichat2019",
      "icon": "message",
      "url": "https://ichat2019.top/",
      "desc": "款基于ChatGPT3.5，ChatGPT4，DALL·E 3，ERNIE-Bot 4（文言一心）等Ai大模型的工作生活学习相关的聊天对话助手，ChatGP…"
    },
    {
      "c": "edu",
      "name": "YAGC",
      "icon": "grad",
      "url": "https://yagc.tahriver.online/",
      "desc": "YAGC是一个动态的移动学习平台，提供多样化的教育资源，支持用户随时随地进行学习，促进灵活的教育方式。"
    },
    {
      "c": "edu",
      "name": "海螺知物",
      "icon": "grad",
      "url": "https://haloweava.com/",
      "desc": "面向 0—6 岁儿童的睡前故事与 AI 绘本网站，提供年龄分级故事、插画绘本、英文点读和打印。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "edu",
      "name": "3D Solar System",
      "icon": "grad",
      "url": "https://3dsolarsystem.net/",
      "desc": "浏览器端交互太阳系模拟器，支持真实或压缩尺度及公转动画，用于科普与课堂展示，无需安装。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "edu",
      "name": "优秀雅思",
      "icon": "grad",
      "url": "https://ielts.youshowedu.com/",
      "desc": "提供雅思听力、阅读、写作与口语在线练习和备考支持。"
    },
    {
      "c": "edu",
      "name": "优秀 PTE",
      "icon": "grad",
      "url": "https://pte.youshowedu.com/",
      "desc": "提供 PTE 口语、写作等能力的在线练习、模拟考试与备考支持。"
    },
    {
      "c": "biz",
      "name": "LLM+RAG，支持Showdoc批量导入",
      "icon": "chart",
      "url": "https://aid.daxue.cloud/",
      "desc": "Empower Your Business with LLM & RAG。快速搭建企业知识机器人，实现数据获取与深度挖掘的加速"
    },
    {
      "c": "biz",
      "name": "得理法律大模型",
      "icon": "chart",
      "url": "https://www.delilegal.com/",
      "desc": "基于法律大模型开发的智慧法律系统 为用户提供“AI+律师”的解决方案"
    },
    {
      "c": "biz",
      "name": "灵感蜂巢 PromptHive",
      "icon": "chart",
      "url": "https://www.prompt-hive.net/",
      "desc": "面向中文自媒体创作的 AI 提示词库，按平台与创作环节整理带变量槽位的结构化模板。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "biz",
      "name": "星云业务通",
      "icon": "chart",
      "url": "https://www.xingyunzuo.cn/ai-system-connector",
      "desc": "连接 AI 工作入口与企业 ERP、CRM、OA 系统，支持自然语言查询、分析与业务办理，并提供授权、人工确认和审计。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "biz",
      "name": "奇荐GEO",
      "icon": "search",
      "url": "https://geo.speedai.com/",
      "desc": "面向企业的 AI 搜索品牌监测与 GEO 分析工具，追踪品牌提及、竞品表现及引用来源，并保留回答与页面快照。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "biz",
      "name": "SocialEcho",
      "icon": "message",
      "url": "https://socialecho.cn/",
      "desc": "面向出海企业和营销团队的全社媒 AI 工作台，支持内容、发布、客服、监听、分析与自动化。"
    },
    {
      "c": "biz",
      "name": "Beepop",
      "icon": "image",
      "url": "https://beepop.ai/",
      "desc": "将单张 SKU 图片生成 Amazon 商品详情内容和可销售的商品图片。"
    },
    {
      "c": "biz",
      "name": "TWTchat智能客服",
      "icon": "tv",
      "url": "https://twt.com/",
      "desc": "集成在线客服、工单、群聊、远程协助、音视频与 AI 的全球化智能服务协作平台。"
    },
    {
      "c": "biz",
      "name": "Jasper.AI",
      "icon": "chart",
      "url": "https://www.jasper.ai/",
      "desc": "面向企业营销团队的 AI 副驾驶"
    },
    {
      "c": "apps",
      "name": "苏哲AI",
      "icon": "star",
      "url": "https://suzhe.ai/",
      "desc": "面向中文用户的 AI 会员开通平台，提供 ChatGPT、Gemini 等会员服务，支持支付宝付款与网页自助激活。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "apps",
      "name": "MemeBako 表情包图片大全",
      "icon": "image",
      "url": "https://www.memebako.com/",
      "desc": "表情包与网络热梗图片站，提供高清专题、贴纸、GIF、壁纸及在线表情包制作，支持免登录浏览和复制。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "apps",
      "name": "DisconfirmAI / 证伪AI",
      "icon": "chart",
      "url": "https://disconfirmai.com/zh",
      "desc": "面向投资研究的阅读与研究平台，整理公开信源、财报与数据，帮助寻找反面证据并构建研究框架，不执行自动交易。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "apps",
      "name": "Color Genius",
      "icon": "star",
      "url": "https://colorgenius.art/",
      "desc": "通过拖动 RGB 滑块还原目标颜色的浏览器色感测试小游戏，无需注册。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "apps",
      "name": "MESL 机场",
      "icon": "star",
      "url": "https://dg.meslcloud.org/",
      "desc": "提供多地区节点的网络订阅服务，采用 BGP 入口与 IEPL/IPLC 中继，面向 AI 工具访问与日常网络需求。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "apps",
      "name": "DeepSeek酱语录",
      "icon": "search",
      "url": "https://ai-meme.cdqyfdbymn.me/",
      "desc": "DeepSeek 娘化梗图库，支持瀑布流浏览、台词搜索、图片保存和分享图生成。"
    },
    {
      "c": "apps",
      "name": "aigZero",
      "icon": "star",
      "url": "https://aigzero.ai/",
      "desc": "提供 AI 内容检测、查重、事实核查与文本 Humanize 的在线工具。"
    },
    {
      "c": "hub",
      "name": "Navtools.ai",
      "icon": "globe",
      "url": "https://navtools.ai/",
      "desc": "人工智能工具导航站，探索最佳人工智能网站与工具"
    },
    {
      "c": "hub",
      "name": "曼巴比特",
      "icon": "globe",
      "url": "https://www.mambabit.com/",
      "desc": "为每项任务找到完美的人工智能工具。"
    },
    {
      "c": "hub",
      "name": "Gpt Demo",
      "icon": "globe",
      "url": "https://www.gptdemo.net/cn/",
      "desc": "ChatGPT、生成式 AI 和 GPT 应用程序",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "hub",
      "name": "Toolkitly",
      "icon": "globe",
      "url": "https://www.toolkitly.com/",
      "desc": "Toolkitly: AI Tools for Productivity & Innovation"
    },
    {
      "c": "hub",
      "name": "AI Tools Saver",
      "icon": "image",
      "url": "https://www.aitoolsaver.com/",
      "desc": "AI Tools Saver 是一个全球 AI 软件优惠与精选目录，覆盖 40+ 类别（如 AI 图像生成、聊天机器人、文本写作与照片编辑等），帮助你快速比…"
    },
    {
      "c": "hub",
      "name": "Startup Ai Tools",
      "icon": "globe",
      "url": "https://www.startupaitools.com/",
      "desc": "Browse Best AI Tools Directory in 40+ categories like ai content detection, pl…"
    },
    {
      "c": "hub",
      "name": "AI TOP100",
      "icon": "tv",
      "url": "https://www.aitop100.cn/",
      "desc": "AI TOP100是国内专业的AI工具，资讯，AIGC大赛，AI视频创作平台"
    },
    {
      "c": "hub",
      "name": "https://www.bitaigpt.com/",
      "icon": "globe",
      "url": "https://www.bitaigpt.com/",
      "desc": "比特智能AI导航"
    },
    {
      "c": "hub",
      "name": "MeoAI",
      "icon": "globe",
      "url": "https://www.meoai.net/",
      "desc": "17000＋AI工具导航 | 全球AI工具集合 | 免费AI工具 | 专注AI人工智能"
    },
    {
      "c": "hub",
      "name": "Tool List Ai",
      "icon": "globe",
      "url": "https://toollist.ai/",
      "desc": "Find the best AI tools for every task"
    },
    {
      "c": "hub",
      "name": "AI Tools Radar",
      "icon": "globe",
      "url": "https://aitoolsradar.com/",
      "desc": "AI 工具导航与产业资讯站，提供工具发现、产品对比、新闻、博客和每日 Newsletter。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "hub",
      "name": "AI Price Institute",
      "icon": "globe",
      "url": "https://www.china-ai-arbitrage.xyz/",
      "desc": "AI 服务价格与免费额度资讯站，整理官方价格、第三方 API 报价和额度信息，并提供数字订阅比价工具。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "hub",
      "name": "51发现导航",
      "icon": "globe",
      "url": "https://51cgw9.cc/",
      "desc": "中文 AI 工具导航，按任务整理工具，标注国内访问与免费情况，并提供工具对比和热榜。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "hub",
      "name": "WarpNav 曲速导航 · AI 模型应用导航",
      "icon": "tv",
      "url": "https://warpnav.com/favorites/ai-apps",
      "desc": "中文 AI 应用导航，按视频、图像、文本、编码和多模态分类整理官方入口，并提供教程与技术科普。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "hub",
      "name": "探兔AI导航",
      "icon": "globe",
      "url": "https://www.navtool.cn/",
      "desc": "提供 AI 工具推荐与 AI 应用分类发现的中文导航站。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "hub",
      "name": "巨浪 AI",
      "icon": "globe",
      "url": "https://jvlangai.com/",
      "desc": "面向模型 API 使用者的中文报价查询站，整理服务商公开价格与来源，并提供接入和故障排查指南。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "hub",
      "name": "听说了吗？（AnyMesgs）",
      "icon": "globe",
      "url": "https://anymesgs.com/",
      "desc": "提供 AI 与科技资讯解读，说明事件与背景，支持中文、英文和日文，附原始来源与 RSS。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "hub",
      "name": "Nano Banana 指南",
      "icon": "image",
      "url": "https://nano-banana.live/",
      "desc": "整理 Nano Banana / Gemini 图像 API 用法和本地、离线替代方案的开发者资源指南。",
      "tags": [
        "新增"
      ]
    },
    {
      "c": "hub",
      "name": "DSH Meme Hub",
      "icon": "globe",
      "url": "https://dsh-meme-hub.cdqyfdbymn.me/",
      "desc": "DeepSeek Harness 社区插件导航站，收录插件、分类与每日 Star 排行榜。"
    },
    {
      "c": "hub",
      "name": "OkkMax",
      "icon": "globe",
      "url": "https://okkmax.com/",
      "desc": "AI 中转站点评与监测工具，用于在使用或充值前评估站点。"
    },
    {
      "c": "hub",
      "name": "YiceKit",
      "icon": "tv",
      "url": "https://yicekit.com/",
      "desc": "中文 AI 工具导航与在线工具箱，覆盖写作、绘画、视频、编程、办公、营销和 SEO。"
    },
    {
      "c": "hub",
      "name": "未来百科",
      "icon": "globe",
      "url": "https://www.huntagi.com/",
      "desc": "为发现全球优质AI工具产品而生"
    },
    {
      "c": "hub",
      "name": "AIGC导航",
      "icon": "globe",
      "url": "https://www.aigc.cn/",
      "desc": "生成式AI工具导航平台-全品类AI应用商店"
    },
    {
      "c": "hub",
      "name": "AI导航网",
      "icon": "globe",
      "url": "https://www.ainav.cn/",
      "desc": "精选AI人工智能工具"
    },
    {
      "c": "hub",
      "name": "AIHub",
      "icon": "globe",
      "url": "https://www.aihub.cn/",
      "desc": "发现最新优质AI工具"
    },
    {
      "c": "hub",
      "name": "AI工具导航",
      "icon": "globe",
      "url": "https://www.uxmap.cn/page/#/uxmap/preview?id=38218"
    },
    {
      "c": "hub",
      "name": "AI Ddepot",
      "icon": "globe",
      "url": "https://aidepot.co/",
      "desc": "Discover The Best New AI Tools"
    },
    {
      "c": "hub",
      "name": "Creaitives.com",
      "icon": "globe",
      "url": "https://www.creaitives.com/tools",
      "desc": "Browse the largest database of AI"
    },
    {
      "c": "hub",
      "name": "Futurepedia",
      "icon": "globe",
      "url": "https://www.futurepedia.io/",
      "desc": "Discover what AI can do for you"
    },
    {
      "c": "hub",
      "name": "TopTools",
      "icon": "globe",
      "url": "https://www.toptools.ai/",
      "desc": "AI tools directory and discover the best AI tools"
    },
    {
      "c": "hub",
      "name": "AI Tool Navigation",
      "icon": "globe",
      "url": "https://www.aitoolnavigation.com/",
      "desc": "Discover the best AI tools"
    },
    {
      "c": "hub",
      "name": "AI Valley",
      "icon": "globe",
      "url": "https://www.theaivalley.com/"
    },
    {
      "c": "hub",
      "name": "Future Tools",
      "icon": "globe",
      "url": "https://www.futuretools.io/",
      "desc": "Find The Exact AI Tool For Your Needs"
    },
    {
      "c": "hub",
      "name": "aiagc.com",
      "icon": "globe",
      "url": "https://www.aiagc.com/",
      "desc": "AIAGC 导航",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "hub",
      "name": "图钉AI导航网",
      "icon": "globe",
      "url": "https://ai.tboxn.com/",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "hub",
      "name": "AI研究所",
      "icon": "globe",
      "url": "https://www.aiyjs.com/"
    },
    {
      "c": "hub",
      "name": "AI导航",
      "icon": "globe",
      "url": "https://www.ainavpro.com/",
      "desc": "最新最前沿的AI产品"
    },
    {
      "c": "hub",
      "name": "深度导航",
      "icon": "globe",
      "url": "https://www.deepdh.com/",
      "desc": "分享互联网最具价值的网站"
    },
    {
      "c": "hub",
      "name": "图翼AI导航",
      "icon": "globe",
      "url": "https://www.tuyiyi.com/show-34"
    },
    {
      "c": "hub",
      "name": "优设AI导航",
      "icon": "globe",
      "url": "https://hao.uisdc.com/ai/",
      "desc": "专业AIGC网站导航 - 热门AI工具每周更新"
    },
    {
      "c": "hub",
      "name": "explainthis.io",
      "icon": "globe",
      "url": "https://www.explainthis.io/zh-hant/ai-toolkit",
      "desc": "AI 工具导航"
    },
    {
      "c": "hub",
      "name": "easywithai.com",
      "icon": "globe",
      "url": "https://easywithai.com/"
    },
    {
      "c": "hub",
      "name": "ai-bot.cn",
      "icon": "globe",
      "url": "https://ai-bot.cn/",
      "tags": [
        "免费"
      ]
    },
    {
      "c": "hub",
      "name": "allthingsai.com",
      "icon": "globe",
      "url": "https://allthingsai.com/"
    },
    {
      "c": "hub",
      "name": "saasaitools.com",
      "icon": "globe",
      "url": "https://saasaitools.com/"
    },
    {
      "c": "hub",
      "name": "topai.tools",
      "icon": "globe",
      "url": "https://topai.tools/"
    },
    {
      "c": "hub",
      "name": "aitoolsdirectory.com",
      "icon": "globe",
      "url": "https://aitoolsdirectory.com/"
    },
    {
      "c": "hub",
      "name": "feizhuke.com",
      "icon": "globe",
      "url": "https://feizhuke.com/"
    },
    {
      "c": "hub",
      "name": "iforai.com",
      "icon": "globe",
      "url": "https://iforai.com/"
    },
    {
      "c": "hub",
      "name": "0mo.com",
      "icon": "globe",
      "url": "https://0mo.com/"
    },
    {
      "c": "hub",
      "name": "cooltools.top",
      "icon": "globe",
      "url": "https://cooltools.top/ai.html"
    }
  ]
};
