<template>
  <div id="app">

   <div class="">
    <Menu ref="Menu" Title="New Title" :mode='mode'></Menu>
    </div>

    <Schedule :mode='mode' :bFixTitleBar='this.menuBodyOpen' :rangeHours='this.rangeHours' :rangeDays='this.rangeDays' :timeDisplayConvention='this.timeDisplayConvention'></Schedule>

    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Schedule from './Schedule_components/Schedule.vue'
import Menu from './Menu_components/Menu.vue'

export default {
components: {HelloWorld,Schedule,Menu},
name: 'app',
  
  methods: {
    eventModeChange: function (event) {
            this.mode = event;
  //    console.log("Mode changed to:" +string);
    }
  },

  data: function () {
      return {
        rangeHours: [0, 23],
        rangeDays:[0, 6],
        rangeWeeks:[0, 0],

        Language: {type: String,
                default: "English"
        },
        mode: {type: String,
                default: 'file'
        },
        timeDisplayConvention : {type: String,
                default: '24' // military time
        },
              menuBodyOpen: false
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
