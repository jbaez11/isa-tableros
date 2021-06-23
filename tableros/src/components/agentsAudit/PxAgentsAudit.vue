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
                  @click="identificarFecha()"
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
                AFECTADAS <span style="color:#CACACA">POR </span> NO
                PERMITIDAS
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
          v-if="pxinfo == false && recordsByCategoryMostrar == false"
        />
        <div v-if="pxinfo == false && recordsByCategoryMostrar != false">
          <v-btn
            class="ma-2"
            color="orange darken-2"
            dark
            rounded
            @click="retroceder()"
          >
            <v-icon dark left > mdi-arrow-left </v-icon>Volver
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
                <th style="text-align: center;" class="white--text ">
                  VER PUNTAJE
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
                <td style="text-align:center;">
                    <v-btn
                      style="text-align:center;"
                      class="orange"
                      dark
                      small
                      fab
                      @click="irPuntaje(agentAudit.name)"
                      ><v-icon>{{icons.mdiPulse}}</v-icon></v-btn
                    >
                    
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
        <div v-if="pxinfo == false && recordsByCategoryMostrar != false">
          <v-btn
            class="ma-2"
            color="orange darken-2"
            dark
            fab
            @click="retroceder2()"
          >
            <v-icon dark > mdi-arrow-left </v-icon>
          </v-btn>
        </div>
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
        <div v-if="pxinfo == false && keywordsResultsMostrar != false">
          <v-btn
            class="ma-2"
            color="orange darken-2"
            dark
            fab
            @click="retroceder3()"
          >
            <v-icon dark > mdi-arrow-left </v-icon>
          </v-btn>
        </div>
        <v-container
          v-if="keywordsResultsMostrar != false && pxinfo == false"
          class="pt-10"
        >
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
          v-if="keywordsResultsMostrar != false && pxinfo == false"
        >
          <template>
            <thead>
              <tr style="background-color:#CACACA">
                <th class="white--text ">KEYWORD</th>
                <th class="white--text ">CATEGORIA</th>
                <th class="white--text ">MODULO</th>
                <th class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrderMin(1)"
                  >
                    DESDE</span
                  >
                </th>
                <th class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrderMin(2)"
                    >HASTA</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="element in filterRadio" :key="element.id">
                <td v-if="element.from != '-'">
                  {{ element.name }}
                </td>

                <td style="text-transform: capitalize" v-if="element.from != '-'">
                  {{ element.category }}
                </td>
                <td style="text-transform: capitalize" v-if="element.from != '-'">{{ element.module }}</td>
                <td v-if="element.from != '-'">{{ element.from }}</td>

                <td v-if="element.from != '-'">{{ element.to }}</td>

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
import PxInfo from "./PxInfo.vue";

