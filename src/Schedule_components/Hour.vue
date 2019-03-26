<template>
<div class="hour" ref="Hour" :style="{'height': cellHeight + 'px'}" @mouseover="test('Entering')" @mouseout="test('Exiting')"
 @dragstart="dragstart"
@click.stop="click(0.5, 1)">

<div class="halfHourMark" :style="{'height': halfHeight + 'px'}" @click.stop="click(0,0.5)"></div>
<div class="fill" :style="fillStyle" v-if="(end > 0)"></div>

</div>
</template>

<script>

export default {
  name: 'Hour',
  props: {
      Time: Number,
      totalHoursToShow: Number,
      cellHeight:Number,
      selectedColor:String,
  },

 methods: {

     clear: function() {
         this.fill = this.fill.default;
         this.percent = 0
     },

       getWindowheight: function() {
    this.windowHeight = window.innerHeight || window.clientHeight;
  },

        test: function(str) {
           // console.log(str + " " +this.key+ "")
        },

    click(start, end) {
        if ((this.start == start && this.end == end)) {
            this.start = 0;
            this.end = 0;
            return;
        }
        
        if (this.start == start) {
            this.end = end;
        } else if (this.start == end){
            this.start = start;
        } else if (this.end == start) {
            this.end = end;
        } else {
            this.start = start;
            this.end = end;
        }

        if (this.color != this.selectedColor) {
            this.color = this.selectedColor;
        }

    },
    dragstart() {

    }
 },

computed: {

    fillStyle() {
        return "background-color:"+ this.color +";height:"+this.fillHeight+"px;bottom:"+this.bottomDisplace+"px"
    },

    fillHeight() {
        return (this.cellHeight * (this.end - this.start));
    },

    halfHeight(){
        return (this.cellHeight / 2);
    },

    bottomDisplace() {
        return (1-this.end) * this.cellHeight;
    }
},

 data: function() {
     return {
         color: {type: String,
                default: "rgba(255,255,255,0)"
         },
         start: { type: Number,
                default: 0
         },
         end: { type: Number,
                default: 0
         },

        windowHeight: Number,
     }
 }
}

</script>

<style>

.hour{
    position:relative;
    box-shadow: 
    2px 0 0 0 var(--cellBorderColor), 
    0 2px 0 0 var(--cellBorderColor),
    2px 2px 0 0 var(--cellBorderColor),  /* Just to fix the corner */
    2px 0 0 0 var(--cellBorderColor) inset, 
    0 2px 0 0 var(--cellBorderColor) inset;
}
.fill{
    position:absolute;
    width:100%;
}
.halfHourMark{
    position:absolute;
    border-bottom:2px gray dashed;
    width:100%;
    z-index:2;
}
</style>