<template>
  <div class="app">
    <v-app>
      <v-main>
        <h2 class="ml-3" style="color:#FF9B00">
          AUDITORIA <span style="color:#CACACA">DE AGENTES </span>POR FRASES
        </h2>
        <!--calendar and numCall-->
        <v-container class="">
          <v-row>
            <v-col cols="6" sm="4">
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dates"
                    label="Date"
                    hint="YYYY/MM/DD"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="dates"
                  range
                  color="orange accent-3 lighten-1"
                ></v-date-picker>
              </v-menu>
              <p v-show="false">{{ dateRangeText }}</p>
            </v-col>
            <v-col
              style="justify-content: center; align-items: center;text-align: center;"
            >
              <h3 class="orange--text">
                TOTAL <span style="color:#CACACA">GRABACIONES</span>
              </h3>
              <span class="text-h2 orange--text">{{
                this.cantidadLlamadas
              }}</span>
            </v-col>
            <v-col
              style="justify-content: center; align-items: center;text-align: center;"
            >
              <h3 class="orange--text">
                TOTAL <span style="color:#CACACA">GRABACIONES</span> AFECTADAS
              </h3>
              <span class="text-h2 orange--text">{{
                this.cantidadLlamadasAfectadas
              }}</span>
            </v-col>
          </v-row>
        </v-container>

        <!--ENDcalendar and numCall-->

        <!--<input type="date" name="" id="" />-->

        <!--<span>Checked names: {{ checkedNames | json }}</span>-->

        <!--TABLE Mostrar nombre y cantidad-->

        <input
          class=""
          placeholder="Buscar..."
          type="text"
          v-model="search"
          v-if="pxinfo == false"
        />
        <v-simple-table class="mt-5" v-if="pxinfo == false">
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  NOMBRE
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder('a.results.records')"
                    >GRABACIONES</span
                  >
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img
                    src="../../assets/sort.png"
                    class="mr-2"
                    style="color:white"
                  />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder('a.results.infaltable.positive')"
                    >INFALTABLE
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder('a.results.infaltable.negative')"
                    >INFALTABLE NO HALLADA
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder('a.results.nopermitidas.positive')"
                    >NO PERMITIDA</span
                  >
                </th>
                <!-- <th class="white--text ">NO PERMITIDA NEGATIVE</th> -->
                <!-- <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder('a.results.recomendacion.positive')"
                    >RECOMENDACIÓN</span
                  >
                </th> -->
                <!-- <th class="white--text ">RECOMENDACION NEGATIVE</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="agentAudit in filteredAgents" :key="agentAudit.name">
                <td @click="mostrarDetalleCall(agentAudit.name)">
                  {{ agentAudit.name }}
                </td>
                <td style="text-align: center;">
                  {{ agentAudit.results.recordings }}
                </td>
                <td style="text-align: center;">
                  {{ agentAudit.results.positivesOfRequired }}
                </td>
                <td style="text-align: center;">
                  {{ agentAudit.results.negativesOfRequired }}
                </td>

                <td style="text-align: center;">
                  {{ agentAudit.results.positivesOfNotAllowed }}
                </td>
                <!-- <td style="text-align: center;">
                  {{ agentAudit.results["recomendaciones positivas"] }}
                </td> -->
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <!--ENDTABLE Mostrar nombre y cantidad-->
        <!--TABLE LLAMADAS-->
        <input
          class=""
          hidden
          placeholder="Buscar..."
          type="text"
          v-model="search2"
        />
        <v-simple-table
          class="mt-5"
          v-if="recordsByCategoryMostrar != false && pxinfo == false"
        >
          <template>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  NOMBRE GRABACIÓN
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="
                      changeSortOrderCalls('a.results.infaltable.positive')
                    "
                    >INFALTABLE
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="
                      changeSortOrderCalls('a.results.infaltable.negative')
                    "
                    >INFALTABLE NO HALLADA
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="
                      changeSortOrderCalls('a.results.nopermitidas.positive')
                    "
                    >NO PERMITIDA</span
                  >
                </th>
                <!-- <th class="white--text ">NO PERMITIDA NEGATIVE</th> -->
                <!-- <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="
                      changeSortOrderCalls('a.results.recomendacion.positive')
                    "
                    >RECOMENDACIÓN</span
                  >
                </th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="agentAudit in filteredCalls" :key="agentAudit.keyfile">
                <td @click="mostrarConversacionSelected(agentAudit.keyfile)">
                  {{ agentAudit.keyfile }}
                </td>
                <td>
                  {{ agentAudit.results.positivesOfRequired }}
                </td>
                <td>
                  {{ agentAudit.results.negativesOfRequired }}
                </td>
                <td>{{ agentAudit.results.positivesOfNotAllowed }}</td>
                <!-- <td>{{ agentAudit.results["recomendación"].positive || 0}}</td> -->

                <!-- <td>{{agentAudit.results["recomendación"].negative}}</td> -->
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--ENDTABLE LLAMADAS-->
        <!-- TABLE DATOS-->
        <v-container v-if="phrasesResultsMostrar != false" class="pt-10">
          <h3 style="color:#FF9B00">Clasificación</h3>
          <v-row>
            <v-col>
              <input
                type="radio"
                id="infaltable"
                value="infaltable"
                v-model="picked"
              />
              <label style="color:#FF9B00" for="infaltable"> Infaltable</label>
              <br />
            </v-col>
            <v-col>
              <input
                type="radio"
                id="No permitida"
                value="no permitida"
                v-model="picked"
              />
              <label style="color:red" for="No permitida"> No permitida</label>
              <br />
            </v-col>
            <v-col>
              <input
                type="radio"
                id="Recomendación"
                value="recomendación"
                v-model="picked"
              />
              <label for="Recomendación"> Recomendación</label>
              <br />
            </v-col>
          </v-row>
        </v-container>
        <v-simple-table
          class="mt-5"
          v-if="phrasesResultsMostrar != false && pxinfo == false"
        >
          <template>
            <thead>
              <tr style="background-color:#CACACA">
                <th class="white--text ">PHRASES</th>
                <th class="white--text ">CATEGORIA</th>
                <th class="white--text ">MODULO</th>
                <th class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span class="underline cursor-pointer"> DESDE</span>
                </th>
                <th class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span class="underline cursor-pointer">HASTA</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="element in filterRadio" :key="element.id">
                <td>
                  {{ element.name }}
                </td>

                <td style="text-transform: capitalize">
                  {{ element.category }}
                </td>
                <td style="text-transform: capitalize">{{ element.module }}</td>
                <td>{{ element.from }}</td>

                <td>{{ element.to }}</td>

                <!-- <td>{{agentAudit.keywords}}</td> -->
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!-- ENDTABLE DATOS-->
        <div v-if="pxinfo == true">
          <px-info></px-info>
        </div>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import PxInfo from "@/components/agentsAudit/PxInfo.vue";

