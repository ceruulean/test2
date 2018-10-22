<template>
<div class="hour" ref="hour">
<div ref="fill" :style="fillStyle">
    hour test
</div>
</div>
</template>

<script>

export default {
  name: 'Hour',
  props: {
      Time: Number
  },

 methods: {

     clear: function() {
         this.fill = this.fill.default;
         this.percent = 0
     }
 },

compute: {
    fillStyle() {
        return "background-color:"+ this.fill +";height:"+this.fillHeight+"px;"
    },

    fillHeight: function() {
        return (this.$refs.infoBox.clientHeight * this.percent);
    }
},

 data: function() {
     return {
         fill: {type: String,
                default: "rgba(255,255,255,0)"
         },
         percent: { type: Number,
                default: 0
         },
     }
 }
}

</script>

<style>

.hour{
    height:1em;
}
</style>