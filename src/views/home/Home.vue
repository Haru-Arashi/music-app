<template>
<!-- 首页主页面 -->
  <!-- tab栏 -->
  <div class="home-tab">
    <el-tabs
    v-model="activeName"
    stretch
    @tab-click="handleClick"
    
  >
    <el-tab-pane
      label="精选"
      name="first"
    ><featured></featured></el-tab-pane>
    <el-tab-pane
      label="歌手"
      name="second"
    ><singer></singer></el-tab-pane>
    <el-tab-pane
      label="排行榜"
      name="third"
    ><list-bord></list-bord></el-tab-pane>
    <el-tab-pane
      label="歌单分类"
      name="fourth"
    ><music-list></music-list></el-tab-pane>
    
  </el-tabs>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Featured from '@/views/home/Featured.vue';
import Singer from '@/views/home/Singer.vue';
import ListBord from '@/views/home/ListBord.vue';
import MusicList from '@/views/home/MusicList.vue';
export default {
  name: "Home",
  components: {
    Featured,
    Singer,
    ListBord,
    MusicList,
    
  },
  data() {
    return {
      activeName: "first",
      
    };
  },
  methods: {
    
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang="scss" scoped>
.home-tab {
  padding-left: 10px;
  /deep/ .el-tabs__item.is-active{
    border-bottom: #ffd200 solid 2px;
   
  }
   /deep/ .el-tabs__item{
    text-align: center;
    color: black;
  }
  
}
</style>
