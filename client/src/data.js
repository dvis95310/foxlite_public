// DATASERVICES IS THE MAIN SCRIPT WHICH GET DATA FROM SERVER
/* eslint-disable */
import Vue from 'vue'
import axios from 'axios'
import store from '@/store'

Vue.prototype.$axios = axios

// function to create a simple array and put data inside
let arraySimple
let headersApi = {
    'Access-Control-Allow-Origin': 'http://http://54.37.226.188:8080/',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': '*'
}

function dispatch(arg, action) {
    store.dispatch(action, {
        arg
    })
}



function globalRevenuMerchant(year) {
    let url = 'http://54.37.226.188:3000/years/revenue'
    let yearParameter = year
    let compose = url + "/" + yearParameter
    axios
        .get(compose, {
            headers: headersApi,
            credentials: 'same-origin'
        })
        .then(response => JsonToArray2(response.data))

}

globalRevenuMerchant(2014)

function JsonToArray(jsonDict, merchant) {
    let dict = jsonDict.values
    let arrayStore = []
    for (var key in dict) {
        arrayStore.push(dict[key].value);

    }
    let globalR = store.getters.globaleRevenu
    arraySimple = arrayStore
    let arrayResult = []

    // calculate merchant revenue to array
    for (var i = 0; i < arrayStore.length; i++) {
        let result = arrayStore[i] / globalR[i] * 100
        result = parseFloat(result.toFixed(1))
        arrayResult.push(result)

    }

    store.dispatch('changeMercantTableR', {
        arrayStore
    });
    store.dispatch('changeRevenuesArray', {
        arrayResult
    });
    store.dispatch('selectMerchant', {
        merchant
    })
}


function JsonToArray2(jsonDict) {
    let dict = jsonDict.values
    let arrayStore = []
    for (var key in dict) {
        arrayStore.push(dict[key].value);

    }
    arraySimple = arrayStore

    dispatch(arraySimple, 'changeGlobalRevenu')
}



// to get information from server 

function serverRequest(merchant, year) {
    globalRevenuMerchant(year)
    let url = 'http://54.37.226.188:3000/years/revenue'
    let yearParameter = year
    let merchantParameter = merchant
    let compose = url + "/" + yearParameter + "/" + merchantParameter
    axios
        .get(compose, {
            headers: headersApi,
            credentials: 'same-origin'
        })
        .then(response => JsonToArray(response.data, merchant))

}



function getStaticsInfos() {
    let staticUrlYears = "http://54.37.226.188:3000/years"
    let staticUrlMerchants = "http://54.37.226.188:3000/merchants"
    axios
        .get(staticUrlYears, {
            headers: headersApi,
            credentials: 'same-origin'
        })
        .then(response =>
            dispatch(response.data, 'changeYearsArray')
        )


    axios
        .get(staticUrlMerchants, {
            headers: headersApi,
            credentials: 'same-origin'
        })
        .then(response =>
            dispatch(response.data, 'selectMerchant')
        )

}
getStaticsInfos()
export default {
    name: 'data',
    props: {
        list: Array
    },
    data() {
        return {}
    },
    methods: {
        change(merchant, year) {
            serverRequest(merchant, year);
        },
        changeYear(year, merchant) {
            dispatch(year, 'changeYears')
            serverRequest(merchant, year);
        }

    },


}