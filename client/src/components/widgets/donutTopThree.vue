<template>
   <div>
      <apexchart type=line height=350 :options="chartOptions" :series="series" />
   </div>
</template>

<script>

// eslint-disable-next-line
import Vue from 'vue'
import Vuex from 'vuex'
import VueApexCharts from 'vue-apexcharts'
import store from '@/store.js'

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)


export default {
    name: 'donutTopThree',
    data: function() {
        return {
            series: [{
                name: 'Merchant Revenue',
                type: 'column',
                data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
            }, {
                name: 'Market Revenue',
                type: 'line',
                data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            }],
            chartOptions: {
                stroke: {
                    width: [4, 4]
                },
                title: {
                    text: 'Merchant/Market Revenues'
                },
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

                xaxis: {
                    type: 'month'
                },
                yaxis: [{
                    title: {
                        text: 'market revenues euros',
                    },

                }, {
                    opposite: true,
                    title: {
                        text: 'merchant revenues euros'
                    }
                }]
            }
        }
    },

    computed: {

        // ...Vuex.mapGetters(['globaleRevenu']),
        ...Vuex.mapGetters(['merchantsTableR']),
        updateChart() {
            this.series = [{
                    data: store.getters.globaleRevenu,
                    name: 'Market Revenue',
                    type: 'line',

                },
                {
                    data: store.getters.merchantsTableR,
                    name: 'Merchant Revenue',
                    type: 'line',

                }
            ]
        }

    },
    watch: {

        ...Vuex.mapGetters(['merchantsTableR']),
        updateChart() {
            this.series = [{
                    data: store.getters.globaleRevenu,
                    name: 'Market Revenue',
                    type: 'line',

                },
                {
                    data: store.getters.merchantsTableR,
                    name: 'Merchant Revenue',
                    type: 'line',

                }
            ]
        }


    }
}
</script>

<style scoped>

</style>
