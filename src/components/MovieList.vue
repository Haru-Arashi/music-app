<template>
  <!-- 
    思路：
        1把每一个歌单做成一个组件，然后再用歌单组成一个类型的合集
        2利用vuex存储电台、歌曲等的历史记录，以及下载的内容
        3登录界面icon图标等问题在项目基本完成的时候再做处理

 -->

<!-- 
  歌单分类组件 
  把主页和各个页面的歌单分类布局在页面上
-->
  <div class="song-list">
    <div
      v-for="(item,index) in listData"
      :key="index"
    >
    <!-- "{path:'/login',query:{userId: "33333"}}" -->
      <a :href="item.mvLink" >
        <el-image
          style="width: 400px; height: 260px"
          :src="item.cover"
          
        ></el-image>
        <p v-if="item.title">{{item.title}}</p>
        <p v-if="item.name">{{item.name}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  mounted() {
   // console.log(this.listData);
  },
};
</script>

<style lang="scss" scoped>
.song-list{
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  .el-image{
    padding-left: 10px;
  }
  p{
    text-align: center;
    
  }
}
</style>