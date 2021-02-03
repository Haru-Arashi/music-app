<template>
  <!-- 因为vuex刷新后就没有了，
所以用后台存储历史记录和收藏记录比较好，
另外要对这些记录进行去重 -->
  <music-table :songData="favorData"></music-table>
</template>

<script>
import MusicTable from "@/components/MusicTable.vue";
export default {
  components: {
    MusicTable,
  },
  data() {
    return {
      favorData: [],
    };
  },
  mounted() {
    //console.log(this.$store.state.favor);

    this.getFavorData();
   // console.log(this.favorData);
  },
  methods: {
    async getFavorData() {
      const {data} = await this.axios.get('http://127.0.0.1:3000/favor/down')
      this.favorData = data.data
    },
  },
};
</script>

<style>
</style>