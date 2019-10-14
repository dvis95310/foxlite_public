<template>
  <div class="home d-flex" id="wrapper">
    <MenuL :list = "listMerchantsArr" commentIds="testTile"/>
    <mainContent :monthsList = 'months'/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import MenuL from '@/components/MenuL.vue'
import mainContent from '@/components/mainContent.vue'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const listMerchantsArr = ['amazon',
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
    'marionnaud'
]


export default {
    name: 'home',
    props: {
        title: String,
        car: String,
        likes: Number,
        isPublished: Boolean,
        commentIds: Array,
        author: Object,
        callback: Function,
        contactsPromise: Promise // ou n'importe quel autre constructeur
    },
    data() {
        return {
            commentIdsTe: "this.commentIds",
            listMerchantsArr: listMerchantsArr,
            months: months

        }
    },

    components: {
        mainContent,
        MenuL
    }
}
</script>
