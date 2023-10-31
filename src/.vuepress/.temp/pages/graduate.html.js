export const data = JSON.parse("{\"key\":\"v-5690e415\",\"path\":\"/graduate.html\",\"title\":\"桃李天下\",\"lang\":\"zh-CN\",\"frontmatter\":{\"article\":false,\"icon\":\"circle-info\",\"editLink\":false,\"description\":\"桃李天下 {{ item.name }} {{ item.name }} 毕业年份：{{ item.year }} {{ item.goto }}\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://xmu-smartdsp.github.io/graduate.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"厦门大学智能数据分析与处理实验室\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"桃李天下\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"桃李天下 {{ item.name }} {{ item.name }} 毕业年份：{{ item.year }} {{ item.goto }}\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"SmartDSP\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"桃李天下\\\",\\\"description\\\":\\\"桃李天下 {{ item.name }} {{ item.name }} 毕业年份：{{ item.year }} {{ item.goto }}\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":4.3,\"words\":1290},\"filePathRelative\":\"graduate.md\",\"excerpt\":\"<h1> 桃李天下</h1>\\n<div class=\\\"row\\\">\\n    <div class=\\\"team\\\">\\n        <div class=\\\"team-item\\\" v-for=\\\"(item, index) in graduates\\\" :key=\\\"index\\\">\\n          \\n          <div class=\\\"name\\\" v-if=\\\"item.link\\\"><a href=\\\"{{ item.link }}\\\" target=\\\"_blank\\\">{{ item.name }}</a></div>\\n          <div v-else=\\\"\\\">{{ item.name }}</div>\\n          <div class=\\\"year\\\">毕业年份：{{ item.year }}</div>\\n          <div class=\\\"goto\\\">{{ item.goto }}</div>\\n      </div>\\n    </div>\\n</div>\",\"autoDesc\":true}")

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
