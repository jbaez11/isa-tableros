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
import AuditConversations from "@/views/auditConversations/AuditConversations";
import AuditScoringKeywordsNoVentas from "@/views/noVentas/auditscoringkeywords/AuditScoringKeywords";
import BasekeywordsNoVentas from "@/views/noVentas/basekeywords/Basekeywords";
import BasePhrasesNoVentas from "@/views/noVentas/basephrases/Basephrases";
import Stadisticsofkeywords from "@/views/stadisticsofkeywords/Stadisticsofkeywords";
import Auditkeywordstatistics from "@/views/auditkeywordstatistics/Auditkeywordstatistics";
import AuditkeywordstatisticsInterno from "@/views/auditkeywordstatisticsInterno/AuditkeywordstatisticsInterno";
import Tablerodirectivo from "@/views/tableroDirectivo/Tablerodirectivo";
import Basescore from "@/views/basescore/Basescore";
import AuditScoringKeywordsNoVentasAmc from "@/views/noVentas/auditscoringkeywordsamc/AuditScoringKeywords";

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
      path: "/:bd/baseagents",
      name: "baseagents",
      component: Agents
    },
    {
      path: "/:bd/basephrases",
      name: "basephrases",
      component: Basephrases
    },
    {
      path: "/:bd/auditkeywords",
      name: "auditkeywords",
      component: AgentsAudit
    },
    {
      path: "/:bd/auditphrases",
      name: "auditphrases",
      component: AgentsAuditPhrases
    },
    {
      path: "/:bd/consumptions",
      name: "consumptions",
      component: Consumption
    },
    {
      path: "/:bd/auditscoringkeywords",
      name: "auditscoringkeywords",
      component: ScoresByKeywords
    },
    {
      path: "/:bd/auditconversations",
      name: "auditconversations",
      component: AuditConversations
    },
    {
      path: "/:bd/auditscoringkeywordsnoventas",
      name: "auditscoringkeywordsnoventas",
      component: AuditScoringKeywordsNoVentas
    },
    {
      path: "/:bd/basekeywordsnoventas",
      name: "basekeywordsnoventas",
      component: BasekeywordsNoVentas
    },
    {
      path: "/:bd/basephrasesnoventas",
      name: "basephrasesnoventas",
      component: BasePhrasesNoVentas
    },
    {
      path: "/:bd/stadisticsofkeywords",
      name: "stadisticsofkeywords",
      component: Stadisticsofkeywords
    },
    {
      path: "/:bd/auditkeywordstatistics",
      name: "auditkeywordstatistics",
      component: Auditkeywordstatistics
    },
    {
      path: "/:bd/auditkeywordstatisticsinterno",
      name: "auditkeywordstatisticsinterno",
      component: AuditkeywordstatisticsInterno
    },
    {
      path: "/tablerodirectivotablerodirectivoprivate1230",
      name: "tablerodirectivotablerodirectivoprivate1230",
      component: Tablerodirectivo
    },
    {
      path: "/:bd/basescore",
      name: "basescore",
      component: Basescore
    },
    {
      path: "/:bd/auditscoringkeywordsnoventasamc",
      name: "auditscoringkeywordsnoventasamc",
      component: AuditScoringKeywordsNoVentasAmc
    }
  ]
});
