const SITE_CONFIG = {
  // profile setting (required)
  profile: {
    name: "ryoon.with.wisdomtrees",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "A developer",
    bio: "만드는 것을 좋아합니다.",
    email: "ryoon.with.wisdomtrees@gmail.com",
    linkedin: "morethanmin",
    github: "ryoon-with-wisdomtrees",
    instagram: "https://www.instagram.com/ryoon.with.wisdomtree/",
  },
  projects: [
    {
      name: `ryoon-log`,
      href: "https://github.com/ryoon-with-wisdomtrees/morethan-log_ryoon",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Roon.With.Wisomtrees 🌲🍀 ☘️",
    description: "welcome to Ryoon-log!",
  },

  // CONFIG configration (required)
  link: "https://ryoon-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
    auth: process.env.NOTION_KEY,
  },

  // plugin configuration (optional)
  // googleAnalytics: {
  //   enable: false,
  //   config: {
  //     measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
  //   },
  // },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
};

module.exports = { SITE_CONFIG };
