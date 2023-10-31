<template><div><h1 id="学术团队" tabindex="-1"><a class="header-anchor" href="#学术团队" aria-hidden="true">#</a> 学术团队</h1>
<h2 id="教师团队" tabindex="-1"><a class="header-anchor" href="#教师团队" aria-hidden="true">#</a> 教师团队</h2>
<div class="row">
    <div class="team">
        <div class="team-item" v-for="(item, index) in teachers" :key="index">
          <img :src="`${avatarBaseUrl}${item.avatar}`" alt="" />
          <div class="name">{{ item.name }}</div>
          <div class="title">{{ item.title }}</div>
          <a href="{{ item.link }}" target="_blank"><img src="assets/images/home.gif"></a>
      </div>
    </div>
</div>
<h2 id="博士生" tabindex="-1"><a class="header-anchor" href="#博士生" aria-hidden="true">#</a> 博士生</h2>
<div class="row">
    <div class="team">
        <div class="team-item" v-for="(item, index) in phds" :key="index">
          <img :src="`${avatarBaseUrl}${item.avatar}`" alt="" />
          <div class="name">{{ item.name }}</div>
          <div class="title">{{ item.title }}</div>
          <a href="{{ item.link }}" target="_blank"><img src="assets/images/home.gif"></a>
      </div>
    </div>
</div>
<h2 id="硕士研究生" tabindex="-1"><a class="header-anchor" href="#硕士研究生" aria-hidden="true">#</a> 硕士研究生</h2>
<h3 id="_2020-级" tabindex="-1"><a class="header-anchor" href="#_2020-级" aria-hidden="true">#</a> 2020 级</h3>
<div class="row">
    <div class="team">
        <div class="team-item" v-for="(item, index) in masters20" :key="index">
          <img :src="`${avatarBaseUrl}${item.avatar}`" alt="" />
          <div class="name">{{ item.name }}</div>
          <div class="title">{{ item.title }}</div>
          <a href="{{ item.link }}" target="_blank"><img src="assets/images/home.gif"></a>
      </div>
    </div>
</div>
<h3 id="_2021-级" tabindex="-1"><a class="header-anchor" href="#_2021-级" aria-hidden="true">#</a> 2021 级</h3>
<div class="row">
    <div class="team">
        <div class="team-item" v-for="(item, index) in masters21" :key="index">
          <img :src="`${avatarBaseUrl}${item.avatar}`" alt="" />
          <div class="name">{{ item.name }}</div>
          <div class="title">{{ item.title }}</div>
          <a href="{{ item.link }}" target="_blank"><img src="assets/images/home.gif"></a>
      </div>
    </div>
</div>
<h3 id="_2022-级" tabindex="-1"><a class="header-anchor" href="#_2022-级" aria-hidden="true">#</a> 2022 级</h3>
<div class="row">
    <div class="team">
        <div class="team-item" v-for="(item, index) in masters22" :key="index">
          <img :src="`${avatarBaseUrl}${item.avatar}`" alt="" />
          <div class="name">{{ item.name }}</div>
          <div class="title">{{ item.title }}</div>
          <a href="{{ item.link }}" target="_blank"><img src="assets/images/home.gif"></a>
      </div>
    </div>
</div>
</div></template>

