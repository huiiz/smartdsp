---
article: false
icon: circle-info
editLink: false
pageInfo: false
breadcrumb: false
---

# 学术团队

## 教师团队

<div class="row">
    <div class="team">
        <div class="team-item" v-for="(item, index) in teachers" :key="index">
          <img :src="item.avatar" alt="" />
          <div class="name">{{ item.name }}</div>
          <div class="title">{{ item.title }}</div>
          <a href="{{ item.link }}" target="_blank"><img src="assets/images/home.gif"></a>
      </div>
    </div>
</div>

## 博士生

## 硕士研究生

<script>
    export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      teachers: [
        {
            name: "丁兴号",
            avatar: "assets/images/memberimage/dingxinghao.jpg",
            title: "教授，博导",
            link: "teamindex/xhding.html"
        },
        {
            name: "黄悦",
            avatar: "assets/images/memberimage/huangyue.jpg",
            title: "教授，硕导",
            link: "teamindex/yhuang.html"
        },
        {
            name: "肖珍龙",
            avatar: "assets/images/memberimage/xiaozhenlong.jpg",
            title: "副教授，硕导",
            link: "teamindex/zlxiao.html"
        },
        {
            name: "涂晓彤",
            avatar: "assets/images/memberimage/tuxiaotong.jpg",
            title: "助理教授，硕导",
            link: "teamindex/xttu.html"
        },
        {
            name: "John Paisely",
            avatar: "assets/images/memberimage/john.jpg",
            title: "客座教授",
            link: "http://www.columbia.edu/~jwp2128/"
        },
        {
            name: "Mingyuan Zhou",
            avatar: "assets/images/memberimage/zhoumingyuan.png",
            title: "客座教授",
            link: "http://mingyuanzhou.github.io/"
        },
      ]
    }
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件处理器绑定
  methods: {
    increment() {
      this.count++
    }
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
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
