<template>
  <div class="singer-sort">
    <!-- 首页歌手页面 -->
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <!-- 此处用for循环会无法显示，等找到原因后再改用 -->
      <!-- <el-tab-pane
      :label="item.lable"
      :name="item.name"
    ></el-tab-pane> -->
      <el-tab-pane
        label="全部"
        name="first"
      >
        <song-list :listData="singers">

        </song-list>
      </el-tab-pane>
      <el-tab-pane
        label="流行"
        name="second"
      >
        <song-list :listData="singers"></song-list>
      </el-tab-pane>
      <el-tab-pane
        label="电子"
        name="third"
      >
        <song-list :listData="singers"></song-list>
      </el-tab-pane>
      <el-tab-pane
        label="摇滚"
        name="fourth"
      >
        <song-list :listData="singers"></song-list>
      </el-tab-pane>
      <el-tab-pane
        label="R&B"
        name="fifth"
      >
        <song-list :listData="singers"></song-list>
      </el-tab-pane>
      <el-tab-pane
        label="民谣"
        name="sixth"
      >
        <song-list :listData="singers"></song-list>
      </el-tab-pane>
      <el-tab-pane
        label="爵士"
        name="seventh"
      >
        <song-list :listData="singers"></song-list>
      </el-tab-pane>
      <el-tab-pane
        label="古典"
        name="eighth"
      >
        <song-list :listData="singers"></song-list>
      </el-tab-pane>
      <el-tab-pane
        label="拉丁"
        name="ninth"
      >
        <song-list :listData="singers"></song-list>
      </el-tab-pane>
      <el-tab-pane
        label="轻音乐"
        name="tenth"
      >
        <song-list :listData="singers"></song-list>
      </el-tab-pane>
      <el-tab-pane
        label="乡村"
        name="eleventh"
      >
        <song-list :listData="singers"></song-list>
      </el-tab-pane>
      <el-tab-pane
        label="蓝调"
        name="twelfth"
      >
        <song-list :listData="singers"></song-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import TabContent from "@/components/TabContent.vue";
import SongList from "@/components/SongList.vue";
export default {
  components: {
    //TabContent,
    SongList,
  },
  data() {
    return {
      activeName: "first",
      singers: [],
    };
  },
  mounted() {
    this.getSingerList();
  },
  methods: {
    async getSingerList() {
      const { data } = await this.axios.get("http://127.0.0.1:3000/singer");

      this.singers = data.data;
      // console.log(this.singers)
      this.singers = [
        ...this.singers,
        ...this.singers,
        ...this.singers,
        ...this.singers,
      ];
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.singer-sort {
  // vue样式穿透
  /deep/ .el-tabs__active-bar {
    display: none;
  }
  /deep/ .is-active {
    background-color: #ffd200;
    border-radius: 20px;
    height: 35px;
    width: 60px;
    padding-left: 13px;
    margin-top: 5px;
    color: black;
  }
  /deep/ .el-tabs__item {
    padding-left: 10px;
    #tab-first {
      
    }
  }
}
</style>