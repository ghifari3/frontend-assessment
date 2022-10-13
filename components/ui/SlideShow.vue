<template>
  <div>
    <div class="slideshow-container">
      <div v-for="(slide, key) in slides" :key="key" class="fade" :class="{'hide': slideIndex - 1 !== key}">
        <div class="numbertext">{{ key + 1 }} / {{ slides.length }}</div>
        <img :src="slide" style="width:100%">
      </div>

      <a class="prev pointer" @click="plusSlides(-1)">❮</a>
      <a class="next pointer" @click="plusSlides(1)">❯</a>
      <!-- Thumbnail images -->
      <div v-if="withThumbnail" class="row">
        <div class="column" v-for="(slide, key) in slides" :key="key">
          <img class="demo pointer" :src="slide" style="width:100%" @click="currentSlide(key + 1)">
        </div>
      </div>
    </div>
    <br>
    <div v-if="!withThumbnail" style="text-align:center">
      <span
        v-for="(slide, key) in slides"
        :key="key"
        class="dot"
        :class="{'active': slideIndex - 1 === key}"
        @click="currentSlide(key + 1)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default() {
        return []
      }
    },
    withThumbnail: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      slideIndex: 1
    }
  },
  mounted(){
    this.showSlides(this.slideIndex)
  },
  methods: {
    plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    },
    currentSlide(n) {
      this.showSlides(this.slideIndex = n);
    },
    showSlides(n) {
      if (n > this.slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = this.slides.length
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  vertical-align: middle;
  height: 500px;
}

/* Slideshow container */
.slideshow-container {
  // max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  position: absolute;
  top: 45%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Six columns side by side */
.column {
  float: left;
  width: 25%;
}

/* Add a transparency effect for thumnbail images */
.demo {
  opacity: 0.6;
  max-height: 7rem;
}

.active,
.demo:hover {
  opacity: 1;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}

@media screen and (max-width: 90rem) {
  img {
    height: 20rem !important;
  }
}
</style>
