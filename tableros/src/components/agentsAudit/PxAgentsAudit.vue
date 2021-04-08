import api from '@/api';
<template>
  <div class="app">
    <v-app>
      <v-main>
        <h2 class="ml-3" style="color:#FF9B00">
          AUDITORIA <span style="color:#CACACA">KEYWORDS</span>
        </h2>
        <!--calendar and numCall-->
        <v-container class="">
          <v-row>
            <v-col lg="2" cols="5" sm="5" style="">
              <h3 style="color:#FF9B00">
                FECHA
                <!-- Date <span style="color:gray;">of</span> records -->
              </h3>
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                color="orange accent-3 lighten-1"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateFormatted"
                    color="orange accent-3 lighten-1"
                    hint="MM/DD/YYYY"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  color="orange accent-3 lighten-1"
                  v-model="date"
                  no-title
                  @input="menu1 = false"
                ></v-date-picker>
              </v-menu>
              <!-- <v-date-picker
                color="orange accent-3 lighten-1"
                v-model="date"
              ></v-date-picker> -->
              <!-- <p>{{date}}</p>-->
              <p v-show="false">{{ submitDate }}</p>
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
          </v-row>
        </v-container>

        <!--ENDcalendar and numCall-->

        <!--<input type="date" name="" id="" />-->

        <!--<span>Checked names: {{ checkedNames | json }}</span>-->

        <!--TABLE Mostrar nombre y cantidad-->

        <input class="" placeholder="Buscar..." type="text" v-model="search" />
        <v-simple-table class="mt-5">
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
                    @click="changeSortOrder(1)"
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
                    @click="changeSortOrder(2)"
                    >INFALTABLE
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(3)"
                    >INFALTABLE NO HALLADA
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(4)"
                    >NO PERMITIDA</span
                  >
                </th>
                <!-- <th class="white--text ">NO PERMITIDA NEGATIVE</th> -->
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(5)"
                    >RECOMENDACIÓN</span
                  >
                </th>
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
                <td style="text-align: center;">
                  {{ agentAudit.results.positivesOfRecommendation }}
                </td>
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
        <v-simple-table class="mt-5" v-if="recordsByCategoryMostrar != false">
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
                    @click="changeSortOrderCalls(1)"
                    >INFALTABLE
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrderCalls(2)"
                    >INFALTABLE NO HALLADA
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrderCalls(4)"
                    >NO PERMITIDA</span
                  >
                </th>
                <!-- <th class="white--text ">NO PERMITIDA NEGATIVE</th> -->
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrderCalls(3)"
                    >RECOMENDACIÓN</span
                  >
                </th>
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
                <td>{{ agentAudit.results.positivesOfRecommendation }}</td>

                <!-- <td>{{agentAudit.results["recomendación"].negative}}</td> -->
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--ENDTABLE LLAMADAS-->
        <!-- TABLE DATOS-->
        <v-container v-if="keywordsResultsMostrar != false" class="pt-10">
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
        <v-simple-table class="mt-5" v-if="keywordsResultsMostrar != false">
          <template>
            <thead>
              <tr style="background-color:#CACACA">
                <th class="white--text ">KEYWORD</th>
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
      </v-main>
    </v-app>
  </div>
</template>

<script>
//import api from "@/apiAgentAudit";

let currentUrl = window.location.pathname;
let nameBDconn = currentUrl.split("/");
//console.log("currenturl", currentUrl);
let url = `https://backend-tableros-exhausted-raven-fv.mybluemix.net${currentUrl}`; //igsSerfinanzaCO/basephrases/
let urlKeywords = `https://backend-tableros-exhausted-raven-fv.mybluemix.net/${nameBDconn[1]}/keywords`;
console.log(urlKeywords);

