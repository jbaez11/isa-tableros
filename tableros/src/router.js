import Vue from "vue";
import Router from "vue-router";
import Error from "@/views/Error";
import Basekeywords from "@/views/basekeywords/Basekeywords";
import Agents from "@/views/agents/Agents";
import Basephrases from "@/views/basephrases/Basephrases";
import AgentsAudit from "@/views/agentsAudit/AgentsAudit";
import AgentsAuditPhrases from "@/views/agentsAuditPhrases/AgentsAuditPhrases";
import Consumption from "@/views/consumption/Consumption";
import ScoresByKeywords from "@/views/scoresbykeywords/ScoresByKeywords";

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
      path: "/:bd/basekeywords",
      name: "basekeywords",
      component: Basekeywords
    },
    {
      path: "/:bd/agents",
      name: "agents",
      component: Agents
    },
    {
      path: "/:bd/basephrases",
      name: "basephrases",
      component: Basephrases
    },
    {
      path: "/:bd/agentsaudit",
      name: "agentsaudit",
      component: AgentsAudit
    },
    {
      path: "/:bd/agentsauditphrases",
      name: "agentsauditphrases",
      component: AgentsAuditPhrases
    },
    {
      path: "/:bd/consumption",
      name: "consumption",
      component: Consumption
    },
    {
      path: "/:bd/scoresbykeywords",
      name: "scoresbykeywords",
      component: ScoresByKeywords
    }
  ]
});
