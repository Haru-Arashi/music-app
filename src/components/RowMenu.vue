<template>
  <!-- 左侧菜单栏的每一项 -->
  <div class="row-menu">
    <el-row>
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          router
        >
          <div
            v-for="item in item"
            :key="item.id"
          >
            <el-menu-item
              :index="item.id"
              :route="item.url"
            >
              <i
                class="iconfont"
                :class=" item.icon"
              ></i>
              <template #title>{{item.title}}</template>
            </el-menu-item>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.row-menu {
  position: relative;
  height: 20%;
  width: 100px;
  .el-row {
    height: 100%;
    width: 100%;
    .el-col {
      .el-menu {
        position: absolute;
        background-color: #f4f4f4;
        height: 100%;
        border-right: 0;
        .el-menu-item {
          width: 132px;
          height: 50px;
          
        }
      }
    }
  }
}

/deep/ .is-active{
            background-color: #ffd200;
            color: #000000;
          }
</style>