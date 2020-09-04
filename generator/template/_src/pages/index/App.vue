<template>
  <div id="Main">
    <i class="iconfont iconjiahao"></i>
    <i class="iconfont">&#xe608;</i>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">about</router-link> |
      <router-link @click.native="jump" to="">preview</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    jump () {
      window.location.href = './preview'
    }
  }
}
</script>

<style>
#Main{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import url('../../assets/font/iconfont.css');
@font-face {
  font-family: 'iconfont';
  src: url('../../assets/font/iconfont.eot');
  src: url('../../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../../assets/font/iconfont.woff') format('woff'),
  url('../../assets/font/iconfont.ttf') format('truetype'),
  url('../../assets/font/iconfont.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
