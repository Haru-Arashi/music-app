<template>
  <div class="tab-box">
    <div
      class="list-tab"
     
      :class="[{activeClass:active==item.name},{first:item.name===1},{second:item.name===2},{third:item.name===3}]"
      v-for="(item,index) in tabData"
      :key="index"
      @click="tabclick(item.content)"
      
    >{{item.lable}}</div>
  </div>

  
<!-- 增加一个向上的箭头，根据点击的按钮切换提示的文字：hot new soar -->

  <music-item :listData="tabContent"></music-item>
</template>

<script>
import MusicItem from "@/components/MusicItem.vue";

export default {
  components: {
    MusicItem,
  },
  data() {
    return {
      hot: [],
      newest: [],
      soar: [],
      tabData: [
        {
          name: 1,
          lable: "热门",
          content: [],
        },
        {
          name: 2,
          lable: "最新",
          content: [],
        },
        {
          name: 3,
          lable: "飙升",
          content: [],
        },
      ],
      tabContent: [],
      active: 0,
    };
  },
  mounted() {
    this.getListBord();
  },
  methods: {
    async getListBord() {
      const { data } = await this.axios("http://127.0.0.1:3000/listbord");

      const listbord = data.data;
      // console.log(listbord);
      this.hot = listbord.hot;
      this.newest = listbord.newest;
      this.soar = listbord.soar;

      this.hot = [...this.hot, ...this.newest, ...this.hot];

      this.tabContent = this.hot;
      this.tabData[0].content = this.hot;
      this.tabData[1].content = this.newest;
      this.tabData[2].content = this.soar;
    },
    tabclick(e) {
      this.tabContent = e;
      console.log(this.tabContent);
      
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-box {
  display: flex;
  padding-left: 100px;
  .list-tab {
    padding: 10px 30px;
  }
}

.first,
.second,
.third {
  cursor: pointer;
  border-radius: 25px;
  margin-right: 10px;
}

.activeClass {
  border-color: violet;
  border-style: solid;
  border-width: 1px;
}

.first {
  background-color: khaki;
}
.second {
  background-color: bisque;
}
.third {
  background-color: aqua;
}

</style>