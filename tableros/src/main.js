import Vue from "vue";
//poder utilizar vuetify
import vuetify from "@/plugins/vuetify";
import App from "./App.vue";
//importar rutas
import "@/router";
import router from "@/router";
//poder utilizar axios
import axios from 'axios'
import VueAxios from 'vue-axios'
//poder utilizar graficas
import Chart from "chart.js";
import Chartick from "vue-chartkick";
//poder utilizar efectos de carga
import { VueSpinners } from "@saeris/vue-spinners";
//poder utilizar alertas
import VueSweetalert2 from "vue-sweetalert2";







Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);
Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart));
Vue.config.productionTip = false;

new Vue({
  router: router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
