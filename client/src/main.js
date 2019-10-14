import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MenuL from '@/components/MenuL.vue'
import serverRequest from '@/data.js'

import "@/assets/css/bootstrap.min.css"
import "@/assets/css/font-awesome.min.css"
import "@/assets/css/themify-icons.css"
import "@/assets/css/metisMenu.css"
import "@/assets/css/slicknav.min.css"
import "@/assets/css/typography.css"
import "@/assets/css/default-css.css"
import "@/assets/css/styles.css"
import "@/assets/css/responsive.css"

Vue.prototype.$axios = axios


let edile = [ 'amazon',
'cdiscount',
'fnac',
'vente privee',
'la redoute',
'darty',
'asos',
'showroom prive',
'boulanger',
'conforama',
'ikea',
'sarenza',
'sephora',
'maisons du monde',
'beaute privee',
'yves rocher',
'marionnaud' ]


var ComponentA = MenuL

new Vue({
  router,
  store,
  edile,
  serverRequest ,

  render: h => h(App)
}).$mount('#app')

export default {
  components: {
    'component-a': ComponentA,

  },
  data () {
    return {
      edile
    }
  }
    
}
