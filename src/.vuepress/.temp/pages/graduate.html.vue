<template><div><h1 id="桃李天下" tabindex="-1"><a class="header-anchor" href="#桃李天下" aria-hidden="true">#</a> 桃李天下</h1>
<div class="row">
    <div class="team">
        <div class="team-item" v-for="(item, index) in graduates" :key="index">
          <img :src="`${avatarBaseUrl}${item.avatar}`" alt="" />
          <div class="name" v-if="item.link"><a href="{{ item.link }}" target="_blank" >{{ item.name }}</a></div>
          <div v-else>{{ item.name }}</div>
          <div class="year">毕业年份：{{ item.year }}</div>
          <div class="goto">{{ item.goto }}</div>
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
      graduates: [
  {
    "name": "糜增元",
    "avatar": "mizengyuan.jpg",
    "year": "2013",
    "goto": "国家专利审查局",
    "link": ""
  },
  {
    "name": "谢进",
    "avatar": "xiejin.jpg",
    "year": "2013",
    "goto": "部队",
    "link": ""
  },
  {
    "name": "金文博",
    "avatar": "jinwenbo.jpg",
    "year": "2013",
    "goto": "中国建设银行总行",
    "link": ""
  },
  {
    "name": "易才钦",
    "avatar": "dabai.jpg",
    "year": "2013",
    "goto": "广州专利局",
    "link": ""
  },
  {
    "name": "于一淼",
    "avatar": "dabai.jpg",
    "year": "2013",
    "goto": "百度",
    "link": ""
  },
  {
    "name": "吴笑天",
    "avatar": "dabai.jpg",
    "year": "2013",
    "goto": "长春光机所",
    "link": ""
  },
  {
    "name": "林溱",
    "avatar": "linqin.jpg",
    "year": "2014",
    "goto": "福州电信",
    "link": ""
  },
  {
    "name": "傅雪阳",
    "avatar": "fuxueyang.jpg",
    "year": "2014",
    "goto": "读博",
    "link": ""
  },
  {
    "name": "张君",
    "avatar": "zhangjun.jpg",
    "year": "2014",
    "goto": "华为技术有限公司",
    "link": ""
  },
  {
    "name": "郑贤辉",
    "avatar": "zhengxianhui.jpg",
    "year": "2014",
    "goto": "华为技术有限公司",
    "link": ""
  },
  {
    "name": "张晓龙",
    "avatar": "zhangxiaolong.jpg",
    "year": "2014",
    "goto": "网宿科技有限公司",
    "link": ""
  },
  {
    "name": "张冬映",
    "avatar": "zhangdongying.jpg",
    "year": "2014",
    "goto": "厦门大学马克思学院行政人员",
    "link": ""
  },
  {
    "name": "郭伟",
    "avatar": "guowei.jpg",
    "year": "2014",
    "goto": "广州联通",
    "link": ""
  },
  {
    "name": "孙晔",
    "avatar": "sunye.jpg",
    "year": "2015",
    "goto": "阿里巴巴集团",
    "link": ""
  },
  {
    "name": "蒋怡勇",
    "avatar": "jiangyiyong.jpg",
    "year": "2015",
    "goto": "福州锐捷网络",
    "link": ""
  },
  {
    "name": "陈金楚",
    "avatar": "chenjinchu.jpg",
    "year": "2015",
    "goto": "中信银行",
    "link": ""
  },
  {
    "name": "陈欣",
    "avatar": "chenxin.jpg",
    "year": "2015",
    "goto": "厦门招商银行",
    "link": ""
  },
  {
    "name": "刘伟骏",
    "avatar": "liuweijun.jpg",
    "year": "2015",
    "goto": "国家无限电监测中心",
    "link": ""
  },
  {
    "name": "陈丽琴",
    "avatar": "chenliqin.jpg",
    "year": "2016",
    "goto": "长城国瑞",
    "link": ""
  },
  {
    "name": "陈人楷",
    "avatar": "chenrenkai.jpg",
    "year": "2016",
    "goto": "国家电网",
    "link": ""
  },
  {
    "name": "王家坤",
    "avatar": "wangjiakun.jpg",
    "year": "2016",
    "goto": "厦门网宿科技",
    "link": ""
  },
  {
    "name": "李王明卉",
    "avatar": "liwangminghui.jpg",
    "year": "2016",
    "goto": "直博",
    "link": ""
  },
  {
    "name": "王薇",
    "avatar": "wangwei.jpg",
    "year": "2016",
    "goto": "唯品会",
    "link": ""
  },
  {
    "name": "吴锐文",
    "avatar": "wuruiwen.jpg",
    "year": "2016",
    "goto": "上海招商银行信用卡中心",
    "link": ""
  },
  {
    "name": "张征",
    "avatar": "zhangzheng.jpg",
    "year": "2016",
    "goto": "福州联迪商用",
    "link": ""
  },
  {
    "name": "赵彤",
    "avatar": "zhaotong.jpg",
    "year": "2016",
    "goto": "华为",
    "link": ""
  },
  {
    "name": "周赛亚",
    "avatar": "zhousaiya.JPG",
    "year": "2016",
    "goto": "华为",
    "link": ""
  },
  {
    "name": "陈伟涛",
    "avatar": "chenweitao.jpg",
    "year": "2016",
    "goto": "腾讯",
    "link": ""
  },
  {
    "name": "陈曦",
    "avatar": "chenxi.jpg",
    "year": "2017",
    "goto": "部队",
    "link": ""
  },
  {
    "name": "胡宇雯",
    "avatar": "huyuwen.jpg",
    "year": "2017",
    "goto": "华为(special offer)",
    "link": ""
  },
  {
    "name": "林炜",
    "avatar": "linwei.jpg",
    "year": "2017",
    "goto": "美图秀秀",
    "link": ""
  },
  {
    "name": "刘新",
    "avatar": "liuxin.jpg",
    "year": "2017",
    "goto": "华为(special offer)",
    "link": ""
  },
  {
    "name": "丘琴秀",
    "avatar": "qiuqinxiu.jpg",
    "year": "2017",
    "goto": "网宿科技",
    "link": ""
  },
  {
    "name": "王秋红",
    "avatar": "wangqiuhong.jpg",
    "year": "2017",
    "goto": "厦航",
    "link": ""
  },
  {
    "name": "吴凡",
    "avatar": "wufan.JPG",
    "year": "2017",
    "goto": "厦航",
    "link": ""
  },
  {
    "name": "吴佳雯",
    "avatar": "wujiawen.jpg",
    "year": "2017",
    "goto": "厦门大学信息学院",
    "link": ""
  },
  {
    "name": "吴文磊",
    "avatar": "wuwenlei.jpg",
    "year": "2017",
    "goto": "腾讯(special offer)",
    "link": ""
  },
  {
    "name": "曾益清",
    "avatar": "zengyiqing.jpg",
    "year": "2017",
    "goto": "福州瑞芯微有限公司",
    "link": ""
  },
  {
    "name": "朱攀",
    "avatar": "zhupan.jpg",
    "year": "2017",
    "goto": "华为(special offer)",
    "link": ""
  },
  {
    "name": "蔡淑莲",
    "avatar": "caishulian.JPG",
    "year": "2018",
    "goto": "建行厦门开发中心",
    "link": ""
  },
  {
    "name": "杜宝林",
    "avatar": "dubaolin.jpg",
    "year": "2018",
    "goto": "上汽大众",
    "link": ""
  },
  {
    "name": "黄佳斌",
    "avatar": "huangjiabin.jpg",
    "year": "2018",
    "goto": "字节跳动",
    "link": ""
  },
  {
    "name": "林质锐",
    "avatar": "linzhirui.jpg",
    "year": "2018",
    "goto": "美图",
    "link": ""
  },
  {
    "name": "凌梅",
    "avatar": "lingmei.jpg",
    "year": "2018",
    "goto": "网宿科技",
    "link": ""
  },
  {
    "name": "孟俊彪",
    "avatar": "mengjunbiao.jpg",
    "year": "2018",
    "goto": "TCL",
    "link": ""
  },
  {
    "name": "王超",
    "avatar": "wangchao.jpg",
    "year": "2018",
    "goto": "科大讯飞",
    "link": ""
  },
  {
    "name": "杨骏峰",
    "avatar": "yangjunfeng.jpg",
    "year": "2018",
    "goto": "旷视Face++",
    "link": ""
  },
  {
    "name": "赵彦杰",
    "avatar": "zhaoyanjie.jpg",
    "year": "2018",
    "goto": "招银网络科技",
    "link": ""
  },
  {
    "name": "郑翰",
    "avatar": "zhenghan.jpg",
    "year": "2018",
    "goto": "腾讯（SSP）",
    "link": ""
  },
  {
    "name": "陈浩鹏",
    "avatar": "chenghaopen.jpg",
    "year": "2019",
    "goto": " ",
    "link": ""
  },
  {
    "name": "陈云舒",
    "avatar": "chengyunshu.JPG",
    "year": "2019",
    "goto": " ",
    "link": ""
  },
  {
    "name": "樊志文",
    "avatar": "fanzhiwen.JPG",
    "year": "2019",
    "goto": " ",
    "link": "https://zhiwenfan.github.io/"
  },
  {
    "name": "何福金",
    "avatar": "hefujin.JPG",
    "year": "2019",
    "goto": " ",
    "link": ""
  },
  {
    "name": "梁伯荣",
    "avatar": "liangborong.jpg",
    "year": "2019",
    "goto": " ",
    "link": ""
  },
  {
    "name": "舒炳林",
    "avatar": "shubinglin.jpg",
    "year": "2019",
    "goto": " ",
    "link": ""
  },
  {
    "name": "唐圳",
    "avatar": "tangzhen.jpg",
    "year": "2019",
    "goto": " ",
    "link": ""
  },
  {
    "name": "王继天",
    "avatar": "wangjitian.jpg",
    "year": "2019",
    "goto": " ",
    "link": ""
  },
  {
    "name": "吴华峰",
    "avatar": "wuhuafeng.jpg",
    "year": "2019",
    "goto": " ",
    "link": ""
  },
  {
    "name": "余宪",
    "avatar": "yuxian.JPG",
    "year": "2019",
    "goto": " ",
    "link": ""
  },
  {
    "name": "陈超奇",
    "avatar": "chenchaoqi.jpg",
    "year": "2020",
    "goto": "",
    "link": ""
  },
  {
    "name": "董成威",
    "avatar": "dcw.jpg",
    "year": "2020",
    "goto": "",
    "link": ""
  },
  {
    "name": "江明辉",
    "avatar": "jmh.jpg",
    "year": "2020",
    "goto": "",
    "link": ""
  },
  {
    "name": "李斐",
    "avatar": "lifei.jpg",
    "year": "2020",
    "goto": "",
    "link": ""
  },
  {
    "name": "罗琰",
    "avatar": "ly.jpg",
    "year": "2020",
    "goto": "",
    "link": ""
  },
  {
    "name": "林子煌",
    "avatar": "lzh.jpg",
    "year": "2020",
    "goto": "",
    "link": ""
  },
  {
    "name": "刘振卫",
    "avatar": "lzw.jpg",
    "year": "2020",
    "goto": "",
    "link": ""
  },
  {
    "name": "马文骜",
    "avatar": "mwa.JPG",
    "year": "2020",
    "goto": "",
    "link": ""
  },
  {
    "name": "孙琦",
    "avatar": "sq.jpg",
    "year": "2020",
    "goto": "",
    "link": ""
  },
  {
    "name": "王杰祥",
    "avatar": "wangjiexiang.jpg",
    "year": "2020",
    "goto": "",
    "link": ""
  },
  {
    "name": "吴亚文",
    "avatar": "wyw.jpg",
    "year": "2020",
    "goto": "",
    "link": ""
  },
  {
    "name": "谢伟平",
    "avatar": "xwp.jpg",
    "year": "2020",
    "goto": "",
    "link": ""
  },
  {
    "name": "邢翔瑞",
    "avatar": "xxr.jpg",
    "year": "2020",
    "goto": "",
    "link": ""
  },
  {
    "name": "庄铭泳",
    "avatar": "zhuangmingyong.JPG",
    "year": "2020",
    "goto": "",
    "link": ""
  },
  {
    "name": "陈旭恒",
    "avatar": "chenxuheng.jpg",
    "year": "2021",
    "goto": "",
    "link": ""
  },
  {
    "name": "郭慧敏",
    "avatar": "guohuimin.jpg",
    "year": "2021",
    "goto": "",
    "link": ""
  },
  {
    "name": "黄鸿宇",
    "avatar": "huanghongyu.jpg",
    "year": "2021",
    "goto": "",
    "link": ""
  },
  {
    "name": "李彦龙",
    "avatar": "liyanlong.jpg",
    "year": "2021",
    "goto": "",
    "link": ""
  },
  {
    "name": "潘婕",
    "avatar": "panjie.jpg",
    "year": "2021",
    "goto": "",
    "link": ""
  },
  {
    "name": "齐琦",
    "avatar": "qiqi.jpg",
    "year": "2021",
    "goto": "",
    "link": ""
  },
  {
    "name": "文艺",
    "avatar": "wenyi.jpg",
    "year": "2021",
    "goto": "",
    "link": ""
  },
  {
    "name": "章云龙",
    "avatar": "zhangyunlong.jpg",
    "year": "2021",
    "goto": "",
    "link": ""
  },
  {
    "name": "周融",
    "avatar": "zhourong.jpg",
    "year": "2021",
    "goto": "",
    "link": ""
  },
  {
    "name": "曾伟宏",
    "avatar": "zengweihong.jpg",
    "year": "2021",
    "goto": "",
    "link": ""
  },
  {
    "name": "成欣",
    "avatar": "chengxin.jpg",
    "year": "2022",
    "goto": "",
    "link": ""
  },
  {
    "name": "董琦",
    "avatar": "dongqi.jpg",
    "year": "2022",
    "goto": "",
    "link": ""
  },
  {
    "name": "李宸鑫",
    "avatar": "lichenxin.jpg",
    "year": "2022",
    "goto": "",
    "link": ""
  },
  {
    "name": "梁哲涵",
    "avatar": "liangzhehan.jpg",
    "year": "2022",
    "goto": "",
    "link": ""
  },
  {
    "name": "林鑫",
    "avatar": "linxin.jpg",
    "year": "2022",
    "goto": "",
    "link": ""
  },
  {
    "name": "刘小煜",
    "avatar": "liuxiaoyu.jpg",
    "year": "2022",
    "goto": "",
    "link": ""
  },
  {
    "name": "伍健雄",
    "avatar": "wujianxiong.png",
    "year": "2022",
    "goto": "",
    "link": ""
  },
  {
    "name": "史良超",
    "avatar": "dabai.jpg",
    "year": "2022",
    "goto": "",
    "link": ""
  },
  {
    "name": "郑泽镖",
    "avatar": "zhengzebiao.jpg",
    "year": "2022",
    "goto": "",
    "link": ""
  }
]

    }}
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
.year, .goto {
    font-size: 12px;
}

</style>