export const data = JSON.parse("{\"key\":\"v-1d79747a\",\"path\":\"/team.html\",\"title\":\"学术团队\",\"lang\":\"zh-CN\",\"frontmatter\":{\"article\":false,\"icon\":\"circle-info\",\"editLink\":false,\"pageInfo\":false,\"breadcrumb\":false,\"description\":\"学术团队 教师团队 {{ item.name }} {{ item.title }}\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://xmu-smartdsp.github.io/team.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"厦门大学智能数据分析与处理实验室\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"学术团队\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"学术团队 教师团队 {{ item.name }} {{ item.title }}\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"SmartDSP\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"学术团队\\\",\\\"description\\\":\\\"学术团队 教师团队 {{ item.name }} {{ item.title }}\\\"}\"]]},\"headers\":[{\"level\":2,\"title\":\"教师团队\",\"slug\":\"教师团队\",\"link\":\"#教师团队\",\"children\":[]},{\"level\":2,\"title\":\"博士生\",\"slug\":\"博士生\",\"link\":\"#博士生\",\"children\":[]},{\"level\":2,\"title\":\"硕士研究生\",\"slug\":\"硕士研究生\",\"link\":\"#硕士研究生\",\"children\":[]}],\"readingTime\":{\"minutes\":1.1,\"words\":331},\"filePathRelative\":\"team.md\",\"excerpt\":\"<h1> 学术团队</h1>\\n<h2> 教师团队</h2>\\n<div class=\\\"row\\\">\\n    <div class=\\\"team\\\">\\n        <div class=\\\"team-item\\\" v-for=\\\"(item, index) in teachers\\\" :key=\\\"index\\\">\\n          \\n          <div class=\\\"name\\\">{{ item.name }}</div>\\n          <div class=\\\"title\\\">{{ item.title }}</div>\\n          <a href=\\\"{{ item.link }}\\\" target=\\\"_blank\\\"></a>\\n      </div>\\n    </div>\\n</div>\",\"autoDesc\":true}")

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
