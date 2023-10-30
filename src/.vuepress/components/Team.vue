<!-- .vuepress/components/Team.vue -->
<template>
    <div class="team">
      <div class="team-row" v-for="(row, index) in rows" :key="index">
        <div class="team-item" v-for="(item, index) in row" :key="index">
          <img :src="item.avatar" alt="" />
          <p>{{ item.name }}</p>
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      },
      columns: {
        type: Number,
        default: 6
      }
    },
    computed: {
      rows() {
        let result = [];
        for (let i = 0; i < this.items.length; i += this.columns) {
          result.push(this.items.slice(i, i + this.columns));
        }
        return result;
      }
    }
  };
  </script>
  
  <style scoped>
  .team {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
  }
  
  .team-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .team-item img {
    width: 100px;
    height: 100px;
  }
  
  .team-item p {
    margin: 0;
  }
  </style>