<template>
   <div class="horizontal-menu">
      <nav>
         <ul id="nav_menu">
            <li v-for="year in yearsTable.arg" :key=year>
               <button  @click='changeYears(year)' class = "btn btn-flat btn-outline-primary mb-3"><span>{{year}}</span></button>
            </li>
         </ul>
      </nav>
   </div>
</template>
<script>
// eslint-disable-next-line
import Vue from 'vue'
import Vuex from 'vuex'
import VueApexCharts from 'vue-apexcharts'
import data from '@/data'
import store from '@/store.js'

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)


export default {
    name: 'horizontalMenu',
    data: function() {
        return {
            options: {},
            series: [44, 55, 41, 17, 15]
        }
    },

    computed: {
        ...Vuex.mapGetters(['yearsTable']),
        ...Vuex.mapGetters(['mercantsName'])


    },

    methods: {
        changeYears(year) {
            let mercantsName = store.getters.mercantsName
            data.methods.changeYear(year, mercantsName)
            //  data.methods.changeYear(year,mercantsName)
        }
    }

}
</script>

<style scoped>
button {
	margin: 15px
}

.horizontal-menu {
	position: relative;
	padding: 25px;
}

span {
	font-size: 19px;
}

li {
	cursor: pointer
}
</style>