let currentUrl = window.location.pathname;
let nameBDconn = currentUrl.split("/");
let valores  = window.location.search;
//console.log("currenturl", currentUrl);
let url = `${process.env.VUE_APP_URLBACKEND}${currentUrl}`; //igsSerfinanzaCO/basephrases/
let urlKeywords = `${process.env.VUE_APP_URLBACKEND}/${nameBDconn[1]}/keywords`;
//console.log(urlKeywords);
import { mdiPulse } from '@mdi/js';
export default {
  
  name: "PxAgentsAudit",
  components: {
    PxInfo
  },

  data() {
    return {
      icons:{
        mdiPulse
      },
      auditAgents: [],
      dates: [new Date().toISOString().substr(0, 10)],
      keywords: {},
      pxinfo: true,
      nameTraido:'',
      //date: new Date().toISOString().substr(0, 10),
      cantidadLlamadas: 0,
      cantidadLlamadasAfectadas: 0,
      //dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      topByCategory: [],
      recordsByCategory: [],
      recordsByCategoryMostrar: false,
      agentSelected: "",
      keyfileSelected: "",
      keywordsResults: [],
      keywordsResultsMostrar: false,
      menu1: false,
      search: "",
      search2: "",
      search3: "",
      picked: "",
      sortOrder: 1,
      sortOrderMin: 1,
      sortOrderCalls: 1,
      sortOrderKeywords: 1,
      ordenamiento1Keywords: Number,
      ordenamiento1Min: Number,
      ordenamiento1: 0,
      ordenamiento1Calls: Number,
      bandera: false,
      banderaConver: false
    };
  },
  created() {
    this.mostrar();
    //this.traerKeywords();
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
          return agent.name.toLowerCase().includes(this.search.toLowerCase());
          //return agent.name.match(this.search);
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
      const altOrderMins = this.sortOrderMin == 1 ? -1 : 1;
      const filtrarPor1 = this.ordenamiento1Min;
      return this.keywordsResults
        .filter(keyword => {
          return keyword.category.match(this.picked);
        })
        .sort((a, b) => {
          if (filtrarPor1 == 1) {
            if (String(a.from) > String(b.from)) {
              return this.sortOrderMin;
            }
          }
          if (filtrarPor1 == 2) {
            if (String(a.to) > String(b.to)) {
              return this.sortOrderMin;
            }
          }

          this.ordenamiento1Min = "";

          return altOrderMins;
        });
    }
  },
  watch: {},
  methods: {
    identificarFecha(){
      
      const urlParams = new URLSearchParams(valores);
      let fechaTraida = urlParams.get('eventDate');
      
      if(fechaTraida != null){
        window.location.href=`auditkeywords`
      }
    },
    irPuntaje(name){

      //console.log('igsSerfinanzaCO/auditscoringkeywords?eventDate=2021-06-15T00%3A00%3A00.000Z&name=',name);
      window.location.href=`auditscoringkeywords?eventDate=${this.dates}T00:00:00.000Z&name=${name}`
    },
    retroceder() {
      window.location.href=`auditkeywords?eventDate=${this.dates}T00:00:00.000Z`
      this.search = "";
      this.bandera = false;
      this.search2 = "";
      this.banderaConver = false;
      this.recordsByCategoryMostrar = false;
      this.keywordsResultsMostrar = false;
      this.agentSelected = "";
      this.keyfileSelected = "";
    },
    retroceder2() {
      this.search = "";
      this.bandera = false;
      this.search2 = "";
      this.banderaConver = false;
      this.recordsByCategoryMostrar = false;
      this.keywordsResultsMostrar = false;
      this.agentSelected = "";
      this.keyfileSelected = "";
    },
    retroceder3() {
      this.search2 = "";
      this.banderaConver = false;
      this.keywordsResultsMostrar = false;
      this.keyfileSelected = "";
    },
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
    changeSortOrderMin(order1) {
      this.sortOrderMin = this.sortOrderMin == 1 ? -1 : 1;
      this.ordenamiento1Min = order1;
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
        this.keywordsResultsMostrar = false;
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
        this.keywordsResultsMostrar = true;
      } else {
        this.search2 = "";
        this.banderaConver = false;
        this.keywordsResultsMostrar = false;
        this.keyfileSelected = "";
      }
      this.mostrar();
    },
    async mostrar() {

      console.log('valores obtenidos por url',valores);
      const urlParams = new URLSearchParams(valores);
      let fechaTraida = urlParams.get('eventDate');
      //console.log('Fecha traida',fechaTraida[0])
      let nameTraido = urlParams.get('name');
      this.fechaTraida = fechaTraida;
      if(nameTraido != null){
        this.search= nameTraido
      }
      console.log('fechaTraida ', fechaTraida , 'nameTraido ',nameTraido)
      let response;

      if(fechaTraida != null || nameTraido != null){
        console.log('entre')
        if(fechaTraida.includes(',')){
          console.log('entre rango')
          let nuevaFechaRango;
           nuevaFechaRango = fechaTraida.split(',');
          console.log('nuevaFechaRango',nuevaFechaRango[0])
          this.dates = [new Date(nuevaFechaRango[0]+'T00:00:00.000Z').toISOString().substr(0, 10),new Date(nuevaFechaRango[1]).toISOString().substr(0, 10)]
        }else{
          this.dates = [new Date(fechaTraida).toISOString().substr(0, 10)];
          console.log('This dates prue', this.dates)
          console.log('this.dates.length',this.dates.length)
        }
        
        
      }

      if (this.dates.length == 1) {
        response = await this.axios.get(
          url + `?eventDate=${this.dates}T00:00:00.000Z`
        );
        this.auditAgents = response.data.body;
        if (this.auditAgents[0].recordingsSummary == undefined) {
          this.pxinfo = true;
        } else {
          this.pxinfo = false;
        }
        console.log("url + `?eventDate=${this.dates}T00:00:00.000Z`",url + `?eventDate=${this.dates}T00:00:00.000Z`)
        
      } else {
        this.pxinfo = false;
        response = await this.axios.get(
          url +
            `?eventDate=${this.dates[0]}T00:00:00.000Z&&eventDate=${this.dates[1]}T00:00:00.000Z`
        );
        console.log("url + `?eventDate=${this.dates[0]}T00:00:00.000Z&&eventDate=${this.dates[1]}`",url + `?eventDate=${this.dates[0]}T00:00:00.000Z&&eventDate=${this.dates[1]}T00:00:00.000Z`)
        this.auditAgents = response.data.body;
      }
      //console.log('url + `?eventDate=${this.dates}T00:00:00.000Z`',url + `?eventDate=${this.dates}T00:00:00.000Z`)
      this.auditAgents = response.data.body;
      console.log("object2", this.auditAgents);
      //console.log("object", this.auditAgents[0].recordingsSummary);
      console.log("primera impresion agent", this.agentSelected);
      console.log("primera impresion keyfile", this.keyfileSelected);

      this.mostrarCantidadDeLLamadas(this.auditAgents);
      this.mostrarTableDetailOfAgents(this.auditAgents);
      this.mostrarTableCallDetailByAgent(this.auditAgents, this.agentSelected);
      if (this.keyfileSelected.length > 0) {
        const responseKeyword = await this.axios.get(
          urlKeywords + `?keyfile=${this.keyfileSelected}`
        );
        console.log(
          "url keywords",
          urlKeywords + `?keyfile=${this.keyfileSelected}`
        );
        console.log("object buscar en keywords", responseKeyword.data.body);
        this.keywords = responseKeyword.data.body;
        this.mostrarTableKeywords(this.keywords, this.keyfileSelected);
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

      let suma2 = 0;

      for (let i = 0; i < data.length; i++) {
        suma2 += data[i].affectedRecordings;
      }
      this.cantidadLlamadasAfectadas = suma2;
    },
    mostrarTableDetailOfAgents(data) {
      //this.topByCategory=[];

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
