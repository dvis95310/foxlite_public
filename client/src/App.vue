<template>
  <div class="page-container" id="app">
    <router-view/>
  </div>
</template>
<script>



/* eslint-disable */
  export default {
    data () {
      return {
        users: [],
        loading: false,
      }
    },
    mounted () {
      this.$axios
      .get('http://54.37.226.188:3000/years/2018',{
        headers: {
            'Access-Control-Allow-Origin': 'http://http://54.37.226.188:8080/',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': '*'
        },
        credentials: 'same-origin'

  
  })
      .then(response => console.log(response.data))
                }
      
  }

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
