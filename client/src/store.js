import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  merchants : 'amazon',
  years : 2018,
  monthsTable : ['Jan','Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep', 'Oct', 'Nov','Dec'],
  yearsTable : [],
  merchantRevenueYears:["15"],
  merchantsTable:[],
  merchantsTableR:[],
  globaleRevenu : []

}

const mutations = {
  CHANGE_MERCHANT : (state,stateName) =>{
    state.merchants=stateName
  },
  CHANGE_MERCHANT_REVENUE : (state,arrayRevenue) =>{
    state.merchantRevenueYears=arrayRevenue
  },
  CHANGE_YEARS : (state,Yearso) =>{
    state.years=Yearso.arg
  },
  CHANGE_YEARS_TABLE : (state,arrayYears) =>{
    state.yearsTable=arrayYears
  },
  CHANGE_MERCHANTS_TABLE : (state,merchantsTableArg) =>{
    state.merchantsTable=merchantsTableArg
  },
  CHANGE_MERCHANTS_TABLE_R : (state,merchantsTableArg) =>{
    state.merchantsTableR=merchantsTableArg
  },
  CHANGE_GLOBAL_REVENU : (state,global) =>{
    state.globaleRevenu=global.arg
  }
}


const getters = {
  mercantsName : state => state.merchants,
  years : state => state.years,
  monthsTable : state => state.monthsTable,
  yearsTable : state => state.yearsTable,
  merchantRevenueYears : state => state.merchantRevenueYears,
  merchantsTable : state => state.merchantsTable,
  merchantsTableR : state => state.merchantsTableR,
  globaleRevenu : state => state.globaleRevenu

}
const actions = {
  selectMerchant: (store,merchantName) => {
    let use = merchantName.merchant
    store.commit('CHANGE_MERCHANT', use)
    
  },
  changeRevenuesArray: (store,arrayRevenue) => {
    let use = arrayRevenue.arrayResult
    store.commit('CHANGE_MERCHANT_REVENUE', use)
    
  
  },
  changeYearsArray :  (store,response) => {
    let use = response
    store.commit('CHANGE_YEARS_TABLE', use)
    
  },
  changeYears :  (store,response) => {
    let use = response
    store.commit('CHANGE_YEARS', use)
    
  },
  changeMercantTable :  (store,response) => {
    let use = response.data
    store.commit('CHANGE_MERCHANTS_TABLE', use)
    
  },
  changeMercantTableR :  (store,response) => {
    let use = response.arrayStore
    store.commit('CHANGE_MERCHANTS_TABLE_R', use)
    
  },
  changeGlobalRevenu :  (store,response) => {
    let use = response
    store.commit('CHANGE_GLOBAL_REVENU', use)
    
  }
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters :getters,
  actions: actions
})

global.store = store


export default store