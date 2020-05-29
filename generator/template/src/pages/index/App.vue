<template>
  <div id="Main">
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
</style>
