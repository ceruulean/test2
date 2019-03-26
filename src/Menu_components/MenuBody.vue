<template>
<div class="menuBody" :style="style"> 
    <ul v-for="link in ListLinks" v-bind:key="link">
        <li><a :href="link.url">{{ link.name }}</a></li>
    </ul>

    <timezoneSelect v-if="(mode == 'view')"/>
</div>
</template>

<script>
import timezoneSelect from '../components/timezone_select.vue'

export default {components:{timezoneSelect},
  name: 'MenuBody',
  props: {
      mode: String,
      bgColor: String,
  },

    computed : {
             style() {
          return "background-color:"+ this.bgColor +";"
            },
        ListLinks: function() {
            var myList = [];
            if (this.mode == "file") {
                myList[0] = "Open";
                myList[1] = "Save";
                myList[2] = "-";
                myList[3] = "Export";
                myList[3] = "Details";
            } else if (this.mode == "edit") {
                myList[0] = "Eraser";
                myList[1] = "Add Note";
                myList[2] = "Properties";
                myList[3] = "Clear All";
            } else if (this.mode == "view") {
                myList[0] = "Timezone";
                myList[1] = "Display Style";
                myList[2] = "Time Range";
                myList[3] = "Language";
                myList[4] = "Help";
            }
            return myList;
        },

        subList(int) {
            var myList = [];
            if (this.mode == "file") {
                myList[0] = "PDF";
                myList[1] = "Image (.png, .jpg)";
                myList[2] = "HTML";
                myList[3] = "Excel (.xcl)";
                myList[3] = "Meesy (.msy)";
            } else if (this.mode == "view") {

                if (int == 0) {
                    //TODO insert every singletimezone option here....
                } else if (int == 1) {
                myList[0] = "Military";
                myList[1] = "12 Hour";  
                } else if (int == 2) {
                    // ok... brinig up a totally new option
                } else if (int == 3) {
// i think i need a library for languages....
                } else {
                  //  what
                }
            }
            return myList;
        }
    },

    methods : {
        /*
        getJSON : function () {
            var request = new XMLHttpRequest();

            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {

                  LinkList = JSON.parse(request.responseText);
                  return Links;
            } else {
                // waitinig
            }

            request.open('GET', 'MenuLinks.json', true);
            request.send();

        }*/
    },

    data: function () {
        return {
            isTopLevel: Boolean,
            LinkList: Object,

            fileList: [{
                name: 'Open',
                method: function() {},         
            }],

        }
    }
}
</script>

<style scoped>
div{
    position:absolute;
    margin-top:80px;
    padding:10px 10px 10px 0;
    height:70vh;
    width:20em;
}

.menuBody{
padding:10px;
}

ul {list-style: none;

}
</style>