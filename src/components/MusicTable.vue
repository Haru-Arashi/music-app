<template>
<!-- 歌单中的音乐列表 -->
  <el-table
    ref="multipleTable"
    :data="songData"
    tooltip-effect="dark"
    style="width: 100%"
   
    fit
    @selection-change="handleSelectionChange"
    
  >
    <el-table-column
      type="selection"
      width="30"
    >
    </el-table-column>
    <el-table-column
      label="序号"
      width="120"
    >
      <template #default="scope">0{{ scope.$index+1 }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="歌曲"
      width="220"
    >
    </el-table-column>
    <el-table-column
      prop="singer"
      width="200"
      label="歌手"
     
    >
    </el-table-column>
    <el-table-column
      prop="album"
      width="200"
      label="专辑"
    >
    </el-table-column>
    <!-- 中间的空白 -->
    <!-- <el-table-column
      label=""
      width="300"
    >
    </el-table-column> -->
    <el-table-column
      prop="length"
      label="时长"
    >
    </el-table-column>
    <el-table-column
      label="操作"
      show-overflow-tooltip
    >
      <template #default="scope">
        <a :href="scope.row.link">
        <el-button
          icon="el-icon-video-play"
          circle
          @click="playMusic(scope.row)"
        ></el-button>
        </a>
         <el-button
          icon="iconfont icon-shoucang"
          circle
          @click="favorMusic(scope.row)"
        ></el-button>
         <el-button
          icon="el-icon-plus"
          circle
          @click="addTo(scope.row)"
        ></el-button>
         <el-button
          icon="el-icon-download"
          circle
          @click="dowmLoadMusic(scope.row)"
        ></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    songData: {
      type: Array,
    },
  },
  data() {
    return {
      multipleSelection: [],
    };
  },
  mounted() {
    //console.log(this.songData)
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 播放音乐
    async playMusic(row){
      await this.axios.post("http://127.0.0.1:3000/recently/up",row)
    },
    //收藏音乐
    async favorMusic(row){
    // 点击后上传记录
    await this.axios.post("http://127.0.0.1:3000/favor/up",row)
    //console.log(row)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/icons/iconfont.css";
.el-button{
  border: transparent;
}

// 修改表头样式

</style>