<template>
  <div id="app">

   <div class="">
    <Menu ref="Menu" :mode='mode'></Menu>
    </div>

    <Schedule :mode='mode'
    :bFixTitleBar='this.menuBodyOpen'
    :rangeHours='this.rangeHours'
    :rangeDays='this.rangeDays'
    :timeDisplayConvention='this.timeDisplayConvention'
    :selectedColor="selectedColor"
    ref="Schedule"></Schedule>

  </div>
</template>

<script>
import Schedule from './Schedule_components/Schedule.vue'
import Menu from './Menu_components/Menu.vue'

export default {
components: {Schedule,Menu},
name: 'app',

beforeMount: function () {
    //    this.height = screen.height || window.innerHeight || window.clientHeight;
     //   this.width = screen.width || window.innerWidth || window.clientWidth;
  //  window.bus = new Vue({});
    },

ready: function() {
    //window.addEventListener('resize', function() {this.onResize()});
},

  methods: {
    eventModeChange: function (event) {
            this.mode = event;
  //    console.log("Mode changed to:" +string);
        if (event == "edit") {
         document.getElementById('Schedule').addEventListener('mousedown', this.editColorsHandler);
        } else {
        document.getElementById('Schedule').removeEventListener('mouseup', this.editColorsHandler);
        }
    },

    onResize: function () {
     //         alert("resize");
        this.height = window.innerHeight || window.clientHeight;
        this.width = window.innerWidth || window.clientWidth;

    },

    editColorsHandler: function(e) {
      () => { 
        
        document.getElementById('Schedule').addEventListener('mousemove', function() {this.onColorDown()})

              }
         },
    
    onColorDown: function(e) {
      e = e || window.event;
    var pageX = e.pageX;
    var pageY = e.pageY;

    	    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    console.log(pageX, pageY);
    },

    saveLocalStorage() {
      this.$localStoreSetObject("rangeHours", this.rangeHours);
      this.$localStoreSetObject("rangeDays", this.rangeDays);
      this.$localStoreSetObject("rangeWeeks", this.rangeWeeks);
      localStorage.setItem("language", this.language);
      localStorage.setItem("mode", this.mode);
      localStorage.setItem("timeDisplayConvention", this.timeDisplayConvention);
      this.$localStoreSetObject("scheduleObject", this.scheduleObject);
    }
  },

  data: function () {
      return {
        rangeHours: [0, 23], //  display ranging from 0 to 23
        rangeDays:[0, 6], // display 0 is sunday, 6 is saturday
        rangeWeeks:[0, 0], // display 1 week by default [0]

        language: {type: String,
                default: "English"
        },
        mode: {type: String,
                default: 'file'
        },
        timeDisplayConvention : 12,
        menuBodyOpen: false,
        scheduleObject: Object,

        selectedColor: "#FF0000",
      }
  },

created: function () {
    window.addEventListener('resize', this.onResize);
  this.mode = 'file';

  this.$root.$on('on-mode-change', (e) => {this.eventModeChange(e);})

  this.$root.$on('on-menubody-change', (e) => {this.menuBodyOpen = e} )
  },

  computed: {
      timeRangeDisplay_Hour_Last: function() {return this.rangeHours[1]},
      timeRangeDisplay_Hour_First: function() {return this.rangeHours[0]},
      timeRangeDisplay_Day_First: function() {return this.rangeDays[0]},
      timeRangeDisplay_Day_Last: function() {return this.rangeDays[1]},
      timeRangeDisplay_Week_First: function() {return this.rangeWeeks[0]},
      timeRangeDisplay_Week_Last: function() {return this.rangeWeeks[1]},
      systemTime: function() {return Date().getTime()},
      systemTimezone: function () {return this.systemTime.getTimezoneOffset()},
      allowScheduleDrag: function() {
          if (this.mode == 'file' || this.mode == 'view') {
            return true
          } else {return false}
        },

  },

  beforeDestroy: function() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style>
:root{
  --cellBorderColor:rgba(38, 38, 38, 1);
  --headerColor:rgb(44, 62, 80);
}

#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--headerColor);
  margin:0;
}

input{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

body{
  margin:0;
    padding:0;
}
</style>
