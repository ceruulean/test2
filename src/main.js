import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


/*
Auxiliary functions

arrayTable: function (hourStart, hourEnd) {
  var WeekBase = new Day.Week(0);
var htmlstring
alert("tes");
for (var n = hourStart; n <= hourEnd; n++ ) {
htmlstring += "<tr>";
for (var i = 0; i < WeekBase.Days.length;i++) {

if (n == 0) {
   htmlstring += "<th>"+WeekBase.Days[i].name+"</th>";
} else {
    htmlstring += "<td>"+WeekBase.Days[i]+":00</td>";
}

}

htmlstring += "</tr>";

}

return htmlstring;
}
*/