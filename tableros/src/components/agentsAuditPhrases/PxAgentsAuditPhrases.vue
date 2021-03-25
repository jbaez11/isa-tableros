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
                    hint="DD/MM/YYYY"
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
        <v-simple-table class="mt-5" v-show="recordsByCategory != false">
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
        <v-container v-show="phrasesResults != false" class="pt-10">
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
        <v-simple-table class="mt-5" v-show="phrasesResults != false">
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
      </v-main>
    </v-app>
  </div>
</template>
<script>
let currentUrl = window.location.pathname;
//console.log("currenturl", currentUrl);
let url = `https://backend-tableros-exhausted-raven-fv.mybluemix.net${currentUrl}`;
let urlPhrases = `https://backend-tableros-exhausted-raven-fv.mybluemix.net/igsSerfinanzaCO/phrases`;
export default {
  name: "PxAgentsAuditPhrases",
  data() {
    return {
      auditAgents: [],
      phrases: {},
      date: new Date().toISOString().substr(0, 10),
      cantidadLlamadas: 0,
      dateFormatted: new Date().toISOString().substr(0, 10),
      topByCategory: [],
      recordsByCategory: [],
      agentSelected: "",
      keyfileSelected: "",
      phrasesResults: [],
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
    submitDate() {
      const date = new Date(this.date);

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
          if (filtrarPor1 == "a.results.records") {
            if (parseInt(a.results.records) > parseInt(b.results.records)) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == "a.results.infaltable.positive") {
            if (
              parseInt(a.results["infaltables positivas"]) >
              parseInt(b.results["infaltables positivas"])
            ) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == "a.results.infaltable.negative") {
            if (
              parseInt(a.results["infaltables negativas"]) >
              parseInt(b.results["infaltables negativas"])
            ) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == "a.results.nopermitidas.positive") {
            if (
              parseInt(a.results["no permitidas positivas"]) >
              parseInt(b.results["no permitidas positivas"])
            ) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == "a.results.recomendacion.positive") {
            if (
              parseInt(a.results["recomendaciones positivas"]) >
              parseInt(b.results["recomendaciones positivas"])
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
              parseInt(a.results.infaltable.positive) >
              parseInt(b.results.infaltable.positive)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == "a.results.infaltable.negative") {
            if (
              parseInt(a.results.infaltable.negative) >
              parseInt(b.results.infaltable.negative)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == "a.results.nopermitidas.positive") {
            if (
              parseInt(a.results["no permitida"].positive) >
              parseInt(b.results["no permitida"].positive)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == "a.results.recomendacion.positive") {
            if (
              parseInt(a.results["recomendación"].positive) >
              parseInt(b.results["recomendación"].positive)
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
      } else {
        this.search = "";
        this.bandera = false;
      }
      this.mostrar();
    },
    mostrarConversacionSelected(name) {
      this.keyfileSelected = name;
      console.log("keyfile seleccionado", this.keyfileSelected);
      if (this.banderaConver == false) {
        this.search2 = name;
        this.banderaConver = true;
      } else {
        this.search2 = "";
        this.banderaConver = false;
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
      console.log("acacaca que viene", data[0].contents);
      let phrases = data[0].contents;
      let phrasesArray = [];
      let id = 0;
      for (let key in phrases) {
        for (let i = 0; i < phrases[key].results.length; i++) {
          console.log("mostrar", phrases[key].results[i]);
          let phrasePackage = {
            id: id,
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
          phrasePackage["confidence"] = phrases[key].results[i]["confidence"];
          console.log("package", phrasePackage);
          phrasesArray.push(phrasePackage);
        }
        if (phrases[key].results.length == 0) {
          let phrasePackage = {
            id: id,
            name: key,
            module: phrases[key].clasification.module,
            category: phrases[key].clasification.category
          };
          phrasePackage["speaker"] = "-";
          phrasePackage["from"] = "-";
          phrasePackage["to"] = "-";
          phrasePackage["confidence"] = "-";
          phrasesArray.push(phrasePackage);
        }
        id++;
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
