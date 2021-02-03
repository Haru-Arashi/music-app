<template>
  
  <ul>
    <li class="title">
      <div class="span">排名</div>
      <div class="span">歌曲名称</div>
      <div class="span">歌手名称</div>
    </li>
    <li
      v-for="(item,index) in listData"
      :key="index"
      :class="{even:index%2!==0}"
    >
      <div class="span">{{index+1}}</div>
      <a :href="item.music">
        <div class="span">{{item.title}}</div>
      </a>
      <a :href="item.music">
        <div class="span">{{item.singer}}</div>
      </a>

    </li>
  </ul>
</template>
<script>
export default {
    props:{
        listData:{
            type:Array
        }
    }
}
</script>
<style lang="scss" scoped>
ul {
  display: block;
  margin: 10px;
  padding: 0 100px;
  li {
    display: flex;
    list-style: none;
    padding: 5px 0;
    width: 100%;
    min-width: 60%;
    .span {
      width: 300px;
      padding: 10px 10px;
    }
  }
}
.even {
  background-color: #fafafa;
}

.title{
  background-color: #fafafa;
  .span{
    //border: solid 1px #f0a5a5;
  }
}
</style>