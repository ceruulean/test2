<template>
<div id="Schedule">

<div class="titlebar" :class="{'titlebarFixed': (bFixTitleBar)}">
    <input v-if="this.mode == 'edit'" v-model="Title" :placeholder="this.Title" class="titlebarEditing">
    <h1 v-if="this.mode != 'edit'">{{ Title }}</h1>
</div>

<div class="SchedBody">

  <div class="time-labels">
   <div v-for="(h, key, index) in this.myHours" :key="index">
     <strong>dddd</strong>
    </div>
  </div>

<div ref="day-wrapper" v-if="(myDays.length >= 0)">
  <Day v-for="(d, key, index) in this.myDays" :key="key" :name="d.name" :Hours="this.myHours"></Day>
</div>
</div>

</div>
</template>

<script>
import Day from "./Day.vue"
import Hour from "./Hour.vue"
import * as aux from "./S-auxiliary.js"

export default {
components: {Day, Hour},

  name: 'Schedule',
  props: {
    rangeHours: Array,
    rangeDays: Array,
    mode: String,
    bFixTitleBar: Boolean,
    timeDisplayConvention: String
  },

created: function () {
  this.myDays = this.newDays();
},

mount : function() {
//$refs.day-wrapper.$mount(#Day);
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
  },

 computed: {
      myHours: function() {
        return this.newHours();
      },
      myDays: function() {
          return this.newDays();
      }
  },

  data : function () {
    return {
      Title: "New Title",

  }
}
}

//alert(this.viewHoursH);

</script>

<style>
#Schedule {
display:flex;
}
.SchedBody{
min-width:50%;
display:grid;
grid-template-columns: 10% 90%;
  margin:0 auto;
}

.time-labels{
flex-direction:column;
}
.titlebar{
  margin:0 auto;
  z-index:8;
  width:100%;
  position:absolute;
}

.titlebar h1{
padding:0;
margin:0;
font-size:4em;
text-align:center;
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

.SchedBody {    
    margin-top:6em;
}
</style>