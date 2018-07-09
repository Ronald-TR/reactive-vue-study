<template>
  <b-navbar toggleable="md" type="light" variant="light" fixed>
    <b-navbar-brand href="/">
      <img style="width: 40px" src="@/assets/icon-logo.png" alt="" srcset="">
        <a class="d-sm-block">Workēpub</a>
      </b-navbar-brand>
      <!-- espaço do brand entre o input de pesquisa  -->
      <b-navbar-nav class="">
        <b-nav-item >
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      
       <autocomplete style="width:100%" :suggestions="suggestions" v-model="selection" id="teste"></autocomplete> 
    <!-- espaçamento o input de pesquisa entre o burguer button -->
    <b-navbar-nav class="">
        <b-nav-item >
        </b-nav-item>
      </b-navbar-nav>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item>Junte-se!</b-nav-item>
          <b-nav-item>Sobre</b-nav-item>  
        </b-navbar-nav>
        
      </b-collapse>      
      
  </b-navbar>

</template>

<script>
import autocomplete from '@/components/personal/Autocomplete'
export default {
    name: 'NavBar',
    props: ['categories'],
    data () {
        return {    
          selection: '',
          suggestions: [
            {
              title:'Programação',
              subtitle: 'categoria'
            },
            {
              title:'Design',
              subtitle: 'categoria'
            },
            {
              title:'Datilografia',
              subtitle: 'categoria'
            },
            {
              title:'Mecânica',
              subtitle: 'categoria'
            },
            {
              title:'Elétrica',
              subtitle: 'categoria'
            },
            {
              title:'Carpintaria',
              subtitle: 'categoria'
            },
            {
              title:'Medicinal',
              subtitle: 'categoria'
            },
            {
              title:'Professor',
              subtitle: 'categoria'
            }
          ]
        }
    },
    components: {
      autocomplete
    }

}
</script>

<style scoped>


</style>
