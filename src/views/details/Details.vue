<template>
  <!-- 如果是歌手 -->
  <div
    class="singer"
    v-if="musicListData.classfy==='歌手'"
  >
    <!-- header -->
    <div class="list-info">
      <!-- 图片 -->
      <el-image
        style="width: 200px; height: 200px"
        :src="musicListData.cover"
      ></el-image>
      <!-- 描述信息 -->
      <div class="list-discription">
        <!-- 标题 -->
        <div class="title">
          <h2>{{musicListData.title}}</h2>
        </div>
        <!-- 按钮 -->
        <div class="btn">
          <el-button
            class="el-icon-video-play"
            round
          >播放全部</el-button>
          <el-button
            class="iconfont icon-shoucang"
            round
          >收藏</el-button>
          <el-button
            class="el-icon-plus"
            round
          >添加到</el-button>
          <el-button
            class="el-icon-download"
            round
          >下载</el-button>
        </div>
        <div class="introduction">
          <p class="text">{{musicListData.introduction}}</p>
        </div>
      </div>
    </div>

    <!-- music -->
    <music-table :songData="songData"></music-table>
  </div>

  <!-- 歌单详情页面 -->
  <div v-else>

    <!-- header -->
    <div class="list-info">
      <!-- 图片 -->
      <el-image
        style="width: 200px; height: 200px"
        :src="musicListData.cover"
      ></el-image>
      <!-- 描述信息 -->
      <div class="list-discription">
        <!-- 标题 -->
        <div class="title">
          <h2>{{musicListData.title}}</h2>
        </div>

        <!-- 作者 -->
        <div class="author">
          <el-image
            style="width: 50px; height: 50px"
            :src="author.avatar"
          ></el-image>
          <p>{{author.name}}</p>
        </div>
        <!-- 按钮 -->
        <div class="btn">
          <el-button
            class="el-icon-video-play"
            round
          >播放全部</el-button>
          <el-button
            class="iconfont icon-shoucang"
            round
          >收藏</el-button>
          <el-button
            class="el-icon-plus"
            round
          >添加到</el-button>
          <el-button
            class="el-icon-download"
            round
          >下载</el-button>
        </div>
        <div class="introduction">
          <p class="text">{{musicListData.introduction}}</p>
        </div>
      </div>
    </div>

    <!-- music -->
    <music-table :songData="songData"></music-table>
  </div>
</template>

<script>
import MusicTable from "@/components/MusicTable.vue";
export default {
  props: {
    musicListId: {
      type: String,
    },
  },
  components: {
    MusicTable,
  },
  data() {
    return {
      // 根据id值确定获取哪一个歌单，后台要做一个能接收id值的api
      id: this.$route.query.musicListId,
      musicListData: {}, //本页歌单的内容
      author: {},
      songData:[]
    };
  },
  mounted() {
    //console.log(this.$route.query.musicListId);

    this.getMusicListData();
   
  },
  methods: {
    async getMusicListData() {
      const { data } = await this.axios.get(
        `http://127.0.0.1:3000/details/music?id=${this.id}`
      );
      this.musicListData = data.data;
      this.author = this.musicListData.author;
      //console.log(this.musicListData);
      this.songData = this.musicListData.music
      //console.log(this.songData)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/icons/iconfont.css";
.list-info {
  display: flex;
  padding: 20px;
  background-color: #f7f7f7;

  .list-discription {
    padding: 10px;
    .title {
      display: block;
      padding-bottom: 10px;
    }

    .author {
      display: flex;
      p {
        padding: 15px 10px;
      }
    }

    .btn {
      padding: 10px 0;
      // .el-button{
      //  //background-color: #ffd200;
      // }
    }
    .introduction {
      display: flex;
      width: 800px;
      height: 40px;
      .text {
        display: inline-block;
        overflow: hidden;
      }
    }
  }
}
</style>