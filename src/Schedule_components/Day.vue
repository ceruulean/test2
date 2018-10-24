<template>
<div class="Day" :style="{'width' : width + 'px'}">
    <div class="name-heading">{{ name }}</div>
      <Hour v-for="(i, key) in rangeHours[1]" v-bind:key="key" v-if="(i >= rangeHours[0])"></Hour>
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
  },

created: function () {
},

mounted: function() {
//alert(this.rangeHours[0]+this.rangeHours[1]);
//alert(this.wrapperWidth)
this.width= 100
},

methods: {
  computeWidth: function() {

  }
},

watch: {
wrapperWidth: function() {
  this.computeWidth()
}
},

  data : function() {
    return {
      width: 10
    }

  }
}
</script>

<style>
.Day {display:inline-block;
    border: 1px solid black;
}
</style>