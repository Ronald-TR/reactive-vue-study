<template>
  <div>
    <div id="banner" class="jumbotron">
      <div class="">

      </div>
      <!-- <div id="" class="container text-dark" style="position:absolute; z-index:1"> -->
      <div class="container text-left" style="padding: 0% 8% 0% 5%;">
      <div id="" class="container text-light" style=";" >
          <h1 class="display-4 text-light"><strong>Destaque!</strong></h1>
          <h3 class="lead"><strong>Categorias mais populares!</strong></h3>
          <p class="lead">Encontre profissionais, prestadores... <br>Quem você precisa pode estar mais próximo do que imagina</p>
          <hr class="my-4">
          <!-- <a class="text-center">Medicinal</a> -->
          <div class="text-left" >
            <h1 class="lead text-light"><strong>#{{ this.slide + 1 }} {{ this.listBanners[this.slide].name }}</strong></h1>
          </div>
      </div>
      </div>
    </div>
      
      
        <!-- <transition name="fade" mode="out-in">
          <div v-if="slide === 1" key="1">111</div>
          <div v-else-if="slide === 2" key="2">222</div>
          <div v-else key="3">333</div>
        </transition> -->

<!-- <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    
  </ol>
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img class="d-block w-100" src="/static/medicinal.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/static/medicinal2.jpg" alt="Second slide">
    </div>
  

  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div> -->


      <!-- <b-carousel
      
        id="carousel1"
        style="text-shadow: 1px 1px 2px #333; size: cover; position: center"
        controls
        indicators
        background="#ababab"
        :interval="4000"
        img-width="824"
        img-height="380"
        v-model="slide"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >

     

        <b-carousel-slide
          id="slide1"
          caption="slide 1"
          text="este é o meu slide 1"
          img-src="/static/medicinal2.jpg"
          >
          <div>

          </div>
          <h1 class="text-dark">texto blabla</h1>
        </b-carousel-slide> -->
        <!-- <b-carousel-slide
        caption="#1 Medicinal"
        text="Receitas e ingredientes para incrementar sua saúde!"
        img-src="/static/medicinal2.jpg"
          >

        </b-carousel-slide> 

      </b-carousel> -->
 </div>
   
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      listBanners: [
        {name:"Tipografia", url:"url('/static/patrick-fore-381200-unsplash.jpg')"},
        {name:"Medicinal", url: "url('/static/pratiksha-mohanty-430377-unsplash.jpg')"},
        {name:"Bebidas", url:"url('/static/alex-knight-177111-unsplash.jpg')"},
      ],
      sliding: null,
      timer : '',
      show : true,
    
    }
  },
  created: function() {
    this.timer = setInterval(this.updateBanner, 4000)
    
  },
  methods: {
    updateBanner(){
      this.show = !this.show
      var banner = document.querySelector('#banner')
      if (this.slide < 2){ this.slide++ } else if (this.slide === 2){ this.slide = 0 }
      // console.log(this.slide)
      banner.style.backgroundImage = this.listBanners[this.slide].url
      return 
    }
  }
    
}
</script>

<style scoped>

.img{
  position: center;
  size: cover;
  repeat: no-repeat;
}
#banner {
 
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(255,255,255,0.2);
  background-blend-mode: multiply;
  margin-bottom: 0%;
  
}
#banner:hover {
  background-size: 102% auto;
}

.banner {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url('/static/pratiksha-mohanty-430377-unsplash.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
