// AI 视频生成模型数据
const videoModelsData = [
  {
    id: "sora",
    name: "Sora",
    company: "OpenAI",
    type: "text-to-video",
    typeLabel: "文本到视频",
    price: "freemium",
    priceLabel: "免费+付费",
    description: "OpenAI 推出的文本到视频生成模型，能够根据文本描述创建长达一分钟的高质量视频，支持复杂的场景、多角色和运动规律。",
    icon: "📹",
    iconBg: "#10b981",
    featured: true,
    popularity: 98,
    releaseDate: "2024-02",
    features: [
      { name: "60秒视频", icon: "duration" },
      { name: "1080p分辨率", icon: "quality" },
      { name: "多角色场景", icon: "scene" },
      { name: "物理模拟", icon: "physics" }
    ],
    url: "https://openai.com/sora",
    pricing: "部分免费，全面访问需订阅 ChatGPT Plus",
    limitations: [
      "目前仅限特定用户访问",
      "生成时间较长",
      "复杂场景可能出现瑕疵"
    ]
  },
  {
    id: "runway-gen-3",
    name: "Gen-3 Alpha",
    company: "Runway",
    type: "text-to-video",
    typeLabel: "文本到视频",
    price: "paid",
    priceLabel: "付费",
    description: "Runway 推出的第三代视频生成模型，提供卓越的视频质量和精细的控制能力，支持多模态输入和高级编辑功能。",
    icon: "🎬",
    iconBg: "#8b5cf6",
    featured: true,
    popularity: 95,
    releaseDate: "2024-06",
    features: [
      { name: "10秒视频", icon: "duration" },
      { name: "4K支持", icon: "quality" },
      { name: "精细控制", icon: "control" },
      { name: "视频扩展", icon: "extend" }
    ],
    url: "https://runwayml.com/gen3",
    pricing: "基础版$12/月起，企业版定制",
    limitations: [
      "免费额度有限",
      "需付费获得完整功能",
      "部分高级功能仅企业版可用"
    ]
  },
  {
    id: "pika-2",
    name: "Pika 2.0",
    company: "Pika",
    type: "text-to-video",
    typeLabel: "文本到视频",
    price: "freemium",
    priceLabel: "免费+付费",
    description: "专注于易用性的 AI 视频生成平台，支持文本到视频、图像到视频等多种模式，以其简洁的界面和快速生成著称。",
    icon: "✨",
    iconBg: "#f59e0b",
    featured: false,
    popularity: 88,
    releaseDate: "2024-04",
    features: [
      { name: "快速生成", icon: "speed" },
      { name: "图像到视频", icon: "image" },
      { name: "视频编辑", icon: "edit" },
      { name: "社区分享", icon: "share" }
    ],
    url: "https://pika.art",
    pricing: "免费版有限制，Pro版$35/月",
    limitations: [
      "免费版每天限制生成次数",
      "视频长度有限制",
      "高级功能需付费"
    ]
  },
  {
    id: "kling",
    name: "Kling",
    company: "快手 Kling",
    type: "text-to-video",
    typeLabel: "文本到视频",
    price: "freemium",
    priceLabel: "免费+付费",
    description: "快手推出的 AI 视频生成模型，支持最长10秒的高质量视频生成，在中文场景理解和本土化方面具有显著优势。",
    icon: "🎯",
    iconBg: "#ef4444",
    featured: true,
    popularity: 92,
    releaseDate: "2024-06",
    features: [
      { name: "10秒视频", icon: "duration" },
      { name: "中文优化", icon: "language" },
      { name: "动作生成", icon: "motion" },
      { name: "场景理解", icon: "scene" }
    ],
    url: "https://kling.kuaishou.com",
    pricing: "内测阶段，即将开放公测",
    limitations: [
      "目前需申请内测资格",
      "生成配额有限",
      "部分功能仍在优化中"
    ]
  },
  {
    id: "dream-machine",
    name: "Dream Machine",
    company: "Luma AI",
    type: "text-to-video",
    typeLabel: "文本到视频",
    price: "freemium",
    priceLabel: "免费+付费",
    description: "Luma AI 推出的高质量视频生成模型，以其出色的视频质量和真实感著称，支持多种创意表达方式。",
    icon: "💭",
    iconBg: "#0ea5e9",
    featured: false,
    popularity: 90,
    releaseDate: "2024-05",
    features: [
      { name: "高清输出", icon: "quality" },
      { name: "写实风格", icon: "style" },
      { name: "快速迭代", icon: "speed" },
      { name: "API支持", icon: "api" }
    ],
    url: "https://lumalabs.ai/dream-machine",
    pricing: "免费试用，付费解锁更多功能",
    limitations: [
      "免费版有每日限制",
      "商业使用需授权",
      "高峰期可能需排队"
    ]
  },
  {
    id: "veo",
    name: "Veo 2",
    company: "Google",
    type: "text-to-video",
    typeLabel: "文本到视频",
    price: "freemium",
    priceLabel: "免费+付费",
    description: "Google 推出的视频生成模型，作为其 AI 视频技术的重要突破，整合了多项先进技术，提供高质量的视频生成能力。",
    icon: "🔵",
    iconBg: "#3b82f6",
    featured: true,
    popularity: 94,
    releaseDate: "2024-12",
    features: [
      { name: "8秒视频", icon: "duration" },
      { name: "高保真度", icon: "quality" },
      { name: "多风格", icon: "style" },
      { name: "语言理解", icon: "language" }
    ],
    url: "https://gemini.google.com/veo",
    pricing: "部分免费，Google One 订阅用户可用",
    limitations: [
      "需 Google 账号登录",
      "生成速度相对较慢",
      "部分地区不可用"
    ]
  },
  {
    id: "luma-genie",
    name: "Genie",
    company: "Luma AI",
    type: "image-to-video",
    typeLabel: "图像到视频",
    price: "free",
    priceLabel: "免费",
    description: "Luma AI 推出的图像到视频生成模型，可以将静态图像转换为动态视频，让图片生动起来。",
    icon: "🪄",
    iconBg: "#8b5cf6",
    featured: false,
    popularity: 85,
    releaseDate: "2024-03",
    features: [
      { name: "图像转视频", icon: "image" },
      { name: "免费使用", icon: "free" },
      { name: "快速生成", icon: "speed" },
      { name: "多种效果", icon: "effects" }
    ],
    url: "https://lumalabs.ai/genie",
    pricing: "完全免费使用",
    limitations: [
      "功能相对基础",
      "控制选项有限",
      "不适合复杂场景"
    ]
  },
  {
    id: "runway-frame-to-video",
    name: "Frame-to-Video",
    company: "Runway",
    type: "image-to-video",
    typeLabel: "图像到视频",
    price: "paid",
    priceLabel: "付费",
    description: "Runway 的图像到视频功能，可以将单张图像或关键帧转换为流畅的视频，支持高级编辑和风格迁移。",
    icon: "🖼️",
    iconBg: "#8b5cf6",
    featured: false,
    popularity: 82,
    releaseDate: "2023-12",
    features: [
      { name: "关键帧转换", icon: "frame" },
      { name: "风格迁移", icon: "style" },
      { name: "时间插值", icon: "interpolation" },
      { name: "批量处理", icon: "batch" }
    ],
    url: "https://runwayml.com/features/frame-interpolation",
    pricing: "包含在 Runway 订阅中",
    limitations: [
      "需订阅 Runway",
      "对图像质量要求较高",
      "复杂运动生成效果有限"
    ]
  },
  {
    id: "pika-image-to-video",
    name: "Image to Video",
    company: "Pika",
    type: "image-to-video",
    typeLabel: "图像到视频",
    price: "freemium",
    priceLabel: "免费+付费",
    description: "Pika 的图像到视频功能，用户可以上传图片并添加提示词，让静态图片生成动态视频内容。",
    icon: "🖼️",
    iconBg: "#f59e0b",
    featured: false,
    popularity: 80,
    releaseDate: "2024-01",
    features: [
      { name: "图片动起来", icon: "motion" },
      { name: "提示词控制", icon: "prompt" },
      { name: "多种风格", icon: "style" },
      { name: "社交分享", icon: "share" }
    ],
    url: "https://pika.art/features/image-to-video",
    pricing: "免费版有限制，Pro版$35/月",
    limitations: [
      "免费版每天限制",
      "图片大小有限制",
      "部分效果需付费"
    ]
  },
  {
    id: "stable-video-diffusion",
    name: "Stable Video Diffusion",
    company: "Stability AI",
    type: "image-to-video",
    typeLabel: "图像到视频",
    price: "freemium",
    priceLabel: "免费+付费",
    description: "Stability AI 推出的开源视频扩散模型，基于其成功的图像生成技术扩展到视频领域，支持高质量视频生成。",
    icon: "🎞️",
    iconBg: "#10b981",
    featured: false,
    popularity: 83,
    releaseDate: "2023-11",
    features: [
      { name: "开源模型", icon: "open" },
      { name: "高质量输出", icon: "quality" },
      { name: "本地部署", icon: "local" },
      { name: "自定义训练", icon: "custom" }
    ],
    url: "https://stability.ai/stable-video-diffusion",
    pricing: "免费开源，API调用付费",
    limitations: [
      "需要较强硬件配置",
      "生成时间较长",
      "上手门槛较高"
    ]
  },
  {
    id: "make-a-video",
    name: "Make-A-Video",
    company: "Meta",
    type: "text-to-video",
    typeLabel: "文本到视频",
    price: "free",
    priceLabel: "免费",
    description: "Meta 推出的文本到视频生成模型，利用先进的机器学习技术从文本描述生成视频，完全免费开源。",
    icon: "👾",
    iconBg: "#3b82f6",
    featured: false,
    popularity: 78,
    releaseDate: "2022-09",
    features: [
      { name: "开源免费", icon: "open" },
      { name: "文本生成", icon: "text" },
      { name: "图像转视频", icon: "image" },
      { name: "视频插值", icon: "interpolation" }
    ],
    url: "https://makeavideo.studio",
    pricing: "完全免费开源",
    limitations: [
      "技术相对较早",
      "视频质量有限",
      "社区支持为主"
    ]
  },
  {
    id: "emage",
    name: "EMAGE",
    company: "字节跳动",
    type: "text-to-video",
    typeLabel: "文本到视频",
    price: "freemium",
    priceLabel: "免费+付费",
    description: "字节跳动推出的统一时空建模框架，能够从文本、音频等多模态输入生成高质量视频。",
    icon: "🎵",
    iconBg: "#ef4444",
    featured: false,
    popularity: 79,
    releaseDate: "2024-07",
    features: [
      { name: "多模态输入", icon: "multimodal" },
      { name: "高质量", icon: "quality" },
      { name: "动作生成", icon: "motion" },
      { name: "表情同步", icon: "expression" }
    ],
    url: "https://bytedance.com/zh/research/EMAGE",
    pricing: "研究阶段，即将开放",
    limitations: [
      "目前仅限研究使用",
      "商业化时间不确定",
      "访问受限"
    ]
  },
  {
    id: "animate-anyone",
    name: "Animate Anyone",
    company: "阿里巴巴",
    type: "video-to-video",
    typeLabel: "视频到视频",
    price: "freemium",
    priceLabel: "免费+付费",
    description: "阿里巴巴推出的角色动画生成技术，可以从参考图像和姿态序列生成流畅的角色动画视频。",
    icon: "👤",
    iconBg: "#f59e0b",
    featured: false,
    popularity: 81,
    releaseDate: "2023-12",
    features: [
      { name: "角色动画", icon: "character" },
      { name: "姿态控制", icon: "pose" },
      { name: "高清输出", icon: "quality" },
      { name: "实时预览", icon: "realtime" }
    ],
    url: "https://github.com/HumanAIGC/Animate-Anyone",
    pricing: "开源免费",
    limitations: [
      "需要参考图像",
      "对姿态序列有要求",
      "复杂场景效果有限"
    ]
  },
  {
    id: "stable-video-diffusion-img2vid",
    name: "SVD Image-to-Video",
    company: "Stability AI",
    type: "image-to-video",
    typeLabel: "图像到视频",
    price: "freemium",
    priceLabel: "免费+付费",
    description: "Stable Video Diffusion 的图像到视频版本，专门用于将静态图像转换为动态视频内容。",
    icon: "🎬",
    iconBg: "#10b981",
    featured: false,
    popularity: 84,
    releaseDate: "2023-11",
    features: [
      { name: "图像转视频", icon: "image" },
      { name: "开源模型", icon: "open" },
      { name: "高质量", icon: "quality" },
      { name: "可控生成", icon: "control" }
    ],
    url: "https://huggingface.co/stabilityai/stable-video-diffusion",
    pricing: "免费开源",
    limitations: [
      "硬件要求高",
      "生成速度慢",
      "需要技术背景"
    ]
  },
  {
    id: "runway-gen-2",
    name: "Gen-2",
    company: "Runway",
    type: "text-to-video",
    typeLabel: "文本到视频",
    price: "paid",
    priceLabel: "付费",
    description: "Runway Gen-2 是其第二代视频生成模型，相比前代在视频质量和生成速度上都有显著提升。",
    icon: "🎥",
    iconBg: "#8b5cf6",
    featured: false,
    popularity: 86,
    releaseDate: "2023-06",
    features: [
      { name: "文本到视频", icon: "text" },
      { name: "图像到视频", icon: "image" },
      { name: "风格迁移", icon: "style" },
      { name: "视频编辑", icon: "edit" }
    ],
    url: "https://runwayml.com/gen2",
    pricing: "基础版$12/月起",
    limitations: [
      "需付费订阅",
      "免费试用有限",
      "功能不如 Gen-3"
    ]
  },
  {
    id: "cogvideo",
    name: "CogVideo",
    company: "智谱 AI",
    type: "text-to-video",
    typeLabel: "文本到视频",
    price: "freemium",
    priceLabel: "免费+付费",
    description: "智谱 AI 推出的中文优化视频生成模型，支持中英文提示词，在中文场景理解方面表现优异。",
    icon: "🇨🇳",
    iconBg: "#ef4444",
    featured: true,
    popularity: 87,
    releaseDate: "2023-08",
    features: [
      { name: "中英双语", icon: "language" },
      { name: "开源模型", icon: "open" },
      { name: "高质量", icon: "quality" },
      { name: "可本地部署", icon: "local" }
    ],
    url: "https://github.com/THUDM/CogVideo",
    pricing: "开源免费，API 付费",
    limitations: [
      "硬件要求较高",
      "生成时间较长",
      "部分功能需调优"
    ]
  },
  {
    id: "i2vgen-xl",
    name: "I2VGen-XL",
    company: "阿里云",
    type: "image-to-video",
    typeLabel: "图像到视频",
    price: "freemium",
    priceLabel: "免费+付费",
    description: "阿里云推出的高质量图像到视频生成模型，能够保持图像风格一致性的同时生成流畅的动态效果。",
    icon: "☁️",
    iconBg: "#f59e0b",
    featured: false,
    popularity: 75,
    releaseDate: "2023-11",
    features: [
      { name: "风格保持", icon: "style" },
      { name: "高清输出", icon: "quality" },
      { name: "云端处理", icon: "cloud" },
      { name: "批量处理", icon: "batch" }
    ],
    url: "https://modelscope.cn/models/iic/I2VGen-XL",
    pricing: "ModelScope 免费使用",
    limitations: [
      "需要 ModelScope 账号",
      "处理时间较长",
      "复杂场景有限"
    ]
  },
  {
    id: "zeroScope",
    name: "ZeroScope",
    company: "Weights & Biases",
    type: "text-to-video",
    typeLabel: "文本到视频",
    price: "free",
    priceLabel: "免费",
    description: "开源的文本到视频生成模型，专注于快速生成和轻量级部署，适合个人开发者和研究者使用。",
    icon: "⚡",
    iconBg: "#3b82f6",
    featured: false,
    popularity: 72,
    releaseDate: "2023-10",
    features: [
      { name: "开源免费", icon: "open" },
      { name: "轻量模型", icon: "light" },
      { name: "快速生成", icon: "speed" },
      { name: "易于部署", icon: "deploy" }
    ],
    url: "https://huggingface.co/cerspense/zeroscope-v2",
    pricing: "完全免费开源",
    limitations: [
      "视频质量有限",
      "功能相对基础",
      "社区支持为主"
    ]
  },
  {
    id: "laVie",
    name: "LaVie",
    company: "字节跳动",
    type: "text-to-video",
    typeLabel: "文本到视频",
    price: "freemium",
    priceLabel: "免费+付费",
    description: "字节跳动推出的高质量视频生成集成系统，包含文本到视频和视频编辑等多项功能。",
    icon: "🎭",
    iconBg: "#ef4444",
    featured: false,
    popularity: 77,
    releaseDate: "2023-12",
    features: [
      { name: "高质量视频", icon: "quality" },
      { name: "视频编辑", icon: "edit" },
      { name: "帧插值", icon: "interpolation" },
      { name: "创意工具", icon: "creative" }
    ],
    url: "https://github.com/Vchitect/LaVie",
    pricing: "开源免费",
    limitations: [
      "硬件要求高",
      "上手难度较大",
      "文档相对简单"
    ]
  },
  {
    id: "model-scope-animator",
    name: "ModelScope Animator",
    company: "阿里云",
    type: "image-to-video",
    typeLabel: "图像到视频",
    price: "free",
    priceLabel: "免费",
    description: "ModelScope 平台上的动画生成工具，可以从文本和图像生成角色动画，支持多种动画风格。",
    icon: "🎭",
    iconBg: "#f59e0b",
    featured: false,
    popularity: 70,
    releaseDate: "2023-09",
    features: [
      { name: "角色动画", icon: "character" },
      { name: "文本驱动", icon: "text" },
      { name: "开源免费", icon: "open" },
      { name: "多风格", icon: "style" }
    ],
    url: "https://modelscope.cn/models/damo/text_to_video_synthesis",
    pricing: "完全免费",
    limitations: [
      "效果相对基础",
      "控制选项有限",
      "需要技术背景"
    ]
  }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = videoModelsData;
}
