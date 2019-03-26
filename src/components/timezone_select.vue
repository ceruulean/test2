<template>
<select v-model="currentZone"  @change="onSelect">
    <option v-for="(z, index) in UTCzones" :key="index" :value="z.value">{{z.label}}</option>
</select>

</template>

<script>
import json from './timezones_utc.json'

export default {
components: {},
  name: 'timezone_select',

mounted: function(){
    this.getJSON();
},

methods: {
    sendValue() {

    },

        getJSON : function () {
            this.UTCzones = json.UTC;
        },

    onSelect: function() {
        console.log(this.currentZone);
    }
},

data: function() {
    return {
        UTCzones: {},
        currentZone: '+0:00',
    }
}
  
}
</script>

<style>
</style>