<template>
   <div class="main-content">
      <!-- header area start -->
      <div class="header-area">
         <div class="row align-items-center">
            <!-- nav and search button -->
            <div class="col-md-6 col-sm-6 clearfix">
               <div class="nav-btn pull-left">
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
            </div>
            <div class="col-md-6 col-sm-6 clearfix">
            </div>
         </div>
         <div class="row align-items-center">
            <!-- nav and search button -->
            <div class="col-md-12 col-sm-12 clearfix padding30">
               <p class='mercantNameTitle'>{{mercantsName}}
               <p/>
            </div>
         </div>
         <div class="row align-items-center">
            <div class="col-lg-12 ">
               <!-- hortizontal annual menu -->
               <!-- hortizontal annual menu -->
               <horizontalMenu />
            </div>
            <!-- mobile -->
            <div class="col-12 d-block d-lg-none">
               <div id="mobile_menu"></div>
            </div>
         </div>
      </div>
        
      <div class="main-content-inner">
         <div class="row">
            <div class="col-xl-7 col-lg-7">
               <div class="card">
                  <div class="card-body">
                  <h4 class="header-title">Merchant Revenues</h4>
                  
                  <!-- annual report  -->
                  <!-- annual report  -->
                  <annualBarReport />
               </div>
               </div>
            </div>
             <div class="col-xl-5 col-lg-5 coin-distribution">
               <div class="card h-full">
                  <div class="card-body">
                     <div class="d-flex justify-content-between align-items-center">
                        <!-- donut report__________________________  -->
                        <!-- donut report  -->
                        <donutTopThree />
                     </div>
                  </div>
               </div>
            </div>
       
         </div>

          <div class="row mt-5 mb-5">
            <div class="col-12">
               <div class="card">
                  <div class="card-body">
                     <merchantsTable />
                  </div>
               </div>
            </div>
         </div>
      
      </div>
   </div>
</template>

<script>

// eslint-disable-next-line
import Vue from 'vue'
import Vuex from 'vuex'
import merchantsTable from '@/components/widgets/merchantsTable.vue'
import annualBarReport from '@/components/widgets/annualBarReport.vue'
import donutTopThree from '@/components/widgets/donutTopThree.vue'
import horizontalMenu from '@/components/widgets/horizontalMenu.vue'




export default {
  name: 'mainContent',

  computed: {
    ...Vuex.mapGetters(['mercantsName'])

  },


  components: {
   merchantsTable,
   annualBarReport,
   donutTopThree,
   horizontalMenu
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mercantNameTitle {
	font-size: 63px;
	text-transform: capitalize;
	color: white;
}

.padding30 {
	padding: 7%;
	background-color: #6D6982
}

.main-content {
	width: 100%;
	background: #2E2C39;
	padding: 3%;
}

.main-content-inner {
	padding: 0;
	margin-top: 3rem !important;
}
</style>
