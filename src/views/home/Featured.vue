<template>
  <!-- 
    思路：
        1把每一个歌单做成一个组件，然后再用歌单组成一个类型的合集
        2利用vuex存储电台、歌曲等的历史记录，以及下载的内容
        3登录界面icon图标等问题在项目基本完成的时候再做处理

 -->
<!-- 首页精选页面 -->

<!-- 
  轮播图
  暂时没有设置链接
  刷新后有一段空白时间，项目完成后再处理
 -->
   <el-carousel :interval="4000"  height="350px">
    <el-carousel-item v-for="(item,index) in carousel" :key="index">
      <img :src="item.image">
    </el-carousel-item>
  </el-carousel>

 <!-- 个性推荐 -->
  <div class="featured-list">
    <h4>个性推荐</h4>
    <song-list :listData="homeMusic"></song-list>
  </div>
  <!-- 推荐电台 -->
  <div class="featured-list">
    <h4>推荐电台</h4>
    <song-list :listData="homeMusic"></song-list>
  </div>

  <div class="featured-list">
    <h4>最潮视频</h4>
    <movie-list :listData="homeMv"></movie-list>
  </div>

  <div class="featured-list">
    <h4>歌手推荐</h4>
    <song-list :listData="homeSinger"></song-list>
  </div>
</template>

<script>
import SongList from '@/components/SongList.vue';
import MovieList from '@/components/MovieList.vue'
export default {
  components:{
    SongList,
    MovieList
  },
  data() {
    return {
      carousel:[],
      homeMusic:[],
      homeMv:[],
      homeSinger:[],
    };
  },
  mounted() {
    this.getSongData();
    
  },
  methods:{
    async getSongData(){
      const {data} = await this.axios.get('http://127.0.0.1:3000/home')
      this.songList= data.data
      //console.log(this.songList)

    this.carousel=this.songList.carousel
    this.homeMusic=[...this.songList.homeMusic,...this.songList.homeMusic]
    this.homeMv=this.songList.homeMv
    this.homeSinger=[...this.songList.homeSinger,...this.songList.homeSinger]
    
    },
    
  }
};
</script>

<style lang="scss" scoped>

/deep/ img{
    width: 100%;
    height: 100%;
  }

.featured-list{
  padding-bottom: 10px;

  h4{
    padding-left: 10px;
    padding-bottom: 10px;
  }
}
</style>