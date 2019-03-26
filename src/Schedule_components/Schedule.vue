<template>
<div id="Schedule">

<div class="titlebar" :class="{'titlebarFixed': (bFixTitleBar)}">
    <input v-if="this.mode == 'edit'" v-model="title" :placeholder="this.title" class="titlebarEditing">
    <h1 v-if="this.mode != 'edit'">{{ title }}</h1>
</div>

<div class="SchedBody">

  <div>
    <div style="height:3em;"></div>
    <!-- only render hours if within display Range -->
   <div class="time-label" v-for="(h, index) in this.myHours" :key="index" v-if="(h >= rangeHours[0] && h <= rangeHours[1])" :style="setCellHeight()">
     <strong>{{hourTickerDecimal(h)}}</strong>
    </div>
  </div>

<div id="days-body-wrapper" ref="Wrapper" v-if="(myDays.length >= 0)">
  <Day v-for="(d, key) in this.myDays" :key="key"
  :name="d.name"
  :rangeHours="rangeHours"
  :totalDaysToShow="(rangeDays[1] + 1)"
  :cellHeight="cellHeight"
  :selectedColor="selectedColor"></Day>
</div>
</div>

</div>
</template>

<script>
import Day from "./Day.vue"
import Hour from "./Hour.vue"
import * as aux from "@/S-auxiliary.js"

export default {
components: {Day, Hour},

  name: 'Schedule',
  props: {
    rangeHours: Array,
    rangeDays: Array,
    mode: String,
    bFixTitleBar: Boolean,
    timeDisplayConvention: String,
    selectedColor:String,
  },

created: function () {
  this.myDays = this.newDays();

},

mounted : function() {

this.width = this.$refs.Wrapper.getBoundingClientRect().width;
this.$emit('on-schedule-width', this.width)
},

  methods : {

    newHours: function() {
      var temp = new Array;
      for (var h = this.rangeHours[0]; h <= this.rangeHours[1]; h++) {
        temp.push(h);
      }
//    this.myHours = temp;
      return temp;
    },

    newDays: function() {
      var temp = new Array;

      for (var i = this.rangeDays[0]; i <= this.rangeDays[1]; i++) {
  //      alert(aux.getDayName(i));
        var Obj = { "name" : aux.getDayName(i), "hours" : this.newHours() };
        temp.push(Obj);
       }
  //  this.myDays = temp;
       return temp;
    },

    hourTickerDecimal: function(num) {
    //  alert(this.timeDisplayConvention);
      return aux.hourTickerDecimal(num, this.timeDisplayConvention);
    },

    setCellHeight() {
       return "height:"+ this.cellHeight + "px";
    },
    saveLocalStorage(){
      var schedObj = {
        title: this.title,
        width: this.width,
        author: this.author,
        originalTimezoneUTC: this.originalTimezoneUTC,
        originalTimezoneName: this.originalTimezoneName
      }
    }
  },

 computed: {
      myHours: function() {
        return this.newHours();
      },
      myDays: function() {
          return this.newDays();
      },

      
  cellHeight: function() { // height of the cell
    var screenheight = window.innerHeight || window.clientHeight;
    return ((screenheight * 0.9) / this.rangeHours[1]);
     },

  },

  data : function () {
    return {
      title: "New Title",
      width: {type: Number},
      author: "None",
      originalTimezoneUTC: 0 ,
      originalTimezoneName: "New York"
  }
},
}

//alert(this.viewHoursH);

</script>

<style>
h2 {
  padding:1em 0;
  margin:0;
font-size:1.2em;
}

#Schedule {
display:flex;
flex-flow:column nowrap;
z-index:3;
}
.SchedBody{
  width:100%;
display:flex;
flex-flow:row nowrap;
justify-content:center;
  margin:7em auto 0 auto;

}

.time-label{
padding-right:1em;
}

.titlebar{
  background-color:rgb(179, 219, 221);
  margin:0 auto;
  z-index:8;
  width:100%;
  position:absolute;
}

.titlebar h1{
padding:0;
margin:10px;
font-size:4em;
text-align:center;
}

.titlebarEditing{
padding:0;
border:none;
color: var(--headerColor);
font-weight:700;
opacity:0.7;
}

.titlebarFixed{
position: fixed;
}

 input {
     border-radius:2em;
     text-align:center;
     font-size:4em;
  margin:10px auto;
 }

#days-body-wrapper{
  display:inline-block;
}

.name-heading{
      box-shadow: 
    2px 0 0 0 var(--cellBorderColor), 
    0 2px 0 0 var(--cellBorderColor),
    2px 2px 0 0 var(--cellBorderColor),  /* Just to fix the corner */
    2px 0 0 0 var(--cellBorderColor) inset, 
    0 2px 0 0 var(--cellBorderColor) inset;
}
</style>