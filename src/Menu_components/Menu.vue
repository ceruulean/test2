<template>
<div id="Menu" class="flex">
<div class="tabclick" v-on:click="toggle('file')" v-bind:class="{'tabActive' : (this.mode == 'file')}" alt="File"><Tab ref="0" bg-color="#89BDEB" mode="file"></Tab></div>
<div class="tabclick" v-on:click="toggle('edit')" v-bind:class="{'tabActive' : (this.mode == 'edit')}" alt="Edit"><Tab ref="1" bg-color="#3087D3" mode="edit"></Tab></div>
<div class="tabclick" v-on:click="toggle('view')" v-bind:class="{'tabActive' : (this.mode == 'view')}" alt="View"><Tab ref="2" bg-color="#2F597D" mode="view"></Tab></div>


<MenuBody bg-color="#89BDEB" mode="file" v-bind:class="{'menuBodyTop': (menuBodyOpen && mode == 'file'), 'menuBodyHidden': (!menuBodyOpen)}"></MenuBody>
<MenuBody bg-color="#3087D3" mode="edit" v-bind:class="{'menuBodyTop': (menuBodyOpen && mode == 'edit'), 'menuBodyHidden': (!menuBodyOpen)}"></MenuBody>
<MenuBody bg-color="#2F597D" mode="view" v-bind:class="{'menuBodyTop': (menuBodyOpen && mode == 'view'), 'menuBodyHidden': (!menuBodyOpen)}"></MenuBody>

</div>
</template>

<script>
import Tab from "./tab.vue"
import MenuBody from "./MenuBody.vue"

export default {
components: {Tab,MenuBody},

  name: 'Menu',
  props: {
    mode: String,
    bgColor: String
  },


    computed: {
    },

    methods: {
        toggle : function(toMode) {
            if (toMode == this.mode){ //toggle menu if mode is same
                this.menuBodyOpen = !this.menuBodyOpen;
            } else { // go to new mode and open the menu
                //this.mode = toMode;
                this.menuBodyOpen = true;
                this.$root.$emit('on-mode-change', toMode); // let the App know the mode changed
            }
        },
    },

    watch: {
        menuBodyOpen: function () {
            this.$root.$emit('on-menubody-change', this.menuBodyOpen);
        }      
    },

  data: function () {
      return {
        menuBodyOpen : {type: Boolean, default: false},
        txtColor: "#000",
        Title: 'New Title',
      };
  },
/*
  created: function () {
//
  },
 */ 
}

</script>

<style>
#Menu{
position:fixed;
z-index:10;
}

.flex {
    display:flex;
}
.tabclick{
    padding:15px 0 15px 15px;
    z-index:11;
}
.tabActive{
    transform:scale(1.2);
    z-index:10;
}



.menuBodyHidden {
    visibility:hidden;
}

.menuBodyTop {
    z-index:10;
}
</style>