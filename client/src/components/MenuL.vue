<template>
<div class="sidebar-menu">
  <div class="sidebar-header">
      <div class="logo">
          <a href="index.html"><img src="https://media.licdn.com/dms/image/C4D0BAQHsraTd3xGEjA/company-logo_200_200/0?e=2159024400&v=beta&t=EGAixMkLMPLezfjw_jVePW5Oa6YRQhrmcyI6w-P2l5k" alt="logo"></a>
      </div>
  </div>
  <div class="main-menu">
      <div class="menu-inner">
          <nav>
              <ul class="metismenu" id="menu">
    
                  <li @click='selectMerchants(merchant,years)' v-for="merchant in list" :key=merchant>
                    <a>
                    <i class="ti-map-alt"></i> 
                    <span>{{merchant}}</span></a>
                  </li>
              </ul> 
          </nav>
      </div>
  </div>
</div>
</template>
<script>


import Vuex from 'vuex'
import change from '@/data.js'
import store from '@/store.js'


export default {
  name: 'MenuL',
    props: {
    list: Array
  },
    data () { 
    return {

    }
    
  },
   computed: {
    ...Vuex.mapGetters(['years'])

  },
  mounted() {
  },

  methods :{
    selectMerchants(merchant,year){
      let years = store.getters.years
       change.methods.change(merchant,years)
     }
  }
  
}

</script>

<style scoped>
span{
  color:white;
}
a{
  text-align: left;
}

.metismenu li a {
    position: relative;
    display: block;
    color: #8d97ad;
    font-size: 15px;
    text-transform: capitalize;
    padding: 8px 15px;
    letter-spacing: 0;
    font-weight: 400;
}

.menu-inner {
    overflow-y: hidden;
    height: 100%;
}
li{
  cursor:pointer
}
</style>
