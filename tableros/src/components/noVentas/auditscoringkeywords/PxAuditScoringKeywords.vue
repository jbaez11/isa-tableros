<template>
  <div class="app">
    <v-app>
      <v-main>
        <h2 class="ml-3" style="color:#FF9B00">
          Puntaje <span style="color:#CACACA">por keywords</span>
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
        <!--Table score general-->
        <input class="" placeholder="Buscar..." type="text" v-model="search" />
        <v-simple-table class="mt-5">
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  NOMBRE
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(3)"
                    >GRABACIONES
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(1)"
                    >PUNTAJE PROMEDIO</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="scoresbykeywords in filteredAgents"
                :key="scoresbykeywords.name"
              >
                <td @click="mostrarDetalleCall(scoresbykeywords.name)">
                  {{ scoresbykeywords.name }}
                </td>
                <td style="text-align: center;">
                  {{ scoresbykeywords.results.recordings }}
                </td>
                <td style="text-align: center;">
                  {{ scoresbykeywords.results.totalScore.toFixed(1)  }} %
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--End Table score general-->
        <!--TABLE LLAMADAS-->
        <input
          class=""
          hidden
          placeholder="Buscar..."
          type="text"
          v-model="search2"
        />
        <v-simple-table class="mt-5" v-if="recordScoreByKeywordsMostrar != false">
          <template>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  NOMBRE GRABACIÓN
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrderCalls(1)"
                    >INTERACCION
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrderCalls(2)"
                    >GESTION DEL CLIENTE
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrderCalls(3)"
                    >PROCESOS Y DIRECCIONAMIENTO</span
                  >
                </th>

                <th style="text-align: center;" class="white--text ">
                  <img src="../../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrderCalls(7)"
                    >PUNTAJE</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="scoresbykeywords in filteredCalls"
                :key="scoresbykeywords.keyfile"
              >
                <td @click="mostrarDetalleCluster(scoresbykeywords.keyfile)">
                  {{ scoresbykeywords.keyfile }}
                </td>
                <td style="text-align: center;">
                  {{ scoresbykeywords.results["interacción"].toFixed(1)  }}
                  %
                </td>
                <td style="text-align: center;">
                  {{
                    scoresbykeywords.results["gestión del cliente"].toFixed(1) 
                  }}
                  %
                </td>
                <td style="text-align: center;">
                  {{
                    scoresbykeywords.results[
                      "procesos y direccionamiento"
                    ].toFixed(1) 
                  }}
                  %
                </td>

                <td style="text-align: center;">
                  {{ scoresbykeywords.results.totalScore.toFixed(1)  }} %
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--ENDTABLE LLAMADAS-->

        <!--Tablas cluster-->
        <v-simple-table class="mt-5" v-if="scoringKeywordsContentsMostrar != false">
          <template>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  MODULO
                </th>
                <th style="text-align: center;" class="white--text ">
                  <span class="underline cursor-pointer">CLUSTER </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <span class="underline cursor-pointer">PUNTAJE </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <span class="underline cursor-pointer">KEYWORDS</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="element in scoringKeywordsContents" :key="element.id">
                <td>
                  {{ element.module }}
                </td>
                <td style="">
                  {{ element.cluster }}
                </td>
                <td style="text-align: center;">
                  {{ element.score.toFixed(1)  }} %
                </td>
                <td style="">
                  {{ element.results }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--Tablas cluster-->
      </v-main>
    </v-app>
  </div>
</template>

<script>
let currentUrl = window.location.pathname;
let nameBDconn = currentUrl.split("/");
let url = `https://backend-tableros-exhausted-raven-fv.mybluemix.net/${nameBDconn[1]}/auditscoringkeywords`;
let urlClusterScore = `https://backend-tableros-exhausted-raven-fv.mybluemix.net/${nameBDconn[1]}/scoringkeywords`;
export default {
  name: "PxAuditScoringKeywords",
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      cantidadLlamadas: 0,
      scoresbykeywords: [],
      clusterScore: {},
      menu1: false,
      search: "",
      sortOrder: 1,
      ordenamiento1: Number,
      search2: "",
      sortOrderCalls: 1,
      ordenamiento1Calls: Number,
      detailOfAgent: [],
      scoringKeywordsContents: [],
      scoringKeywordsContentsMostrar:false,
      recordScoreByKeywords: [],
      recordScoreByKeywordsMostrar:false,
      agentSelected: "",
      keyfileSelected: "",
      bandera: false,
      banderaCluster: false
    };
  },
  created() {
    this.mostrar();
  },
  computed: {
    submitDate() {
      const date = new Date(this.date).toISOString().substr(0, 10);;

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

      return this.detailOfAgent
        .filter(agent => {
          return agent.name.match(this.search);
        })
        .sort((a, b) => {
          if (filtrarPor1 == 1) {
            if (
              parseFloat(a.results.totalScore) >
              parseFloat(b.results.totalScore)
            ) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == 2) {
            if (
              parseFloat(a.results.notAllowedScore) >
              parseFloat(b.results.notAllowedScore)
            ) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == 3) {
            if (
              parseFloat(a.results.recordings) >
              parseFloat(b.results.recordings)
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

      return this.recordScoreByKeywords
        .filter(agent => {
          return agent.keyfile.match(this.search2);
        })
        .sort((a, b) => {
          if (filtrarPor1 == 1) {
            if (
              parseFloat(a.results.interacción) >
              parseFloat(b.results.interacción)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == 2) {
            if (
              parseFloat(a.results["gestión del cliente"]) >
              parseFloat(b.results["gestión del cliente"])
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == 3) {
            if (
              parseFloat(a.results["procesos y direccionamiento"]) >
              parseFloat(b.results["procesos y direccionamiento"])
            ) {
              return this.sortOrderCalls;
            }
          }

          if (filtrarPor1 == 7) {
            if (
              parseFloat(a.results.totalScore) >
              parseFloat(b.results.totalScore)
            ) {
              return this.sortOrderCalls;
            }
          }

          this.ordenamiento1Calls = "";

          return altOrderCalls;
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
        this.recordScoreByKeywordsMostrar=true;
      } else {
        this.search = "";
        this.bandera = false;
        this.recordScoreByKeywordsMostrar=false;
        this.search2 = "";
        this.banderaCluster = false;
        this.scoringKeywordsContentsMostrar=false;
        this.agentSelected="";
        this.keyfileSelected="";
      }
      this.mostrar();
    },
    mostrarDetalleCluster(keyfile) {
      this.keyfileSelected = keyfile;
      console.log("keyfile selected", keyfile);
      if (this.banderaCluster == false) {
        this.search2 = keyfile;
        this.banderaCluster = true;
        this.scoringKeywordsContentsMostrar=true;
        
      } else {
        this.search2 = "";
        this.banderaCluster = false;
        this.scoringKeywordsContentsMostrar=false;
        this.keyfileSelected="";
      }
      this.mostrar();
    },
    async mostrar() {
      const response = await this.axios.get(
        url + `?eventDate=${this.date}T00:00:00.000Z`
      );

      this.scoresbykeywords = response.data.body;
      console.log("object", this.scoresbykeywords);

      this.mostrarCantidadDeLLamadas(
        this.scoresbykeywords[0].recordingsSummary
      );
      this.mostrarTableDetailOfAgents(this.scoresbykeywords[0].agentsSummary);
      this.mostrarTableCallDetailByAgent(
        this.scoresbykeywords[0].recordingsSummary,
        this.agentSelected
      );
      if (this.keyfileSelected.length > 0) {
        const responseClusterScore = await this.axios.get(
          urlClusterScore + `?keyfile=${this.keyfileSelected}`
        );
        console.log(
          "url Phrases",
          urlClusterScore + `?keyfile=${this.keyfileSelected}`
        );
        console.log("object", responseClusterScore.data.body);
        this.clusterScore = responseClusterScore.data.body;
        this.mostrarTableCluster(this.clusterScore, this.keyfileSelected);
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
      for(let key in data){
         data[key].results.totalScore = data[key].results.totalScore*100
        }
      this.detailOfAgent = data;
    },
    mostrarTableCallDetailByAgent(data, name) {
      for(let key in data){
            if (key == name) {
              for(let i=0;i<data[key].length;i++){
                data[key][i].results['interacción']=data[key][i].results['interacción']*100;
                data[key][i].results['gestión del cliente']=data[key][i].results['gestión del cliente']*100;
                data[key][i].results['procesos y direccionamiento']=data[key][i].results['procesos y direccionamiento']*100;
                
                data[key][i].results.totalScore=data[key][i].results.totalScore*100;
                
              }
          }
        }
      for (let key in data) {
        if (key == name) {
          this.recordScoreByKeywords = data[key];
        }
      }
    },
    mostrarTableCluster(data, keyfile) {
      //this.scoringKeywordsContents=data[0].contents;
      console.log(keyfile);
      let contents = data[0].contents;
      let scoringArray = [];
      let id = 0;
      for (let moduleKey in contents) {
        //console.log('modulekey',moduleKey);

        //let clusterArray = [];
        for (let clusterKey in contents[moduleKey]) {
          //console.log("cluster[key]",clusterKey);

          let kp = contents[moduleKey][clusterKey].results;
          let kpStrings = kp.join(", ");
          let clusterPackage = {
            id: id,
            module: moduleKey,
            cluster: clusterKey,
            score: contents[moduleKey][clusterKey].score*100,
            results: kpStrings
          };
          //clusterArray.push(clusterPackage);
          scoringArray.push(clusterPackage);
          id++;
        }
        //  let modulePackage = {

        //    module:moduleKey,
        //    clusters:clusterArray
        //  }
        //scoringArray.push(modulePackage);
        console.log(scoringArray);
        this.scoringKeywordsContents = scoringArray;
      }
    }
  }
};
</script>
