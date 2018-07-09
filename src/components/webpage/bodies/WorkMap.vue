<template>
  <div>
    <div id="workemap" class=""></div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      map : null
    }
  },
  mounted () {
    this.map = new google.maps.Map(document.getElementById('workemap'), {
      center: {
          lat: -2.5391099,
          lng: -44.2829046 
        },
        scrollwheel: false,
        zoom: 20
    })

  }
}
</script>

<style scoped>
  #workemap {
    margin: 0 auto;
    height:400px;
    width: 100%;
    
  }
</style>
