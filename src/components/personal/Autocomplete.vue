<template>
<div>
    <div style="position:relative">
      <div class="" >
        <input class="form-control"  type="text" :value="value" @input="updateValue($event.target.value)"
          @keydown.enter = 'enter'
          @keydown.down = 'down'
          @keydown.up = 'up'
          @focus="isfocused = true"
          @focusout="isfocused = false"
          placeholder="Do quê você precisa?"
        >
        <b-list-group  class="dropdown-menu" style="position:absolute;width:100%" v-show="openSuggestions">
              <b-list-group-item href="#" v-bind:key="index"
                   v-for="(suggestion, index) in matches"
                  v-bind:class="{'active': isActive(index)}"
                 
              >
                <div @click="suggestionClick(index)">
                <a>{{ suggestion.title }} <br><small>{{ suggestion.subtitle }}</small>
                </a>
                </div>
              </b-list-group-item>
          </b-list-group>
        </div>
        
          
        
    </div>

</div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },

    suggestions: {
      type: Array,
      required: true
    }

  },
  data() {
    return {
      open: false,
      current: 0,
      isfocused: false
    }
  },
  computed: {
    matches() {
        return this.suggestions.filter((obj) => {
          return obj.title.toLowerCase().indexOf(this.value.toLowerCase()) >= 0;
        });
      
    },
    openSuggestions(){
      var ret = (this.value !== '' && this.matches.length != 0 && this.open === true);
      if (this.isfocused) {
        ret = true
        }
      return ret
    }
  },
  methods: {

    updateValue(value){
      if (this.open === false) {
        this.open = true
        this.current = 0
      }
      this.$emit('input', value)
    },
    enter(){
      this.$emit('input', this.matches[this.current].title)
      this.open = false
      this.isfocused = false
    },
    up(){
      if (this.current > 0) {
        this.current--
      }
    },
    down() {
      if (this.current < this.matches.length-1) {
        this.current++
      }
    },
    isActive(index){
      return index === this.current
    },
    suggestionClick(index) {
      console.log(index)
      this.$emit('input', this.matches[index].title)
      this.open = false
      

    }
  }    
}
</script>


<style scoped>
a{
 text-decoration: none; 
}
#datalist div:hover{
background-color: gainsboro;  
}
</style>