export default {
  name: "PxAgentsAudit",
  data() {
    return {
      auditAgents: [],
      keywords: {},
      date: new Date().toISOString().substr(0, 10),
      cantidadLlamadas: 0,
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      topByCategory: [],
      recordsByCategory: [],
      recordsByCategoryMostrar:false,
      agentSelected: "",
      keyfileSelected: "",
      keywordsResults: [],
      keywordsResultsMostrar:false,
      menu1: false,
      search: "",
      search2: "",
      search3: "",
      picked: "",
      sortOrder: 1,
      sortOrderCalls: 1,
      sortOrderKeywords: 1,
      ordenamiento1Keywords: Number,
      ordenamiento1: 0,
      ordenamiento1Calls: Number,
      bandera: false,
      banderaConver: false
    };
  },
  created() {
    this.mostrar();
    this.traerKeywords();
  },
  computed: {
    submitDate() {
      const date = new Date(this.date).toISOString().substr(0, 10);

      console.log(date);
      this.mostrar();
      return date;
    },
    computedDateFormatted() {
      return this.formatDate(this.date);
    },

    filteredAgents: function() {
      const altOrder = this.sortOrder == 1 ? -1 : 1;
      const filtrarPor1 = this.ordenamiento1;

      return this.topByCategory
        .filter(agent => {
          return agent.name.match(this.search);
        })
        .sort((a, b) => {
          if (filtrarPor1 == 1) {
            if (
              parseInt(a.results.recordings) > parseInt(b.results.recordings)
            ) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == 2) {
            if (
              parseInt(a.results.positivesOfRequired) >
              parseInt(b.results.positivesOfRequired)
            ) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == 3) {
            if (
              parseInt(a.results.negativesOfRequired) >
              parseInt(b.results.negativesOfRequired)
            ) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == 4) {
            if (
              parseInt(a.results.positivesOfNotAllowed) >
              parseInt(b.results.positivesOfNotAllowed)
            ) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == 5) {
            if (
              parseInt(a.results.positivesOfRecommendation) >
              parseInt(b.results.positivesOfRecommendation)
            ) {
              return this.sortOrder;
            }
          }

          this.ordenamiento1 = 0;

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
          if (filtrarPor1 == 1) {
            if (
              parseInt(a.results.positivesOfRequired) >
              parseInt(b.results.positivesOfRequired)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == 2) {
            if (
              parseInt(a.results.negativesOfRequired) >
              parseInt(b.results.negativesOfRequired)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == 4) {
            if (
              parseInt(a.results.positivesOfNotAllowed) >
              parseInt(b.results.positivesOfNotAllowed)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == 3) {
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
      return this.keywordsResults.filter(keyword => {
        return keyword.category.match(this.picked);
      });
    }
  },
  watch: {
    date(val) {
      console.log(val);
      this.dateFormatted = this.formatDate(this.date);
    }
  },
  methods: {
    changeSortOrder(order1) {
      this.sortOrder = this.sortOrder == 1 ? -1 : 1;
      this.ordenamiento1 = order1;

      console.log("como se va a organizar", this.ordenamiento1);
    },
    changeSortOrderCalls(order1) {
      this.sortOrderCalls = this.sortOrderCalls == 1 ? -1 : 1;
      this.ordenamiento1Calls = order1;
    },
    changeSortOrderKeywords(order1) {
      this.sortOrderKeywords = this.sortOrderKeywords == 1 ? -1 : 1;
      this.ordenamiento1Keywords = order1;
    },

    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },

    mostrarDetalleCall(name) {
      this.agentSelected = name;
      console.log("el agent seleccionado", this.agentSelected);

      if (this.bandera == false) {
        this.search = name;
        this.bandera = true;
        this.recordsByCategoryMostrar=true;
      } else {
        this.search = "";
        this.bandera = false;
        this.search2 = "";
        this.banderaConver = false;
        this.recordsByCategoryMostrar=false;
        this.keywordsResultsMostrar=false;
        this.agentSelected="";
        this.keyfileSelected="";
      }
      this.mostrar();
    },
    mostrarConversacionSelected(name) {
      this.keyfileSelected = name;
      console.log("keyfile seleccionado", this.keyfileSelected);
      if (this.banderaConver == false) {
        this.search2 = name;
        this.banderaConver = true;
        this.keywordsResultsMostrar=true;
      } else {
        this.search2 = "";
        this.banderaConver = false;
        this.keywordsResultsMostrar=false;
        this.keyfileSelected="";

      }
      this.mostrar();
    },
    async mostrar() {
      const response = await this.axios.get(
        url + `?eventDate=${this.date}T00:00:00.000Z`
      );

      this.auditAgents = response.data.body;
      console.log("object", this.auditAgents[0].recordingsSummary);
      console.log("primera impresion agent", this.agentSelected);
      console.log("primera impresion keyfile", this.keyfileSelected);

      this.mostrarCantidadDeLLamadas(this.auditAgents[0].recordingsSummary);
      this.mostrarTableDetailOfAgents(this.auditAgents);
      this.mostrarTableCallDetailByAgent(
        this.auditAgents[0].recordingsSummary,
        this.agentSelected
      );
      if (this.keyfileSelected.length > 0) {
        const responseKeyword = await this.axios.get(
          urlKeywords + `?keyfile=${this.keyfileSelected}`
        );
        console.log(
          "url keywords",
          urlKeywords + `?keyfile=${this.keyfileSelected}`
        );
        console.log("object", responseKeyword.data.body);
        this.keywords = responseKeyword.data.body;
        this.mostrarTableKeywords(this.keywords, this.keyfileSelected);
      }
    },
    mostrarCantidadDeLLamadas(data) {
      let suma = 0;
      for (let key in data) {
        suma += data[key].length;
      }
      this.cantidadLlamadas = suma;
    },
    mostrarTableDetailOfAgents(data) {
      this.topByCategory = data[0].agentsSummary;
    },
    mostrarTableCallDetailByAgent(data, name) {
      for (let key in data) {
        if (key == name) {
          this.recordsByCategory = data[key];
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
      let keywords = data[0].contents;
      let keywordsArray = [];
      let id = 0;
      for (let key in keywords) {
        for (let i = 0; i < keywords[key].results.length; i++) {
          console.log("mostrar", keywords[key].results[i]);
          id++;
          let keywordPackage = {
            id: id + key,
            name: key,
            module: keywords[key].clasification.module,
            category: keywords[key].clasification.category
          };
          keywords[key].results[i]["from"] = secondsToTime(
            keywords[key].results[i]["from"]
          );
          keywords[key].results[i]["to"] = secondsToTime(
            keywords[key].results[i]["to"]
          );
          keywordPackage["speaker"] = keywords[key].results[i]["speaker"];
          keywordPackage["from"] = keywords[key].results[i]["from"];
          keywordPackage["to"] = keywords[key].results[i]["to"];
          keywordPackage["confidence"] = keywords[key].results[i]["confidence"];
          console.log("package", keywordPackage);
          keywordsArray.push(keywordPackage);
        }
        if (keywords[key].results.length == 0) {
          let keywordPackage = {
            id: id + key,
            name: key,
            module: keywords[key].clasification.module,
            category: keywords[key].clasification.category
          };
          keywordPackage["speaker"] = "-";
          keywordPackage["from"] = "-";
          keywordPackage["to"] = "-";
          keywordPackage["confidence"] = "-";
          console.log("keywordsPackage", keywordPackage);
          keywordsArray.push(keywordPackage);
        }
        //id++;
      }
      console.log("keywordsArray", keywordsArray);
      let keywordsFound = [];
      let keywordsNotFound = [];
      for (let i = 0; i < keywordsArray.length; i++) {
        if (keywordsArray[i].speaker != "-") {
          keywordsFound.push(keywordsArray[i]);
        } else {
          keywordsNotFound.push(keywordsArray[i]);
        }
      }
      keywordsArray = keywordsFound.concat(keywordsNotFound);
      console.log("keywordArray", keywordsArray);
      this.keywordsResults = keywordsArray;
    }
  }
};
</script>
