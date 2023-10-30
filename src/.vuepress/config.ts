import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  head: [
    // ['link', { rel: 'stylesheet', href: 'assets/css/bootstrap.min.css' }],
    // ['link', { rel: 'stylesheet', href: 'assets/css/font-awesome.min.css' }],
    // ['link', { rel: 'stylesheet', href: 'assets/css/bootstrap-theme.css' }],
    // ['link', { rel: 'stylesheet', href: 'assets/css/style.css' }],
    ['link', { rel: 'icon', href: 'assets/images/favicon.ico' }],
  ],
  lang: "zh-CN",
  title: "厦门大学智能数据分析与处理实验室",
  description: "厦门大学智能数据分析与处理实验室官网",
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
