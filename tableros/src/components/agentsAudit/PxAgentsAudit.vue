import api from '@/api';
<template>
  <div class="app">
    <v-app>
      <v-main>
        <h2 class="text-center orange--text">AGENTS AUDIT</h2>
        <!--calendar and numCall-->
        <v-container class="">
          <v-row>
            <v-col
              style="justify-content: center; align-items: center;text-align: center;"
            >
              <h2 class="orange--text">
                Fecha <span style="color:gray;">a</span> auditar
              </h2>
              <v-date-picker
                color="orange accent-3 lighten-1"
                v-model="date"
              ></v-date-picker>
              <!-- <p>{{date}}</p>-->
              <p v-show="false">{{ submitDate }}</p>
            </v-col>
            <v-col
              style="justify-content: center; align-items: center;text-align: center;"
            >
              <h3 class="orange--text">
                Cantidad <span style="color:gray;">Grabaciones</span>
              </h3>
              <span class="text-h2 orange--text">{{
                this.cantidadLlamadas
              }}</span>
            </v-col>
          </v-row>
        </v-container>

        <!--ENDcalendar and numCall-->

        <!--<input type="date" name="" id="" />-->

        <!--<span>Checked names: {{ checkedNames | json }}</span>-->

        <!--TABLE Mostrar nombre y cantidad-->
        <v-simple-table class="mt-5" v-show="topByCategory != false">
          <template>
            <thead>
              <tr class="orange accent-3">
                <th class="white--text ">NOMBRE</th>
                <th class="white--text ">GRABACIONES</th>
                <th class="white--text ">INFALTABLE POSITIVE</th>
                <th class="white--text ">INFALTABLE NEGATIVE</th>
                <th class="white--text ">NO PERMITIDA POSITIVE</th>
                <th class="white--text ">NO PERMITIDA NEGATIVE</th>
                <th class="white--text ">RECOMENDACION POSITIVE</th>
                <th class="white--text ">RECOMENDACION NEGATIVE</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="agentAudit in topByCategory" :key="agentAudit.name">
                <td>{{ agentAudit.name }}</td>
                <td style="text-align: center;">
                  {{ agentAudit.results.records }}
                </td>
                <td style="text-align: center;">
                  {{ agentAudit.results["infaltables positivas"] }}
                </td>
                <td style="text-align: center;">
                  {{ agentAudit.results["infaltables negativas"] }}
                </td>
                <td style="text-align: center;">
                  {{ agentAudit.results["no permitidas positivas"] }}
                </td>
                <td style="text-align: center;">
                  {{ agentAudit.results["no permitidas negativas"] }}
                </td>
                <td style="text-align: center;">
                  {{ agentAudit.results["recomendaciones positivas"] }}
                </td>
                <td style="text-align: center;">
                  {{ agentAudit.results["recomendaciones negativas"] }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <!--ENDTABLE Mostrar nombre y cantidad-->
        <!--TABLE LLAMADAS-->
        <v-simple-table class="mt-5" v-show="topByCategory != false">
          <template>
            <thead>
              <tr class="orange accent-3">
                <th class="white--text ">GRABACIÓN</th>
                <th class="white--text ">INFALTABLE POSITIVE</th>
                <th class="white--text ">INFALTABLE NEGATIVE</th>
                <th class="white--text ">NO PERMITIDA POSITIVE</th>
                <th class="white--text ">RECOMENDACION POSITIVE</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="agentAudit in recordsByCategory"
                :key="agentAudit.name"
              >
                <td>{{ agentAudit.name }}</td>
                <td style="text-align: center;">
                  {{ agentAudit.results.infaltable.positive }}
                </td>
                <td style="text-align: center;">
                  {{ agentAudit.results.infaltable.negative }}
                </td>
                <td style="text-align: center;">
                  {{ agentAudit.results["no permitida"].positive }}
                </td>
                <!-- <td>{{agentAudit.results["no permitida"].negative}}</td> -->
                <td style="text-align: center;">
                  {{ agentAudit.results["recomendación"].positive }}
                </td>
                <!-- <td>{{agentAudit.results["recomendación"].negative}}</td> -->
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--ENDTABLE LLAMADAS-->
        <v-simple-table class="mt-5" v-show="topByCategory != false">
          <template>
            <thead>
              <tr class="orange accent-3">
                <th class="white--text ">KEYWORD</th>
                <th class="white--text ">CATEGORY</th>
                <th class="white--text ">MODULE</th>
                <th class="white--text ">FROM</th>
                <th class="white--text ">TO</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="element in keywordsResults" :key="element.id">
                <td>{{ element.name }}</td>

                <td>{{ element.results.category }}</td>
                <td>{{ element.results.module }}</td>
                <td>{{ element.results.from }}</td>

                <td>{{ element.results.to }}</td>

                <!-- <td>{{agentAudit.keywords}}</td> -->
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!-- TABLE DATOS-->

        <!-- ENDTABLE DATOS-->
      </v-main>
    </v-app>
  </div>
</template>

<script>
//import api from "@/apiAgentAudit";
let currentUrl = window.location.pathname;
console.log("currenturl", currentUrl);
let url = `http://localhost:3000${currentUrl}`; //igsSerfinanzaCO/basephrases/
console.log("url", url);
//let urlfecha = url+'?eventDate=2021-02-08T00:00:00.000Z';
//console.log('url fecha completa',urlfecha);

//let url = "http://localhost:3000/agents/";

export default {
  name: "PxAgentsAudit",
  data() {
    return {
      auditAgents: {},
      date: new Date().toISOString().substr(0, 10),
      cantidadLlamadas: 0,
      totalCategory: [],
      recordsByCategory: [],
      topByCategory: [],
      grabaciones: [],
      keywordsResults: []
    };
  },
  created() {
    this.mostrar();
  },
  methods: {
    async mostrar() {
      const response = await this.axios.get(
        url + `?eventDate=${this.date}T00:00:00.000Z`
      );
      //   console.log('toda la dta',response.data.body);
      this.auditAgents = response.data.body;
      this.cantidadLlamadas = this.auditAgents.length;

      let recordsByCategory = {};
      for (let i = 0; i < this.auditAgents.length; i++) {
        let nameAgent = this.auditAgents[i].agent.name;
        if (!(nameAgent in recordsByCategory)) {
          recordsByCategory[nameAgent] = {};
          recordsByCategory[nameAgent] = {};
        }
        let keyfile = this.auditAgents[i].keyfile;
        recordsByCategory[nameAgent][keyfile] = {};

        for (let keyword in this.auditAgents[i].keywords) {
          let category = this.auditAgents[i].keywords[keyword].clasification
            .category;
          if (!(category in recordsByCategory[nameAgent][keyfile])) {
            recordsByCategory[nameAgent][keyfile][category] = {};
          }
          let haveResults = false;
          if (this.auditAgents[i].keywords[keyword].results.length > 0) {
            haveResults = true;
          }

          if (haveResults) {
            if (
              !("positive" in recordsByCategory[nameAgent][keyfile][category])
            ) {
              recordsByCategory[nameAgent][keyfile][category]["positive"] = 1;
            } else {
              recordsByCategory[nameAgent][keyfile][category]["positive"] += 1;
            }
          } else {
            if (
              !("negative" in recordsByCategory[nameAgent][keyfile][category])
            ) {
              recordsByCategory[nameAgent][keyfile][category]["negative"] = 1;
            } else {
              recordsByCategory[nameAgent][keyfile][category]["negative"] += 1;
            }
          }
        }
      }
      let agentSelected = "LUZ STELLA  PINILLA BEJARANO";
      let recordsByCategoryArray = [];
      for (let keyfile in recordsByCategory[agentSelected]) {
        let infoByAgent = {
          name: keyfile,
          results: recordsByCategory[agentSelected][keyfile]
        };

        recordsByCategoryArray.push(infoByAgent);
      }
      this.recordsByCategory = recordsByCategoryArray;
      console.log("this.recordsByCategory", this.recordsByCategory);
      console.log("recordsByCategory", recordsByCategory);
      let topByCategory = {};

      for (let agent in recordsByCategory) {
        if (!(agent in topByCategory)) {
          topByCategory[agent] = {};
          topByCategory[agent]["records"] = 0;
          topByCategory[agent]["infaltables positivas"] = 0;
          topByCategory[agent]["infaltables negativas"] = 0;
          topByCategory[agent]["no permitidas positivas"] = 0;
          topByCategory[agent]["no permitidas negativas"] = 0;
          topByCategory[agent]["recomendaciones positivas"] = 0;
          topByCategory[agent]["recomendaciones negativas"] = 0;
        }
        for (let keyfile in recordsByCategory[agent]) {
          topByCategory[agent]["records"] += 1;
          console.log("key", keyfile);
          if ("positive" in recordsByCategory[agent][keyfile]["infaltable"]) {
            topByCategory[agent]["infaltables positivas"] +=
              recordsByCategory[agent][keyfile]["infaltable"]["positive"];
          }
          if ("negative" in recordsByCategory[agent][keyfile]["infaltable"]) {
            topByCategory[agent]["infaltables negativas"] +=
              recordsByCategory[agent][keyfile]["infaltable"]["negative"];
          }
          if ("positive" in recordsByCategory[agent][keyfile]["no permitida"]) {
            topByCategory[agent]["no permitidas positivas"] +=
              recordsByCategory[agent][keyfile]["no permitida"]["positive"];
          }
          if ("negative" in recordsByCategory[agent][keyfile]["no permitida"]) {
            topByCategory[agent]["no permitidas negativas"] +=
              recordsByCategory[agent][keyfile]["no permitida"]["negative"];
          }
          if (
            "positive" in recordsByCategory[agent][keyfile]["recomendación"]
          ) {
            topByCategory[agent]["recomendaciones positivas"] +=
              recordsByCategory[agent][keyfile]["recomendación"]["positive"];
          }
          if (
            "negative" in recordsByCategory[agent][keyfile]["recomendación"]
          ) {
            topByCategory[agent]["recomendaciones negativas"] +=
              recordsByCategory[agent][keyfile]["recomendación"]["negative"];
          }
        }
      }
      let topByCategoryArray = [];
      for (let agent in topByCategory) {
        let infoByAgent = {
          name: agent,
          results: topByCategory[agent]
        };

        topByCategoryArray.push(infoByAgent);
      }

      this.topByCategory = topByCategoryArray;
      console.log("topByCategory", this.topByCategory);

      let keyfileSelected = "100_52489757_20210209-082612_3208779096-all.mp3";
      let keywordsSelected;
      for (let i = 0; i < this.auditAgents.length; i++) {
        if (this.auditAgents[i].keyfile == keyfileSelected) {
          keywordsSelected = this.auditAgents[i].keywords;
        }
      }
      console.log("keywordsSelected = ", keywordsSelected);

      // Seconds to time (HH:MM:SS.ss)
      function secondsToTime(seconds) {
        return new Date(seconds * 1000).toISOString().substr(11, 11);
      }

      let keywordsSelectedArray = [];
      let id = 0;
      for (let keyword in keywordsSelected) {
        //if(keywordsSelected[keyword].results.length >0){
        for (let i = 0; i < keywordsSelected[keyword].results.length; i++) {
          if (keywordsSelected[keyword]["results"][i]["speaker"] == "agent") {
            let keywordResult = {
              name: keyword,
              results: keywordsSelected[keyword]["results"][i],
              id: id
            };
            keywordResult["results"]["from"] = secondsToTime(
              keywordResult["results"]["from"]
            );
            keywordResult["results"]["to"] = secondsToTime(
              keywordResult["results"]["to"]
            );

            id++;
            keywordResult["results"]["category"] =
              keywordsSelected[keyword]["clasification"]["category"];
            keywordResult["results"]["module"] =
              keywordsSelected[keyword]["clasification"]["module"];

            keywordsSelectedArray.push(keywordResult);
          }
        }
        //}
      }
      this.keywordsResults = keywordsSelectedArray;
      console.log("keywordsSelectedArray", keywordsSelectedArray);
    }
  },
  computed: {
    submitDate() {
      const date = new Date(this.date);

      console.log(date);
      this.mostrar();
      return date;
    }
  }
};
</script>
