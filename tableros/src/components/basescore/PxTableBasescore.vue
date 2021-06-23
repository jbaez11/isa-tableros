<template>
  <div class="app">
    <v-app>
      <v-main>
        <v-card class="mx-auto mt-5" color="transparent" max-width="1280" elevation="0">
            <v-btn></v-btn>
        </v-card>
      </v-main>
    </v-app>
  </div>
</template>

<script>
require("dotenv").config();
//let currentUrl = window.location.pathname;
//let url = `${process.env.VUE_APP_URLBACKEND}${currentUrl}/`; //igsSerfinanzaCO/basephrases/

export default {
  name: "PxTableBasescore",
  data() {
    return {
      hola:'Hola'
    };
  },
  
  
};
</script>
