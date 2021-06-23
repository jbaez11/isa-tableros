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
            <v-col cols="12" sm="6">
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
          </v-row>
        </v-container>
        <!--Table score general-->
        <input
          class=""
          placeholder="Buscar..."
          type="text"
          v-model="search"
          v-if="pxinfo == false && recordScoreByKeywordsMostrar == false"
        />
        <div v-if="pxinfo == false && recordScoreByKeywordsMostrar != false">
          <v-btn
            class="ma-2"
            color="orange darken-2"
            dark
            rounded
            @click="retroceder()"
          >
            <v-icon dark left> mdi-arrow-left </v-icon>Volver
          </v-btn>
        </div>
        <v-simple-table class="mt-5" v-if="pxinfo == false">
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
                  {{ scoresbykeywords.results.totalScore.toFixed(1) }} %
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
        <div v-if="pxinfo == false && recordScoreByKeywordsMostrar != false">
          <v-btn
            class="ma-2"
            color="orange darken-2"
            dark
            fab
            @click="retroceder2()"
          >
            <v-icon dark> mdi-arrow-left </v-icon>
          </v-btn>
        </div>
        <v-simple-table
          class="mt-5"
          v-if="recordScoreByKeywordsMostrar != false"
        >
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
                  {{ scoresbykeywords.results["interacción"].toFixed(1) }}
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
                  {{ scoresbykeywords.results.totalScore.toFixed(1) }} %
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--ENDTABLE LLAMADAS-->

        <!--Tablas cluster-->
        <div v-if="pxinfo == false && scoringKeywordsContentsMostrar != false">
          <v-btn
            class="ma-2"
            color="orange darken-2"
            dark
            fab
            @click="retroceder3()"
          >
            <v-icon dark> mdi-arrow-left </v-icon>
          </v-btn>
        </div>
        <v-simple-table
          class="mt-5"
          v-if="scoringKeywordsContentsMostrar != false"
        >
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
                  {{ element.score.toFixed(1) }} %
                </td>
                <td style="">
                  {{ element.results }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--Tablas cluster-->
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
let url = `${process.env.VUE_APP_URLBACKEND}/${nameBDconn[1]}/auditscoringkeywords`;
let urlClusterScore = `${process.env.VUE_APP_URLBACKEND}/${nameBDconn[1]}/scoringkeywords`;
export default {
  name: "PxAuditScoringKeywords",
  components: {
    PxInfo
  },
  data() {
    return {
      dates: [new Date().toISOString().substr(0, 10)],
      pxinfo: true,
      // date: new Date().toISOString().substr(0, 10),
      // dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
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
      scoringKeywordsContentsMostrar: false,
      recordScoreByKeywords: [],
      recordScoreByKeywordsMostrar: false,
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
    dateRangeText() {
      return this.dates.join(" ~ ") && this.mostrar();
    },
    filteredAgents: function() {
      const altOrder = this.sortOrder == 1 ? -1 : 1;
      const filtrarPor1 = this.ordenamiento1;

      return this.detailOfAgent
        .filter(agent => {
          return agent.name.toLowerCase().includes(this.search.toLowerCase());
          //return agent.name.match(this.search);
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
  watch: {},
  methods: {
    retroceder() {
      this.search = "";
      this.bandera = false;
      this.recordScoreByKeywordsMostrar = false;
      this.search2 = "";
      this.banderaCluster = false;
      this.scoringKeywordsContentsMostrar = false;
      this.agentSelected = "";
      this.keyfileSelected = "";
    },
    retroceder2() {
      this.search = "";
      this.bandera = false;
      this.recordScoreByKeywordsMostrar = false;
      this.search2 = "";
      this.banderaCluster = false;
      this.scoringKeywordsContentsMostrar = false;
      this.agentSelected = "";
      this.keyfileSelected = "";
    },
    retroceder3() {
      this.search2 = "";
      this.banderaCluster = false;
      this.scoringKeywordsContentsMostrar = false;
      this.keyfileSelected = "";
    },
    changeSortOrder(order1) {
      this.sortOrder = this.sortOrder == 1 ? -1 : 1;
      this.ordenamiento1 = order1;

      console.log("como se va a organizar", this.ordenamiento);
    },
    changeSortOrderCalls(order1) {
      this.sortOrderCalls = this.sortOrderCalls == 1 ? -1 : 1;
      this.ordenamiento1Calls = order1;
    },

    mostrarDetalleCall(name) {
      this.agentSelected = name;
      console.log("el agent seleccionado", this.agentSelected);

      if (this.bandera == false) {
        this.search = name;
        this.bandera = true;
        this.recordScoreByKeywordsMostrar = true;
      } else {
        this.search = "";
        this.bandera = false;
        this.recordScoreByKeywordsMostrar = false;
        this.search2 = "";
        this.banderaCluster = false;
        this.scoringKeywordsContentsMostrar = false;
        this.agentSelected = "";
        this.keyfileSelected = "";
      }
      this.mostrar();
    },
    mostrarDetalleCluster(keyfile) {
      this.keyfileSelected = keyfile;
      console.log("keyfile selected", keyfile);
      if (this.banderaCluster == false) {
        this.search2 = keyfile;
        this.banderaCluster = true;
        this.scoringKeywordsContentsMostrar = true;
      } else {
        this.search2 = "";
        this.banderaCluster = false;
        this.scoringKeywordsContentsMostrar = false;
        this.keyfileSelected = "";
      }
      this.mostrar();
    },
    async mostrar() {
      let response;

      if (this.dates.length == 1) {
        response = await this.axios.get(
          url + `?eventDate=${this.dates}T00:00:00.000Z`
        );
        if (this.scoresbykeywords[0].recordingsSummary == undefined) {
          this.pxinfo = true;
        } else {
          this.pxinfo = false;
        }
        //console.log("url + `?eventDate=${this.dates}T00:00:00.000Z`",url + `?eventDate=${this.dates}T00:00:00.000Z`)
      } else {
        response = await this.axios.get(
          url +
            `?eventDate=${this.dates[0]}T00:00:00.000Z&&eventDate=${this.dates[1]}T00:00:00.000Z`
        );
        //console.log("url + `?eventDate=${this.dates[0]}T00:00:00.000Z&&eventDate=${this.dates[1]}`",url + `?eventDate=${this.dates[0]}T00:00:00.000Z&&eventDate=${this.dates[1]}T00:00:00.000Z`)
      }

      this.scoresbykeywords = response.data.body;
      console.log("object", this.scoresbykeywords);

      this.mostrarCantidadDeLLamadas(this.scoresbykeywords);
      this.mostrarTableDetailOfAgents(this.scoresbykeywords);
      this.mostrarTableCallDetailByAgent(
        this.scoresbykeywords,
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
      for (let i = 0; i < data.length; i++) {
        for (let key in data[i].recordingsSummary) {
          suma += data[i].recordingsSummary[key].length;
        }
      }

      this.cantidadLlamadas = suma;
      if (this.cantidadLlamadas == 0) {
        this.pxinfo = true;
      } else {
        this.pxinfo = false;
      }
    },
    mostrarTableDetailOfAgents(data) {
      let sizeOfData = data.length;
      let superRecordingsSummary = {};
      for (let i = 0; i < sizeOfData; i++) {
        for (let key in data[i].recordingsSummary) {
          let agent = key;
          let recordinsPackage = data[i].recordingsSummary[agent];
          let realTotalScore = 0;
          let recordings = 0;
          for (let j = 0; j < recordinsPackage.length; j++) {
            realTotalScore += recordinsPackage[j].results.totalScore;
            recordings += 1;
          }

          console.log(
            "name ",
            agent,
            "score ",
            realTotalScore,
            " recordings ",
            recordings
          );
          if (!(agent in superRecordingsSummary)) {
            superRecordingsSummary[agent] = {
              results: {}
            };

            superRecordingsSummary[agent]["results"][
              "totalScore"
            ] = realTotalScore;
            superRecordingsSummary[agent]["results"]["recordings"] = recordings;
          } else {
            superRecordingsSummary[agent]["results"][
              "totalScore"
            ] += realTotalScore;
            superRecordingsSummary[agent]["results"][
              "recordings"
            ] += recordings;
          }
        }
      }
      for (let agent in superRecordingsSummary) {
        superRecordingsSummary[agent]["results"]["totalScore"] =
          (100 * superRecordingsSummary[agent]["results"]["totalScore"]) /
          superRecordingsSummary[agent]["results"]["recordings"];
      }
      console.log("ver super", superRecordingsSummary);

      let superRecordingsSummaryArray = [];

      for (let agent in superRecordingsSummary) {
        let agentPackage = {
          name: agent,
          results: superRecordingsSummary[agent].results
        };

        superRecordingsSummaryArray.push(agentPackage);
      }
      console.log("superAgentsSummaryArray", superRecordingsSummaryArray);

      this.detailOfAgent = superRecordingsSummaryArray;
    },
    mostrarTableCallDetailByAgent(data, name) {
      this.recordScoreByKeywords = [];
      console.log(name);

      console.log("length", data.length);
      for (let i = 0; i < data.length; i++) {
        for (let key in data[i].recordingsSummary) {
          console.log("keyyy", key);
          if (key == name) {
            console.log("key ento", data[i].recordingsSummary[key]);

            for (let j = 0; j < data[i].recordingsSummary[key].length; j++) {
              data[i].recordingsSummary[key][j].results["interacción"] =
                data[i].recordingsSummary[key][j].results["interacción"] * 100;
              data[i].recordingsSummary[key][j].results["gestión del cliente"] =
                data[i].recordingsSummary[key][j].results[
                  "gestión del cliente"
                ] * 100;
              data[i].recordingsSummary[key][j].results[
                "procesos y direccionamiento"
              ] =
                data[i].recordingsSummary[key][j].results[
                  "procesos y direccionamiento"
                ] * 100;
              data[i].recordingsSummary[key][j].results.totalScore =
                data[i].recordingsSummary[key][j].results.totalScore * 100;
            }

            this.recordScoreByKeywords = this.recordScoreByKeywords.concat(
              data[i].recordingsSummary[key]
            );
          }
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
        for (let clusterKey in contents[moduleKey]) {
          let kp = contents[moduleKey][clusterKey].results;
          let kpStrings = kp.join(", ");
          let clusterPackage = {
            id: id,
            module: moduleKey,
            cluster: clusterKey,
            score: contents[moduleKey][clusterKey].score * 100,
            results: kpStrings
          };

          scoringArray.push(clusterPackage);
          id++;
        }

        console.log(scoringArray);
        this.scoringKeywordsContents = scoringArray;
      }
    }
  }
};
</script>
