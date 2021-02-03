<template>
  <music-table :songData="historyData"></music-table>
</template>

<script>
import MusicTable from "@/components/MusicTable.vue";
export default {
  components: {
    MusicTable,
  },
  data(){
      return{
          historyData:[]
      }
  },
  mounted() {
    
    this.getHistoryData();
    // console.log(this.historyData)
  },
  methods:{
      async getHistoryData(){
         const {data} = await this.axios.get('http://127.0.0.1:3000/recently/down')
      this.historyData = data.data
      }
  }
};
</script>

<style>
</style>