<template>
<div class="tab" :style="style">
    <img class="tabicon" :src="src"/>
    {{iconpath}}
</div>
</template>

<script>

export default {
  name: 'Tab',
  props: {
      mode: String,
      bgColor: String,
      iconpath: String
  },

    computed: {
         style() {
          return "background-color:"+ this.bgColor +";"
            },
        
        src() {
// loading images into vue is a pain in the ass
            if (this.mode == "file") {
                return require('../assets/icon-doc.png')
            } else if (this.mode == "edit") {
                return require('../assets/icon-pencil.png')
            } else {
               return require('../assets/icon-eye.png')
            }

        }
    },

    methods: {
        },

  data: function () {
      return {
          isActive: false
      };
  }
}

</script>

<style>
.tab {
height:50px;
width:50px;
border-radius:50px;
position:relative;
flex-direction: row;
margin: 0 10px;
position:relative;
}
.tabicon{

    -moz-user-select:none;
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
position:absolute;
left:50%;
top: 50%;
transform:translate(-50%, -50%);
z-index:8;
}
</style>