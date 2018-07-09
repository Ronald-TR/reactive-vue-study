<template>
    <div v-on="categories.length > 0">
      <div class="container has-text-centered">
        <div class="container" v-for="c in categories" v-bind:key="c">
          <div class="columns">
            <div class="column"></div>
            
            <div class="column cat">
              <h1 class="subtitle">{{ c }}</h1>
            </div>
            
            <div class="column"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import FormBox from '@/components/FormBox'
export default {
  props: ['categories'],
  data(){
    return {
      cats : this.categories
    }
  },
  components: {
    FormBox
  },
  methods: {

  }    
}
</script>
<style scoped>
.cat{
  padding: 2%;
  
  background-color: brown;
  margin: 10px;
}
</style>