let currentUrl = window.location.pathname;
let nameBDconn = currentUrl.split("/");
//console.log("currenturl", currentUrl);
let url = `${process.env.VUE_APP_URLBACKEND}${currentUrl}`;
let urlPhrases = `${process.env.VUE_APP_URLBACKEND}/${nameBDconn[1]}/phrases`;
export default {
  name: "PxAgentsAuditPhrases",
  components: {
    PxInfo
  },
  data() {
    return {
      auditAgents: [],
      pxinfo: true,
      phrases: {},
      dates: [new Date().toISOString().substr(0, 10)],
      //date: new Date().toISOString().substr(0, 10),
      cantidadLlamadas: 0,
      cantidadLlamadasAfectadas: 0,
      //dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      topByCategory: [],
      recordsByCategory: [],
      recordsByCategoryMostrar: false,
      agentSelected: "",
      keyfileSelected: "",
      phrasesResults: [],
      phrasesResultsMostrar: false,
      menu1: false,
      search: "",
      search2: "",
      search3: "",
      picked: "",
      sortOrder: 1,
      sortOrderCalls: 1,
      sortOrderKeywords: 1,
      ordenamiento1Keywords: Number,
      ordenamiento1: Number,
      ordenamiento1Calls: Number,
      bandera: false,
      banderaConver: false
    };
  },
  created() {
    this.mostrar();
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ") && this.mostrar();
    },
    filteredAgents: function() {
      const altOrder = this.sortOrder == 1 ? -1 : 1;
      const filtrarPor1 = this.ordenamiento1;

      return this.topByCategory
        .filter(agent => {
          return agent.name.match(this.search);
        })
        .sort((a, b) => {
          if (filtrarPor1 == "a.results.records") {
            if (
              parseInt(a.results.recordings) > parseInt(b.results.recordings)
            ) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == "a.results.infaltable.positive") {
            if (
              parseInt(a.results.positivesOfRequired) >
              parseInt(b.results.positivesOfRequired)
            ) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == "a.results.infaltable.negative") {
            if (
              parseInt(a.results.negativesOfRequired) >
              parseInt(b.results.negativesOfRequired)
            ) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == "a.results.nopermitidas.positive") {
            if (
              parseInt(a.results.positivesOfNotAllowed) >
              parseInt(b.results.positivesOfNotAllowed)
            ) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == "a.results.recomendacion.positive") {
            if (
              parseInt(a.results.positivesOfRecommendation) >
              parseInt(b.results.positivesOfRecommendation)
            ) {
              return this.sortOrder;
            }
          }

          this.ordenamiento1 = "";

          return altOrder;
        });
    },
    filteredCalls: function() {
      const altOrderCalls = this.sortOrderCalls == 1 ? -1 : 1;
      const filtrarPor1 = this.ordenamiento1Calls;

      return this.recordsByCategory
        .filter(agent => {
          return agent.keyfile.match(this.search2);
        })
        .sort((a, b) => {
          if (filtrarPor1 == "a.results.infaltable.positive") {
            if (
              parseInt(a.results.positivesOfRequired) >
              parseInt(b.results.positivesOfRequired)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == "a.results.infaltable.negative") {
            if (
              parseInt(a.results.negativesOfRequired) >
              parseInt(b.results.negativesOfRequired)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == "a.results.nopermitidas.positive") {
            if (
              parseInt(a.results.positivesOfNotAllowed) >
              parseInt(b.results.positivesOfNotAllowed)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == "a.results.recomendacion.positive") {
            if (
              parseInt(a.results.positivesOfRecommendation) >
              parseInt(b.results.positivesOfRecommendation)
            ) {
              return this.sortOrderCalls;
            }
          }

          this.ordenamiento1Calls = "";

          return altOrderCalls;
        });
    },

    filterRadio: function() {
      return this.phrasesResults.filter(keyword => {
        return keyword.category.match(this.picked);
      });
    }
  },
  watch: {},
  methods: {
    changeSortOrder(order1) {
      this.sortOrder = this.sortOrder == 1 ? -1 : 1;
      this.ordenamiento1 = order1;

      console.log("como se va a organizar", this.ordenamiento);
    },
    changeSortOrderCalls(order1) {
      this.sortOrderCalls = this.sortOrderCalls == 1 ? -1 : 1;
      this.ordenamiento1Calls = order1;
    },
    changeSortOrderKeywords(order1) {
      this.sortOrderKeywords = this.sortOrderKeywords == 1 ? -1 : 1;
      this.ordenamiento1Keywords = order1;
    },

    mostrarDetalleCall(name) {
      this.agentSelected = name;
      console.log("el agent seleccionado", this.agentSelected);

      if (this.bandera == false) {
        this.search = name;
        this.bandera = true;
        this.recordsByCategoryMostrar = true;
      } else {
        this.search = "";
        this.bandera = false;
        this.search2 = "";
        this.banderaConver = false;
        this.recordsByCategoryMostrar = false;
        this.phrasesResultsMostrar = false;
        this.agentSelected = "";
        this.keyfileSelected = "";
      }
      this.mostrar();
    },
    mostrarConversacionSelected(name) {
      this.keyfileSelected = name;
      console.log("keyfile seleccionado", this.keyfileSelected);
      if (this.banderaConver == false) {
        this.search2 = name;
        this.banderaConver = true;
        this.phrasesResultsMostrar = true;
      } else {
        this.search2 = "";
        this.banderaConver = false;
        this.phrasesResultsMostrar = false;
        this.keyfileSelected = "";
      }
      this.mostrar();
    },
    async mostrar() {
      // const response = await this.axios.get(
      //   url + `?eventDate=${this.dates}T00:00:00.000Z`
      // );

      let response;

      if (this.dates.length == 1) {
        response = await this.axios.get(
          url + `?eventDate=${this.dates}T00:00:00.000Z`
        );
        if (this.auditAgents[0].recordingsSummary == undefined) {
          this.pxinfo = true;
        } else {
          this.pxinfo = false;
        }
        //console.log("url + `?eventDate=${this.dates}T00:00:00.000Z`",url + `?eventDate=${this.dates}T00:00:00.000Z`)
      } else {
        this.pxinfo = false;
        response = await this.axios.get(
          url +
            `?eventDate=${this.dates[0]}T00:00:00.000Z&&eventDate=${this.dates[1]}T00:00:00.000Z`
        );
      }

      this.auditAgents = response.data.body;
      console.log("object", this.auditAgents);
      console.log("primera impresion agent", this.agentSelected);
      console.log("primera impresion keyfile", this.keyfileSelected);

      this.mostrarCantidadDeLLamadas(this.auditAgents);
      this.mostrarTableDetailOfAgents(this.auditAgents);
      this.mostrarTableCallDetailByAgent(this.auditAgents, this.agentSelected);
      if (this.keyfileSelected.length > 0) {
        const responsePhrases = await this.axios.get(
          urlPhrases + `?keyfile=${this.keyfileSelected}`
        );
        console.log(
          "url Phrases",
          urlPhrases + `?keyfile=${this.keyfileSelected}`
        );
        console.log("object", responsePhrases.data.body);
        this.phrases = responsePhrases.data.body;
        this.mostrarTableKeywords(this.phrases, this.keyfileSelected);
      }
    },
    mostrarCantidadDeLLamadas(data) {
      let suma = 0;
      for (let i = 0; i < data.length; i++) {
        for (let key in data[i].recordingsSummary) {
          suma += data[i].recordingsSummary[key].length;
        }
      }
      this.cantidadLlamadas = suma;
      if (this.cantidadLlamadas == 0) {
        this.pxinfo = true;
        console.log("entro");
      } else {
        this.pxinfo = false;
      }

      let suma2 = 0;

      for (let i = 0; i < data.length; i++) {
        suma2 += data[i].affectedRecordings;
      }
      this.cantidadLlamadasAfectadas = suma2;
    },
    mostrarTableDetailOfAgents(data) {
      let superAgentsSummary = {};

      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].agentsSummary.length; j++) {
          let agentPackage = data[i].agentsSummary[j];
          let agentName = agentPackage.name;

          if (
            !Object.prototype.hasOwnProperty.call(superAgentsSummary, agentName)
          ) {
            superAgentsSummary[agentName] = {
              results: agentPackage.results
            };
          } else {
            superAgentsSummary[agentName].results.recordings +=
              agentPackage.results.recordings;
            superAgentsSummary[agentName].results.positivesOfRequired +=
              agentPackage.results.positivesOfRequired;
            superAgentsSummary[agentName].results.negativesOfRequired +=
              agentPackage.results.negativesOfRequired;
            superAgentsSummary[agentName].results.positivesOfNotAllowed +=
              agentPackage.results.positivesOfNotAllowed;
            superAgentsSummary[agentName].results.negativesOfNotAllowed +=
              agentPackage.results.negativesOfNotAllowed;
            superAgentsSummary[agentName].results.positivesOfRecommendation +=
              agentPackage.results.positivesOfRecommendation;
            superAgentsSummary[agentName].results.negativesOfRecommendation +=
              agentPackage.results.negativesOfRecommendation;
          }
        }

        let superAgentsSummaryArray = [];

        for (let key in superAgentsSummary) {
          let agentPackage = {
            name: key,
            results: superAgentsSummary[key].results
          };
          superAgentsSummaryArray.push(agentPackage);
        }
        this.topByCategory = superAgentsSummaryArray;
      }
    },
    mostrarTableCallDetailByAgent(data, name) {
      this.recordsByCategory = [];
      for (let i = 0; i < data.length; i++) {
        for (let key in data[i].recordingsSummary) {
          if (key == name) {
            this.recordsByCategory = this.recordsByCategory.concat(
              data[i].recordingsSummary[key]
            );
          }
        }
      }
    },
    mostrarTableKeywords(data, keyfile) {
      //let keywords = {};
      //let listKeywords={};
      function secondsToTime(seconds) {
        return new Date(seconds * 1000).toISOString().substr(11, 11);
      }
      console.log("keyfile", keyfile);
      console.log("acacaca que viene", data[0].contents);
      let phrases = data[0].contents;
      let phrasesArray = [];
      let id = 0;
      for (let key in phrases) {
        for (let i = 0; i < phrases[key].results.length; i++) {
          console.log("mostrar", phrases[key].results[i]);
          id++;
          let phrasePackage = {
            id: id + key,
            name: key,
            module: phrases[key].clasification.module,
            category: phrases[key].clasification.category
          };
          phrases[key].results[i]["from"] = secondsToTime(
            phrases[key].results[i]["from"]
          );
          phrases[key].results[i]["to"] = secondsToTime(
            phrases[key].results[i]["to"]
          );
          phrasePackage["speaker"] = phrases[key].results[i]["speaker"];
          phrasePackage["from"] = phrases[key].results[i]["from"];
          phrasePackage["to"] = phrases[key].results[i]["to"];
          phrasePackage["ratio"] = phrases[key].results[i]["ratio"];
          console.log("package", phrasePackage);
          phrasesArray.push(phrasePackage);
        }
        if (phrases[key].results.length == 0) {
          let phrasePackage = {
            id: id + key,
            name: key,
            module: phrases[key].clasification.module,
            category: phrases[key].clasification.category
          };
          phrasePackage["speaker"] = "-";
          phrasePackage["from"] = "-";
          phrasePackage["to"] = "-";
          phrasePackage["ratio"] = "-";
          phrasesArray.push(phrasePackage);
        }
        //id++;
      }
      console.log("keywordsArray", phrasesArray);
      let phrasesFound = [];
      let phrasesNotFound = [];
      for (let i = 0; i < phrasesArray.length; i++) {
        if (phrasesArray[i].speaker != "-") {
          phrasesFound.push(phrasesArray[i]);
        } else {
          phrasesNotFound.push(phrasesArray[i]);
        }
      }
      phrasesArray = phrasesFound.concat(phrasesNotFound);
      console.log("keywordArray", phrasesArray);
      this.phrasesResults = phrasesArray;
    }
  }
};
</script>
