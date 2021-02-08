import Vue from "vue";
import Router from "vue-router";
import Error from "@/views/Error";
import Basekeywords from "@/views/basekeywords/Basekeywords";
import Agents from '@/views/agents/Agents';

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "*",
      name: "error",
      component: Error
    },
    {
      path: "/basekeywords",
      name: "basekeywords",
      component: Basekeywords
    },
    {
      path: "/agents",
      name: "agents",
      component: Agents
    }
  ]
});
