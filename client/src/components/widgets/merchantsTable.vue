<template>
   <div class="market-status-table mt-4">
      <div class="table-responsive">
         <h4 class="header-title">Merchant Revenues</h4>
         <table class="dbkit-table">
            <tbody>
               <tr class="heading-td">
                  <td class = "header" v-for="month in monthsTable" :key=month>{{month}}</td>
               </tr>
               <tr>
                 <td class = "sub" v-for="amount in merchantRevenueYears">{{amount}}%</td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'merchantsTable',
  props :{
  
  },
 
    computed: {
        ...Vuex.mapGetters(['monthsTable']),
        ...Vuex.mapGetters(['merchantRevenueYears']),

    },
    watch: {
        ...Vuex.mapGetters(['monthsTable']),
        ...Vuex.mapGetters(['merchantRevenueYears']),
 
    }

}

</script>


<style scoped>
table.dbkit-table tr td {

    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    color: #616161;
    min-width: 84px;

}

.heading-td{
   background-color:#6D6982;
}

.header{
   color:white !important;
}

.sub{
   color:black!important;
   font-weight:bold!important;
}
</style>
