<template>
<div class="Day" :style="{'width' : width + 'px'}">
    <div class="name-heading"><h2>{{ name }}</h2></div>
      <Hour v-for="(i, key) in (rangeHours[1]+1)" v-bind:key="key" v-if="(i >= rangeHours[0])" :totalHoursToShow="(rangeHours[1]+1)"
        :cellHeight="cellHeight"
        :selectedColor="selectedColor"></Hour>
</div>
</template>

<script>
import Hour from './Hour.vue'

export default {
components: {Hour},

  name: 'Day',
  props: {
    name: String,
    rangeHours: Array,
    totalDaysToShow: Number,
    hhourHeight: Number,
    cellHeight:Number,
    selectedColor:String,
  },

created: function () {
      window.addEventListener('resize', this.onResize);
},

mounted: function() {
//alert(this.rangeHours[0]+this.rangeHours[1]);
//alert(this.wrapperWidth)
//this.width= 100
},

methods: {

onResize: function () {
 //   this.setAttribute('style', '');
},

  getWindowWidth: function() {
    this.windowWidth = window.innerWidth || window.clientWidth;
  }
},

computed: {
width: function() { // width of the column
//alert(this.screenWidth);
    var w = window.innerWidth || window.clientWidth;
  return ((w * 0.5) / this.totalDaysToShow) },

},


  data : function() {
    return {
        windowWidth: Number,
    }

  }
}
</script>

<style>
.Day {
  display:inline-block;
}
</style>