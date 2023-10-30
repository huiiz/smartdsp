import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "实验室概况",
    icon: "at",
    // link: "/intro/",
    prefix: "/",
    children: [
      {
        text: "实验室简介",
        // icon: "home",
        link: "introduction",
      },
      {
        text: "研究方向",
        // icon: "home",
        link: "research-direction",
      },
      {
        text: "联系我们",
        // icon: "home",
        link: "contact",
      }
    ],
  },
  {
    text: "师资队伍",
    icon: "iconfont icon-group",
    // link: "/intro/",
    prefix: "/",
    children: [
      {
        text: "学术团队",
        // icon: "home",
        link: "team",
      },
      {
        text: "丁兴号",
        // icon: "home",
        link: "teamindex/xhding",
      },
      {
        text: "黄悦",
        // icon: "home",
        link: "teamindex/yhuang",
      },
      {
        text: "肖珍龙",
        // icon: "home",
        link: "teamindex/zlxiao",
      },
      {
        text: "涂晓彤",
        // icon: "home",
        link: "teamindex/xttu",
      },
    ],
  },
  {
    text: "项目介绍",
    icon: "iconfont icon-workingDirectory",
    // link: "/intro/",
    prefix: "/project/",
    children: [
      {
        text: "肺结节检测",
        // icon: "home",
        link: "pulmonary_nodule",
      },
      {
        text: "胸片项目",
        // icon: "home",
        link: "chest_radiograph",
      },
    ],
  },
  {
    text: "实验室资讯",
    icon: "iconfont icon-news",
    link: "/article",
  },
  {
    text: "桃李天下",
    icon: "iconfont icon-study",
    link: "/graduate",
  },
]);
