<template>
  <div class="home">
    <Chart-pie
      class="chart-style"
      :data="pieData"
      :text="'每周投放创意量'"
    ></Chart-pie>
    <Chart-bar class="chart-style"></Chart-bar>
  </div>
</template>

<script>
import { ChartPie, ChartBar } from '@/components/charts';
export default {
  name: 'Home',
  components: {
    ChartPie,
    ChartBar,
  },

  data() {
    return {
      pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 1548, name: '搜索引擎' },
      ],
    };
  },

  created () {
    this.$store.dispatch('Dimension/serviceTest', { 
      data: 1 
    }).then(data => {
      console.log(data, 'eeee')
    })
  }
};
</script>

<style lang="less" scoped>
.chart-style {
  width: 400px;
  height: 300px;
  float: left;
}
</style>