<script>
    export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      avatarBaseUrl: "assets/images/memberimage/",
      teachers: [
        {
            name: "丁兴号",
            avatar: "dingxinghao.jpg",
            title: "教授，博导",
            link: "teamindex/xhding.html"
        },
        {
            name: "黄悦",
            avatar: "huangyue.jpg",
            title: "教授，硕导",
            link: "teamindex/yhuang.html"
        },
        {
            name: "肖珍龙",
            avatar: "xiaozhenlong.jpg",
            title: "副教授，硕导",
            link: "teamindex/zlxiao.html"
        },
        {
            name: "涂晓彤",
            avatar: "tuxiaotong.jpg",
            title: "助理教授，硕导",
            link: "teamindex/xttu.html"
        },
        {
            name: "John Paisely",
            avatar: "john.jpg",
            title: "客座教授",
            link: "http://www.columbia.edu/~jwp2128/"
        },
        {
            name: "Mingyuan Zhou",
            avatar: "zhoumingyuan.png",
            title: "客座教授",
            link: "http://mingyuanzhou.github.io/"
        },
      ],
      phds: [
              {
        "name": "傅雪阳",
        "avatar": "fuxueyang.jpg",
        "title": "2014级",
        "link": "https://xueyangfu.github.io"
      },
      {
        "name": "王宇",
        "avatar": "wangyu.jpg",
        "title": "2015级",
        "link": "teamindex/ywang.html"
      },
      {
        "name": "孙立言",
        "avatar": "sunliyan.jpg",
        "title": "2016级",
        "link": "https://lynnsunxmu.github.io"
      },
      { "name": "王武", "avatar": "wangwu.jpg", "title": "2017级", "link": "#" },
      {
        "name": "林煌星",
        "avatar": "linhuangxing.jpg",
        "title": "2018级",
        "link": "#"
      },
      {
        "name": "井长兴",
        "avatar": "jingchangxing.jpg",
        "title": "2018级",
        "link": "#"
      },
      {
        "name": "富振奇",
        "avatar": "fuzhenqi.jpg",
        "title": "2019级",
        "link": "https://zhenqifu.github.io/"
      },
      { "name": "马超", "avatar": "machao.jpg", "title": "2019级", "link": "#" },
      { "name": "徐浩特", "avatar": "xuhaote.jpg", "title": "2020级", "link": "#" },
      {
        "name": "匡振宇",
        "avatar": "kuangzhenyu.jpg",
        "title": "2020级",
        "link": "#"
      },
      { "name": "孟戈", "avatar": "mengge.jpg", "title": "2021级", "link": "#" },
      {
        "name": "黄飞成",
        "avatar": "huangfeicheng.jpg",
        "title": "2021级",
        "link": "#"
      },
      { "name": "林溦", "avatar": "linwei.png", "title": "2022级", "link": "#" },
      {
        "name": "黄海靓",
        "avatar": "huanghailiang.jpg",
        "title": "2022级",
        "link": "#"
      },
      {
        "name": "王莹莹",
        "avatar": "wangyingying.jpg",
        "title": "2022级",
        "link": "#"
      },
      ],
      masters20: [
          {
    "name": "蔡森林",
    "avatar": "caisenlin.jpg",
    "title": "2020级",
    "link": ""
  },
  { "name": "柴舒", "avatar": "chaishu.jpg", "title": "2020级", "link": "" },
  {
    "name": "陈睿哲",
    "avatar": "chenruizhe.jpg",
    "title": "2020级",
    "link": ""
  },
  {
    "name": "丁之元",
    "avatar": "dingzhiyuan.jpg",
    "title": "2020级",
    "link": ""
  },
  { "name": "何楚楚", "avatar": "hechuchu.jpg", "title": "2020级", "link": "" },
  {
    "name": "黄乐兴",
    "avatar": "huanglexing.jpg",
    "title": "2020级",
    "link": ""
  },
  {
    "name": "李炯承",
    "avatar": "lijiongcheng.jpg",
    "title": "2020级",
    "link": ""
  },
  { "name": "梁浩", "avatar": "lianghao.jpg", "title": "2020级", "link": "" },
  {
    "name": "林晓鹏",
    "avatar": "linxiaopeng.jpg",
    "title": "2020级",
    "link": ""
  },
  {
    "name": "饶智杰",
    "avatar": "raozhijie.jpg",
    "title": "2020级",
    "link": ""
  },
  { "name": "王天浚", "avatar": "dabai.jpg", "title": "2020级", "link": "" },
  {
    "name": "王蔚瑜",
    "avatar": "wangweiyu.jpg",
    "title": "2020级",
    "link": ""
  },
  {
    "name": "余少聪",
    "avatar": "yushaocong.jpg",
    "title": "2020级",
    "link": ""
  },
  { "name": "张弛", "avatar": "zhangchi.png", "title": "2020级", "link": "" },
  {
    "name": "周观星",
    "avatar": "zhouguanxing.jpg",
    "title": "2020级",
    "link": ""
  },
  {
    "name": "庄易鸿",
    "avatar": "zhuangyihong.jpg",
    "title": "2020级",
    "link": ""
  },
],
masters21: [
    { "name": "褚学业", "avatar": "chuxueye.jpg", "title": "2021级", "link": "" },
  {
    "name": "丁海舟",
    "avatar": "dinghaizhou.jpg",
    "title": "2021级",
    "link": ""
  },
  { "name": "胡郁明", "avatar": "huyuming.jpg", "title": "2021级", "link": "" },
  {
    "name": "赖灿兴",
    "avatar": "laicanxing.jpg",
    "title": "2021级",
    "link": ""
  },
  {
    "name": "林初阳",
    "avatar": "linchuyang.jpg",
    "title": "2021级",
    "link": ""
  },
  {
    "name": "刘奕阳",
    "avatar": "liuyiyang.jpg",
    "title": "2021级",
    "link": ""
  },
  { "name": "吕正芃", "avatar": "dabai.jpg", "title": "2021级", "link": "" },
  { "name": "毛怡瑾", "avatar": "maoyijin.jpg", "title": "2021级", "link": "" },
  {
    "name": "魏海艳",
    "avatar": "weihaiyan.jpg",
    "title": "2021级",
    "link": ""
  },
  { "name": "徐迎", "avatar": "xuying.jpg", "title": "2021级", "link": "" },
  { "name": "杨刚", "avatar": "yanggang.jpg", "title": "2021级", "link": "" },
  {
    "name": "张勇华",
    "avatar": "zhangyonghua.jpg",
    "title": "2021级",
    "link": ""
  },
  {
    "name": "郑国庆",
    "avatar": "zhengguoqing.jpg",
    "title": "2021级",
    "link": ""
  },
  { "name": "钟杰", "avatar": "zhongjie.jpg", "title": "2021级", "link": "" },
  {
    "name": "钟亦劲",
    "avatar": "zhongyijin.jpg",
    "title": "2021级",
    "link": ""
  },
  {
    "name": "周文波",
    "avatar": "zhouwenbo.jpg",
    "title": "2021级",
    "link": ""
  },
],
masters22:[
    { "name": "陈晓璐", "avatar": "陈晓璐.jpg", "title": "2022级", "link": "" },
  { "name": "程利东", "avatar": "程利东.jpg", "title": "2022级", "link": "" },
  { "name": "邓成浩", "avatar": "邓成浩.jpg", "title": "2022级", "link": "" },
  { "name": "董於航", "avatar": "董於航.jpg", "title": "2022级", "link": "" },
  { "name": "范琳钰", "avatar": "范琳钰.jpg", "title": "2022级", "link": "" },
  { "name": "黄婧嘉", "avatar": "黄婧嘉.png", "title": "2022级", "link": "" },
  { "name": "李晨", "avatar": "李晨.jpg", "title": "2022级", "link": "" },
  { "name": "林鸿", "avatar": "林鸿.jpg", "title": "2022级", "link": "" },
  { "name": "马晨雨", "avatar": "马晨雨.jpg", "title": "2022级", "link": "" },
  { "name": "彭家傲", "avatar": "彭家傲.jpg", "title": "2022级", "link": "" },
  { "name": "唐路垚", "avatar": "唐路垚.jpg", "title": "2022级", "link": "" },
  { "name": "吴庆垚", "avatar": "吴庆垚.jpg", "title": "2022级", "link": "" },
  { "name": "夏周翔", "avatar": "夏周翔.jpg", "title": "2022级", "link": "" },
  { "name": "余河灯", "avatar": "余河灯.jpg", "title": "2022级", "link": "" },
  { "name": "袁与炫", "avatar": "袁与炫.jpg", "title": "2022级", "link": "" },
  { "name": "章弘阳", "avatar": "章弘阳.jpg", "title": "2022级", "link": "" },
  { "name": "庄荣晋", "avatar": "庄荣晋.jpg", "title": "2022级", "link": "" },
  {
    "name": "王珺玮",
    "avatar": "wangjunwei.jpg",
    "title": "2022级",
    "link": ""
  }
]
    }
  },

}
</script>

<style>
.team {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); /* 自动换行并自动平均分配宽度 */
  gap: 15px; /* 可以添加适当的间距 */
  text-align: center;

}
.name {
    font-size: 15px;
}
.title {
    font-size: 12px;
}

</style>