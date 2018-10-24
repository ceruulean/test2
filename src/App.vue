<template>
  <div id="app">

   <div class="">
    <Menu ref="Menu" :mode='mode'></Menu>
    </div>

    <Schedule :mode='mode' :bFixTitleBar='this.menuBodyOpen' :rangeHours='this.rangeHours' :rangeDays='this.rangeDays' :timeDisplayConvention='this.timeDisplayConvention'></Schedule>

  </div>
</template>

<script>
import Schedule from './Schedule_components/Schedule.vue'
import Menu from './Menu_components/Menu.vue'

export default {
components: {Schedule,Menu},
name: 'app',
ready: function() {
    window.addEventListener('resize', this.onResize());
},

  methods: {
    eventModeChange: function (event) {
            this.mode = event;
  //    console.log("Mode changed to:" +string);
    },

    onResize: function () {

    }
  },

  data: function () {
      return {
        rangeHours: [0, 23], //  display ranging from 0 to 23
        rangeDays:[0, 6], // display 0 is sunday, 6 is saturday
        rangeWeeks:[0, 0], // display 1 week by default [0]

        Language: {type: String,
                default: "English"
        },
        mode: {type: String,
                default: 'file'
        },
        timeDisplayConvention : 12,

        menuBodyOpen: false,

        ScheduleObject: Object,
      }
  },

created: function () {

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
    window.removeEventListener('resize', this.onResize())
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
}

body{
  margin:0;
    padding:0;
}
</style>
