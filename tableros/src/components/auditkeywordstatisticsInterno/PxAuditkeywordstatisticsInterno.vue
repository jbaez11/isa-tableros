<template>
  <div class="app">
    <v-app>
      <v-main>
        <h2 class="ml-3" style="color:#FF9B00">
          ESTADISTICAS POR <span style="color:#CACACA">KEYWORDS</span>
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
          </v-row>
        </v-container>

        <!--Botonera-->

        <v-card flat class="py-12" v-if="pxinfo == false">
          <v-card-text>
            <v-row align="center" justify="center">
              <v-col cols="12">
                <p class="text-center">
                  Seleccionar
                </p>
              </v-col>
              <v-btn-toggle v-model="toggle_exclusive" mandatory>
                <v-btn @click="resetTable('infaltable')">
                  Infaltable
                </v-btn>
                <v-btn @click="resetTable('negativeInfaltable')">
                  Infaltable no hallada
                </v-btn>
                <v-btn @click="resetTable('noPermitida')">
                  No Permitida
                </v-btn>
                <v-btn @click="resetTable('recomendacion')">
                  Recomendación
                </v-btn>
              </v-btn-toggle>
            </v-row>
          </v-card-text>
        </v-card>

        <!--End botonera-->

        <v-simple-table
          class="mt-5"
          v-if="select == 'infaltable' && pxinfo == false"
        >
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  KEYWORD
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(2)"
                    >GRABACIONES
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(1)"
                    >PORCENTAJE</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="stadisticsofkeyword in filteredStadistics"
                :key="stadisticsofkeyword.keyword"
              >
                <td
                  @click="
                    mostrarKeywordSelected(
                      stadisticsofkeyword.keyword,
                      'required'
                    )
                  "
                >
                  {{ stadisticsofkeyword.keyword }}
                </td>
                <td style="text-align: center;">
                  {{ stadisticsofkeyword.found }}
                </td>

                <td style="text-align: center;">
                  {{ stadisticsofkeyword.porcentaje.toFixed(1) }} %
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--End table infaltable-->
        <!--Table mostrar nombre agent-->
        <v-simple-table
          class="mt-5"
          v-if="
            select == 'infaltable' && pxinfo == false && clicKeyword == true
          "
        >
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  AGENTE
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(2)"
                    >GRABACIONES
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(1)"
                    >PORCENTAJE</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="agentsInfaltables in filteredInfaltablesKeywords"
                :key="agentsInfaltables.name"
              >
                <td @click="mostrarAgentSelected(agentsInfaltables.name)">
                  {{ agentsInfaltables.name }}
                </td>
                <td style="text-align: center;">
                  {{ agentsInfaltables.found }}
                </td>

                <td style="text-align: center;">
                  {{ agentsInfaltables.porcentaje.toFixed(5) }} %
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--Table mostrar llamada agent-->
        <v-simple-table
          class="mt-5"
          v-if="
            select == 'infaltable' && pxinfo == false && clickAgente == true
          "
        >
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  GRABACIÓN
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="infaltableRecording in filteredInfaltablesGrabacion"
                :key="infaltableRecording.recording"
              >
                <td
                  @click="mostrarKeyfileSelected(infaltableRecording.recording)"
                >
                  {{ infaltableRecording.recording }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <!--table infaltable no hallada -->
        <v-simple-table
          class="mt-5"
          v-if="select == 'negativeInfaltable' && pxinfo == false"
        >
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  KEYWORD
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(2)"
                    >GRABACIONES
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(1)"
                    >PORCENTAJE</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="stadisticsofkeyword in filteredStadisticsNegativeRequired"
                :key="stadisticsofkeyword.keyword"
              >
                <td
                  @click="
                    mostrarKeywordSelected(
                      stadisticsofkeyword.keyword,
                      'negativeRequired'
                    )
                  "
                >
                  {{ stadisticsofkeyword.keyword }}
                </td>
                <td style="text-align: center;">
                  {{ stadisticsofkeyword.found }}
                </td>

                <td style="text-align: center;">
                  {{ stadisticsofkeyword.porcentaje.toFixed(1) }} %
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <!--no halladaz-->
        <!--Table mostrar nombre agent-->
        <v-simple-table
          class="mt-5"
          v-if="
            select == 'negativeInfaltable' &&
              pxinfo == false &&
              clicKeyword == true
          "
        >
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  AGENTE
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(2)"
                    >GRABACIONES
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(1)"
                    >PORCENTAJE</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="agentsInfaltables in filteredInfaltablesKeywords"
                :key="agentsInfaltables.name"
              >
                <td @click="mostrarAgentSelected(agentsInfaltables.name)">
                  {{ agentsInfaltables.name }}
                </td>
                <td style="text-align: center;">
                  {{ agentsInfaltables.found }}
                </td>

                <td style="text-align: center;">
                  {{ agentsInfaltables.porcentaje.toFixed(5) }} %
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--Table mostrar llamada agent-->
        <v-simple-table
          class="mt-5"
          v-if="
            select == 'negativeInfaltable' &&
              pxinfo == false &&
              clickAgente == true
          "
        >
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  GRABACIÓN
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="infaltableRecording in filteredInfaltablesGrabacion"
                :key="infaltableRecording.recording"
              >
                <td
                  @click="mostrarKeyfileSelected(infaltableRecording.recording)"
                >
                  {{ infaltableRecording.recording }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!-- final todo infaltables no halladas -->

        <!--Table no permitidas-->
        <v-simple-table class="mt-5" v-if="select == 'noPermitida'">
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  KEYWORD
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
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(2)"
                    >PORCENTAJE
                  </span>
                </th>
                <!-- <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                  
                    >KEYWORD EN EL TOTAL DE HALLAZGOS</span
                  >
                </th> -->
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="stadisticsofkeyword in filteredStadisticsNo"
                :key="stadisticsofkeyword.keyword"
              >
                <td
                  @click="
                    mostrarKeywordSelected(
                      stadisticsofkeyword.keyword,
                      'notAllowed'
                    )
                  "
                >
                  {{ stadisticsofkeyword.keyword }}
                </td>
                <td style="text-align: center;">
                  {{ stadisticsofkeyword.found }}
                </td>
                <td style="text-align: center;">
                  {{ stadisticsofkeyword.porcentaje.toFixed(1) }} %
                </td>
                <!-- <td style="text-align: center;">
                  {{stadisticsofkeyword.porcentage.toFixed(1)}} %
                </td> -->
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--End table no permitidas-->

        <!--Table mostrar nombre agent-->
        <v-simple-table
          class="mt-5"
          v-if="
            select == 'noPermitida' && pxinfo == false && clicKeyword == true
          "
        >
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  AGENTE
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(2)"
                    >GRABACIONES
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(1)"
                    >PORCENTAJE</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="agentsInfaltables in filteredInfaltablesKeywords"
                :key="agentsInfaltables.name"
              >
                <td @click="mostrarAgentSelected(agentsInfaltables.name)">
                  {{ agentsInfaltables.name }}
                </td>
                <td style="text-align: center;">
                  {{ agentsInfaltables.found }}
                </td>

                <td style="text-align: center;">
                  {{ agentsInfaltables.porcentaje.toFixed(5) }} %
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--Table mostrar llamada agent-->
        <v-simple-table
          class="mt-5"
          v-if="
            select == 'noPermitida' && pxinfo == false && clickAgente == true
          "
        >
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  GRABACIÓN
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="infaltableRecording in filteredInfaltablesGrabacion"
                :key="infaltableRecording.recording"
              >
                <td
                  @click="mostrarKeyfileSelected(infaltableRecording.recording)"
                >
                  {{ infaltableRecording.recording }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--Final table no permitidas-->
        <!--Table recomendacion-->
        <v-simple-table class="mt-5" v-if="select == 'recomendacion'">
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  KEYWORD
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
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(2)"
                    >PORCENTAJE
                  </span>
                </th>
                <!-- <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                  
                    >KEYWORD EN EL TOTAL DE HALLAZGOS</span
                  >
                </th> -->
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="stadisticsofkeyword in filteredStadisticsRe"
                :key="stadisticsofkeyword.keyword"
              >
                <td
                  @click="
                    mostrarKeywordSelected(
                      stadisticsofkeyword.keyword,
                      'recommendation'
                    )
                  "
                >
                  {{ stadisticsofkeyword.keyword }}
                </td>
                <td style="text-align: center;">
                  {{ stadisticsofkeyword.found }}
                </td>
                <td style="text-align: center;">
                  {{ stadisticsofkeyword.porcentaje.toFixed(1) }} %
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <!--Table mostrar nombre agent-->
        <v-simple-table
          class="mt-5"
          v-if="
            select == 'recomendacion' && pxinfo == false && clicKeyword == true
          "
        >
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  AGENTE
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(2)"
                    >GRABACIONES
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(1)"
                    >PORCENTAJE</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="agentsInfaltables in filteredInfaltablesKeywords"
                :key="agentsInfaltables.name"
              >
                <td @click="mostrarAgentSelected(agentsInfaltables.name)">
                  {{ agentsInfaltables.name }}
                </td>
                <td style="text-align: center;">
                  {{ agentsInfaltables.found }}
                </td>

                <td style="text-align: center;">
                  {{ agentsInfaltables.porcentaje.toFixed(5) }} %
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--Table mostrar llamada agent-->
        <v-simple-table
          class="mt-5"
          v-if="
            select == 'recomendacion' && pxinfo == false && clickAgente == true
          "
        >
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  GRABACIÓN
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="infaltableRecording in filteredInfaltablesGrabacion"
                :key="infaltableRecording.recording"
              >
                <td
                  @click="mostrarKeyfileSelected(infaltableRecording.recording)"
                >
                  {{ infaltableRecording.recording }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--End table recomendacion-->
        <!--mostrar conversacion-->
        <!--Tablas cluster-->
        <v-simple-table
          class="mt-5"
          v-if="pxinfo == false && clicKeyfile == true"
        >
          <template>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  INTERLOCUTOR
                </th>
                <th style="text-align: center;" class="white--text ">
                  <span class="underline cursor-pointer">TRANSCRIPCIÓN </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <span class="underline cursor-pointer">DESDE </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <span class="underline cursor-pointer">HASTA</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="element in conversationsComplete" :key="element">
                <td
                  style="text-transform: capitalize"
                  :class="
                    element.speaker == 'agent' ? 'orange--text' : 'black--text'
                  "
                >
                  {{ element.speaker + "e" }}
                </td>
                <td
                  style=""
                  :class="
                    element.speaker == 'agent' ? 'orange--text' : 'black--text'
                  "
                >
                  {{ element.transcript }}
                </td>
                <td
                  :class="
                    element.speaker == 'agent' ? 'orange--text' : 'black--text'
                  "
                >
                  {{ element.from }}
                </td>
                <td
                  :class="
                    element.speaker == 'agent' ? 'orange--text' : 'black--text'
                  "
                >
                  {{ element.to }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--End mostrar conversacion-->
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
let url = `${process.env.VUE_APP_URLBACKEND}/${nameBDconn[1]}/auditkeywordstatistics`;
//console.log("aca estoy",url)
let urlKeywords = `${process.env.VUE_APP_URLBACKEND}/${nameBDconn[1]}/conversations`;

export default {
  name: "PxAuditkeywordstatisticsInterno",
  components: {
    PxInfo
  },
  data() {
    return {
      dates: [new Date().toISOString().substr(0, 10)],
      cantidadLlamadas: 0,
      totalHallazgos: 0,
      search: "",
      search2: "",
      search3: "",
      bandera: false,
      bandera2: false,
      bandera3: false,
      clicKeyword: false,
      clickAgente: false,
      clicKeyfile: false,
      pxinfo: true,
      keywords: {},
      menu1: false,
      stadisticsofkeywords: [],
      infaltables: [],
      negativeRequireds: [],
      toggle_exclusive: undefined,
      noPermitidas: [],
      recomendacion: [],
      sortOrder: 1,
      picked: "",
      ordenamiento1: 0,
      select: "infaltable",
      keywordSelected: "",
      categorySelected: "",
      agentsInfaltable: [],
      agentSelected: "",
      infaltableRecordings: [],
      keyfileSelected: "",
      keywordsResults: [],
      conversationsComplete: [],
      keywordGlobal: ""
    };
  },
  created() {
    this.mostrar();
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ") && this.mostrar();
    },
    filteredStadistics: function() {
      const altOrder = this.sortOrder == 1 ? -1 : 1;
      const filtrarPor1 = this.ordenamiento1;

      return this.infaltables
        .filter(agent => {
          return agent.keyword.match(this.search);
        })
        .sort((a, b) => {
          if (filtrarPor1 == 1) {
            if (parseFloat(a.porcentaje) > parseFloat(b.porcentaje)) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == 2) {
            if (parseInt(a.found) > parseInt(b.found)) {
              return this.sortOrder;
            }
          }

          this.ordenamiento1 = 0;

          return altOrder;
        });
    },
    filteredInfaltablesKeywords: function() {
      return this.agentsInfaltable.filter(agent => {
        return agent.name.match(this.search2);
      });
    },

    filteredInfaltablesGrabacion: function() {
      return this.infaltableRecordings.filter(grabacion => {
        return grabacion.recording.match(this.search3);
      });
    },

    filteredStadisticsNegativeRequired: function() {
      const altOrder = this.sortOrder == 1 ? -1 : 1;
      const filtrarPor1 = this.ordenamiento1;

      return this.negativeRequireds
        .filter(agent => {
          return agent.keyword.match(this.search);
        })
        .sort((a, b) => {
          if (filtrarPor1 == 1) {
            if (parseFloat(a.porcentaje) > parseFloat(b.porcentaje)) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == 2) {
            if (parseInt(a.found) > parseInt(b.found)) {
              return this.sortOrder;
            }
          }

          this.ordenamiento1 = 0;

          return altOrder;
        });
    },
    //
    filteredNegativeRequiredKeywords: function() {
      return this.agentsInfaltable.filter(agent => {
        return agent.name.match(this.search2);
      });
    },

    filteredNegativeRequiredGrabacion: function() {
      return this.infaltableRecordings.filter(grabacion => {
        return grabacion.recording.match(this.search3);
      });
    },
    //
    filteredStadisticsNo: function() {
      const altOrder = this.sortOrder == 1 ? -1 : 1;
      const filtrarPor1 = this.ordenamiento1;

      return this.noPermitidas
        .filter(agent => {
          return agent.keyword.match(this.search);
        })
        .sort((a, b) => {
          if (filtrarPor1 == 1) {
            if (parseInt(a.found) > parseInt(b.found)) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == 2) {
            if (parseInt(a.porcentage2) > parseInt(b.porcentage2)) {
              return this.sortOrder;
            }
          }

          this.ordenamiento1 = 0;

          return altOrder;
        });
    },
    filteredStadisticsRe: function() {
      const altOrder = this.sortOrder == 1 ? -1 : 1;
      const filtrarPor1 = this.ordenamiento1;

      return this.recomendacion
        .filter(agent => {
          return agent.keyword.match(this.search);
        })
        .sort((a, b) => {
          if (filtrarPor1 == 1) {
            if (parseInt(a.found) > parseInt(b.found)) {
              return this.sortOrder;
            }
          }
          if (filtrarPor1 == 2) {
            if (parseInt(a.porcentage2) > parseInt(b.porcentage2)) {
              return this.sortOrder;
            }
          }

          this.ordenamiento1 = 0;

          return altOrder;
        });
    },
    filterRadio: function() {
      return this.keywordsResults.filter(keyword => {
        return keyword.name.match(this.picked);
      });
    }
  },
  methods: {
    resetTable(category) {
      this.select = category;
      this.search = "";
      this.clicKeyword = false;
      this.bandera = false;
      this.clickAgente = false;
      this.search2 = "";
      this.search3 = "";
      this.clicKeyfile = false;
      //console.log("se selecciono esto ", this.select)
    },
    changeSortOrder(order1) {
      this.sortOrder = this.sortOrder == 1 ? -1 : 1;
      this.ordenamiento1 = order1;

      //console.log("como se va a organizar", this.ordenamiento1);
    },
    mostrarKeywordSelected(name, category) {
      if (this.bandera == false) {
        this.search = name;
        this.keywordGlobal = name;
        this.clicKeyword = true;
        this.bandera = true;
      } else {
        this.search = "";
        this.clicKeyword = false;
        this.bandera = false;
        this.clickAgente = false;
        this.search2 = "";
        this.search3 = "";
        this.clicKeyfile = false;
      }

      this.keywordSelected = name;
      this.categorySelected = category;
      //console.log('keyword seleccionado',this.keywordSelected);
      //console.log('category seleccionada',this.categorySelected );
      this.mostrar();
    },
    mostrarAgentSelected(name) {
      if (this.bandera2 == false) {
        this.search2 = name;
        this.clickAgente = true;
        this.bandera2 = true;
      } else {
        this.search2 = "";
        this.clickAgente = false;
        this.bandera2 = false;
        this.search3 = "";
        this.clicKeyfile = false;
      }

      this.agentSelected = name;
      //console.log("agent seleccionado",this.agentSelected)
      this.mostrar();
    },
    mostrarKeyfileSelected(keyfile) {
      if (this.bandera3 == false) {
        this.search3 = keyfile;
        this.clicKeyfile = true;
        this.bandera3 = true;
        this.picked = this.keywordGlobal;
      } else {
        this.clicKeyfile = false;
        this.bandera3 = false;
        this.search3 = "";
      }
      //this.clicKeyfile=true;
      this.keyfileSelected = keyfile;
      //console.log('keyfile selectd', this.keyfileSelected)
      this.mostrar();
    },
    async mostrar() {
      let response;

      if (this.dates.length == 1) {
        response = await this.axios.get(
          url + `?eventDate=${this.dates}T00:00:00.000Z`
        );
      } else {
        response = await this.axios.get(
          url +
            `?eventDate=${this.dates[0]}T00:00:00.000Z&&eventDate=${this.dates[1]}T00:00:00.000Z`
        );
      }

      this.stadisticsofkeywords = response.data.body;

      this.mostrarTableInfaltables(this.stadisticsofkeywords);
      this.mostrarAgent(
        this.stadisticsofkeywords,
        this.keywordSelected,
        this.categorySelected,
        this.cantidadLlamadas
      );
      this.mostrarRecordings(
        this.stadisticsofkeywords,
        this.keywordSelected,
        this.categorySelected,
        this.agentSelected,
        this.cantidadLlamadas
      );
      if (this.keyfileSelected.length > 0) {
        const responseKeyword = await this.axios.get(
          urlKeywords + `?keyfile=${this.keyfileSelected}`
        );
        this.keywords = responseKeyword.data.body;
        //this.mostrarTableKeywords(this.keywords, this.keyfileSelected);
        this.mostrarTableConversations(this.keywords, this.keyfileSelected);
      }
      // this.mostrarTableNopermitidas(this.stadisticsofkeywords);
      // this.mostrarTableRecomendacion(this.stadisticsofkeywords);
    },
    mostrarTableInfaltables(data) {
      // let tamData=data.length;
      let superCategory = {
        required: {},
        notAllowed: {},
        recommendation: {},
        negativeRequired: {},
        negativeNotAllowed: {},
        negativeRecommendation: {}
      };
      let totalRecordings = 0;
      //let totalFound = 0;
      for (let i = 0; i < data.length; i++) {
        for (let category in data[i].contents) {
          for (let keyword in data[i].contents[category]) {
            for (let agent in data[i].contents[category][keyword]) {
              if (!(keyword in superCategory[category])) {
                superCategory[category][keyword] =
                  data[i].contents[category][keyword][agent].length;
              } else {
                superCategory[category][keyword] +=
                  data[i].contents[category][keyword][agent].length;
              }
            }
          }
        }

        totalRecordings += data[i].recordings;
      }
      this.cantidadLlamadas = totalRecordings;
      if (this.cantidadLlamadas == 0) {
        this.pxinfo = true;
        //console.log("entro");
      } else {
        this.pxinfo = false;
      }

      let superRequiredArray = [];
      let superNotAllowedArray = [];
      let superRecommendationArray = [];
      let superNegativeRequiredArray = [];

      for (let category in superCategory) {
        for (let keyword in superCategory[category]) {
          let keywordPackage = {
            keyword: keyword,
            found: superCategory[category][keyword],
            porcentaje:
              (100 * superCategory[category][keyword]) / totalRecordings
          };
          if (category == "required") {
            superRequiredArray.push(keywordPackage);
          } else if (category == "notAllowed") {
            superNotAllowedArray.push(keywordPackage);
          } else if (category == "recommendation") {
            superRecommendationArray.push(keywordPackage);
          } else if (category == "negativeRequired") {
            superNegativeRequiredArray.push(keywordPackage);
          }
        }
      }

      // console.log("superRequiredArray 45",superRequiredArray)

      this.infaltables = superRequiredArray;
      this.noPermitidas = superNotAllowedArray;
      this.recomendacion = superRecommendationArray;
      this.negativeRequireds = superNegativeRequiredArray;
    },
    mostrarAgent(data, selectedKeyword, category, cantidadLLamdas) {
      //console.log(data,selectedKeyword,category)
      let superAgents = {};

      for (let i = 0; i < data.length; i++) {
        //console.log('data[i]',data[i].contents[category])
        for (let agent in data[i].contents[category][selectedKeyword]) {
          if (!(agent in superAgents)) {
            superAgents[agent] =
              data[i].contents[category][selectedKeyword][agent].length;
          } else {
            superAgents[agent] +=
              data[i].contents[category][selectedKeyword][agent].length;
          }
        }
      }

      //console.log('superAgents',superAgents)

      let superAgentsArray = [];

      for (let agent in superAgents) {
        let agentPackage = {
          name: agent,
          found: superAgents[agent],
          porcentaje: (100 * superAgents[agent]) / cantidadLLamdas
        };
        superAgentsArray.push(agentPackage);
      }

      //console.log("superAgentsArray",superAgentsArray);
      this.agentsInfaltable = superAgentsArray;
    },
    mostrarRecordings(
      data,
      selectedKeyword,
      category,
      selectedAgent,
      cantidadLLamadas
    ) {
      //console.log('data ',data,' keyword ',selectedKeyword,'category',selectedCategory,'agent',selectedAgent,'cantidad de llamadas',cantidadLLamdas)
      console.log(cantidadLLamadas);
      let superArrayRecordings = [];

      for (let i = 0; i < data.length; i++) {
        for (
          let j = 0;
          j < data[i].contents[category][selectedKeyword][selectedAgent].length;
          j++
        ) {
          let recordingPackage = {
            recording:
              data[i].contents[category][selectedKeyword][selectedAgent][j]
          };

          superArrayRecordings.push(recordingPackage);
        }
        //superArrayRecordings = superArrayRecordings.concat(data[i].contents[category][selectedKeyword][selectedAgent])
      }

      //console.log('superArrayRecordings',superArrayRecordings)

      this.infaltableRecordings = superArrayRecordings;
    },
    mostrarTableConversations(data, keyfile) {
      console.log(keyfile);
      let conversations = data[0].conversation;
      console.log("mostrar conversations ", conversations);

      function secondsToTime(seconds) {
        return new Date(seconds * 1000).toISOString().substr(11, 11);
      }

      for (let i = 0; i < conversations.length; i++) {
        conversations[i].from = secondsToTime(conversations[i].from);
        conversations[i].to = secondsToTime(conversations[i].to);
      }

      this.conversationsComplete = conversations;
    }
  }
};
</script>
