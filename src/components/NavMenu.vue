<template>
<!-- 左侧菜单栏 -->
  <div class="nav-menu">
  <div class="user-info">
    <el-avatar
      :size="50"
      :src="circleUrl"
    ></el-avatar>
    <p>小喵</p>
  </div>
   
    <row-menu :item="menu"></row-menu>
  </div>
  
</template>
<script>
import RowMenu from "@/components/RowMenu.vue";
export default {
  components: {
    RowMenu,
  },
  data() {
    return {
      menu: [
        {
          id: "1",
          icon: "icon-tuijian",
          title: "推荐",
          url: "/home",
        },
        {
          id: "2",
          icon: "icon-shipin",
          title: "直播",
          url: "/live",
        },
        {
          id: "3",
          icon: "icon-live_icon",
          title: "视频",
          url: "/movie",
        },
        {
          id: "4",
          icon: "icon-shoucang",
          title: "我的收藏",
          url: "/favor",
        },
        {
          id: "5",
          icon: "icon-zuijinyuedu",
          title: "最近播放",
          url: "/recently",
        },
      ],
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '../assets/icons/iconfont.css';
.nav-menu {
  position: relative;
  height: 100%;
  width: 149px;
  background-color: #f4f4f4;
  .user-info{
    margin-left: 20px;
    
    p{
      display: inline;
    }
  }
}
</style>