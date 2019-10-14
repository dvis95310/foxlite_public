// graph of merchant revenus

<template>
  <div>
       <p @change="updateChart">{{mercantsName}} : {{years}}<p/>
    <apexchart  ref="apex" width="80%" type="line" :options="options" :series="series"></apexchart>
</div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import VueApexCharts from 'vue-apexcharts'
import store from '@/store.js'

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)


export default {
    name: 'annualBarReport',
    data: function() {
        return {
            options: {
                chart: {
                    id: 'chart'
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }
            },
            series: [{
                name: 'series-1',
                data: 'this.$store.getters.merchantRevenueYears'
            }]
        }
    },

    methods: {
        updateChart() {
            this.series = [{
                data: store.getters.merchantRevenueYears
            }]
        }
    },

    computed: {
        ...Vuex.mapGetters(['mercantsName']),
        ...Vuex.mapGetters(['merchantRevenueYears']),
        ...Vuex.mapGetters(['years']),
        merchantRevenueYearsTab() {
            this.series = [{
                data: store.getters.merchantRevenueYears
            }]
        }

    },
    watch: {
        ...Vuex.mapGetters(['mercantsName']),
        ...Vuex.mapGetters(['merchantRevenueYears']),
        ...Vuex.mapGetters(['years']),
        merchantRevenueYearsTab() {
            this.series = [{
                data: store.getters.merchantRevenueYears
            }]
        }
    }
}
</script>

<style scoped>

</style>
