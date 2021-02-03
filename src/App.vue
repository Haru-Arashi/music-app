<template>
  <div id="nav">

    <el-container>
      <el-aside width="150px">
        <nav-menu></nav-menu>
      </el-aside>
      <el-main>
        <music-search></music-search>
        <router-view />
      </el-main>
    </el-container>
  </div>

</template>
<script>
import NavMenu from "@/components/NavMenu.vue";
import MusicSearch from '@/components/MusicSearch.vue'
export default {
  components: {
    NavMenu,
    MusicSearch
  },
};
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.el-container{
  height: 100%;
  overflow: hidden;
  // position: relative;
  .el-aside{
    position: absolute;
    height: 100%;
    width: 200px;
    z-index: 1;
  }
  .el-main{
    position:absolute;
    padding-left: 150px;
    width: 100%;
    height: 100%;
  }
}

// 首页tab栏的样式
 .el-tabs__nav-wrap::after{
        background-color: #ffffff
  }
 .el-tabs__active-bar{
  
   display: none;
  
 }
  

// 歌单的标签样式
.el-tag--light{
  border-color: #ffffff;
  color: #000000;
  border-radius: 10px;
}

// 链接样式
a{
  text-decoration: none;
  color: #000000;
}

a:active,a:hover{
  color: #000000;
}
</style>
