<template>
  <el-tabs
    v-model="activeName"
    @tab-click="handleClick"
  >
    <el-tab-pane
      label="首播"
      name="first"
    >
    首播
      <movie-list
        :listData="mvList"
        class="movie-list"
      ></movie-list>
    </el-tab-pane>
    <el-tab-pane
      label="网络"
      name="second"
    >
    网络
      <movie-list
        :listData="mvList"
        class="movie-list"
      ></movie-list>
    </el-tab-pane>
    <el-tab-pane
      label="现场"
      name="third"
    >
    现场
      <movie-list
        :listData="mvList"
        class="movie-list"
      ></movie-list>
    </el-tab-pane>
    <el-tab-pane
      label="伤感"
      name="fourth"
    >
    伤感
      <movie-list
        :listData="mvList"
        class="movie-list"
      ></movie-list>
    </el-tab-pane>
    <el-tab-pane
      label="剧情"
      name="fifth"
    >
    剧情
      <movie-list
        :listData="mvList"
        class="movie-list"
      ></movie-list>
    </el-tab-pane>
  </el-tabs>
  <!-- <movie-list
    :listData="mvList"
    class="movie-list"
  ></movie-list> -->
</template>

<script>
import MovieList from "@/components/MovieList.vue";
export default {
  components: {
    // MovieList,
    MovieList,
  },
  data() {
    return {
      mvList: [],
      activeName: "first",
    };
  },
  mounted() {
    this.getMovieList();
  },
  methods: {
    async getMovieList() {
      const { data } = await this.axios.get("http://127.0.0.1:3000/mv");
     
      this.mvList = data.data;

      this.mvList = [
        ...this.mvList,
        ...this.mvList,
        ...this.mvList,
        ...this.mvList,
      ];
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>

.el-tabs{
  margin-left: 30px;
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
/deep/.el-tabs__item{
    text-align: center;
    color: black;
  }

.movie-list {
  padding-bottom: 10px;
  h4 {
    padding-left: 10px;
    padding-bottom: 10px;
  }
}
</style>