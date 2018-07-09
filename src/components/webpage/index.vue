<template>
  <section class="hero is-dark is-large is-fullheight is-bold">
    <!-- navbar -->
    <nav-bar id="navbar" class="">  
    </nav-bar>
    <!-- banner -->
    <div>
    <banner></banner>
    </div>
 
    <work-map></work-map>

  </section>
</template>


<script>
import NavBar from '@/components/webpage/bodies/NavBar'
import FormBox from '@/components/FormBox.vue'
import Cats from '@/components/webpage/bodies/Categories'
import Banner from '@/components/webpage/bodies/Banner'
import WorkMap from '@/components/webpage/bodies/WorkMap'
import ajax from '@/ajax'

export default {
    data (){
        return {
            cep: ''
        }
    },
    created () {
        ajax._viacep('65066210').then(({data}) => {
            this.cep = data
        })
    },
    components: {
        NavBar, Cats, Banner, WorkMap
    },
    computed:{
      
    },
    methods: {
      
    }
}
</script>