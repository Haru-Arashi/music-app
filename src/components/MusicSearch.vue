<template>
<!-- 首页搜索框 -->
<div class="search-content">
  <el-input
    v-model="input"
    placeholder="请输入内容"
    size="mini"
    prefix-icon="el-icon-search"
    @change="searchMsg"
  ></el-input>
  <!-- 搜索后的消息提示 -->
   <!-- <el-button :plain="true" @click="open">打开消息提示</el-button> -->
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
export default {
  data() {
    return {
      input: "",
    };
  },
  methods:{
      searchMsg(){
          //console.log(`搜索内容为：${this.input}`)
          ElMessage(`搜索内容为：${this.input}`)
      }
  }
};
</script>

<style lang="scss" scoped>
.search-content{
  width: 100%;
}
.el-input {
  width: 20%;
  padding-left: 10px;
}
</style>