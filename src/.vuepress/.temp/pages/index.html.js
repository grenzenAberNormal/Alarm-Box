export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "https://v1.vuepress.vuejs.org/hero.png",
    "tagline": "AP-Twitter DIY-Alarm-Box",
    "actionText": "Quick Start →",
    "actionLink": "https://twitter.com/alarm_phone",
    "features": [
      {
        "title": "Feature 1 Title",
        "details": "Feature 1 Description"
      },
      {
        "title": "Feature 2 Title",
        "details": "Feature 2 Description"
      },
      {
        "title": "Feature 3 Title",
        "details": "Feature 3 Description"
      }
    ],
    "footer": "Made by Unknown with f❤️"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "index.md",
  "git": {
    "contributors": []
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
