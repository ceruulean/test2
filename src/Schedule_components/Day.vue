<template>
<div class="Day">
    <div class="name-heading">{{ name }}</div>
<Hour></Hour>
</div>
</template>

<script>
import Hour from './Hour.vue'

export default {
components: {Hour},

  name: 'Day',
  props: {
    name: String,
    Hours: Array
  },



}
</script>

<style>
.Day {
    border: 1px solid black;
}
</style>