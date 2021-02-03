<template>
  <!-- 下拉菜单 -->

  <!-- tab栏 -->

  <!-- <span>热门标签： </span>
    <span class="tag" v-for="(item,index) in tagItems" :key="index">
        <router-link :to="item.url">
    <el-tag
      color="#ffd200"
      class="music-list-tag"
    >{{item.name}}</el-tag>
    </router-link>
  </span> -->
  <div class="tag">
    
  <el-tabs
    v-model="activeName"
    @tab-click="handleClick"
  >
    <el-tab-pane
      label="怀旧"
      name="first"
    >怀旧<song-list :listData="listData"></song-list></el-tab-pane>
    <el-tab-pane
      label="经典"
      name="second"
    >经典<song-list :listData="listData"></song-list></el-tab-pane>
    <el-tab-pane
      label="儿童"
      name="third"
    >儿童<song-list :listData="listData"></song-list></el-tab-pane>
    <el-tab-pane
      label="古风"
      name="fourth"
    >古风<song-list :listData="listData"></song-list></el-tab-pane>
    <el-tab-pane
      label="DJ"
      name="fifth"
    >DJ<song-list :listData="listData"></song-list></el-tab-pane>
     <el-tab-pane
      label="网络"
      name="sixth"
    >网络<song-list :listData="listData"></song-list></el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import SongList from "@/components/SongList.vue";
export default {
  components: {
    SongList,
  },
  data() {
    return {
      activeName: "first",
      listData: [],
    };
  },
  mounted() {
    this.getListData();
  },
  methods: {
    async getListData() {
      const { data } = await this.axios.get("http://127.0.0.1:3000/music");

      this.listData = data.data;

      //  重复增加数据
      this.listData = [
        ...this.listData,
        ...this.listData,
        ...this.listData,
        ...this.listData,
      ];
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.tag{
  display: flex;
  .title{
    width: 30px;
  }
  .el-tabs{
    margin-left: 30px;
  }

  /deep/ .el-tabs__active-bar{
    display: none;
  }
  /deep/ .is-active{
    background-color: #ffd200;
    border-radius: 20px;
    height: 35px;
    width: 60px;
    padding-left: 13px;
    margin-top: 5px;
    color: black;
     text-align: center;
  }
  /deep/ .el-tabs__item{
    text-align: center;
    color: black;
  }
}
</style>