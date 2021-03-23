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
        <!--Table score general-->
        <input class="" placeholder="Buscar..." type="text" v-model="search" />
        <v-simple-table class="mt-5">
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  NOMBRE
                </th>

                <!-- <th style="text-align: center;" class="white--text ">
                  <img
                    src="../../assets/sort.png"
                    class="mr-2"
                    style="color:white"
                  />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(2)"
                    >No permitida
                  </span>
                </th> -->
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(3)"
                    >INFALTABLE
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(1)"
                    >PUNTAJE FINAL</span
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

                <!-- <td style="text-align: center;">
                  {{ scoresbykeywords.results.notAllowedScore }}
                </td> -->
                <td style="text-align: center;">
                  {{ scoresbykeywords.results.requiredScore }}
                </td>
                <td style="text-align: center;">
                  {{ scoresbykeywords.results.finalScore }}
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
        <v-simple-table class="mt-5" v-show="recordScoreByKeywords != false">
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
                    >SALUDO
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrderCalls(2)"
                    >PRODUCTO
                  </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrderCalls(3)"
                    >VENTA</span
                  >
                </th>
                <!-- <th class="white--text ">NO PERMITIDA NEGATIVE</th> -->
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrderCalls(4)"
                    >VALIDACION</span
                  >
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrderCalls(5)"
                    >CIERRE</span
                  >
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrderCalls(6)"
                    >DESPEDIDA</span
                  >
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrderCalls(7)"
                    >INFALTABLE</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="scoresbykeywords in filteredCalls"
                :key="scoresbykeywords.keyfile"
              >
                <td>
                  {{ scoresbykeywords.keyfile }}
                </td>
                <td>
                  {{ scoresbykeywords.results.infaltable.saludo.toFixed(2) }}
                </td>
                <td>
                  {{ scoresbykeywords.results.infaltable.producto.toFixed(2) }}
                </td>
                <td>
                  {{ scoresbykeywords.results.infaltable.venta.toFixed(2) }}
                </td>
                <td>
                  {{
                    scoresbykeywords.results.infaltable["validación"].toFixed(2)
                  }}
                </td>
                <td>
                  {{ scoresbykeywords.results.infaltable.cierre.toFixed(2) }}
                </td>
                <td>
                  {{ scoresbykeywords.results.infaltable.despedida.toFixed(2) }}
                </td>
                <td>
                  {{
                    scoresbykeywords.results.infaltable.totalScore.toFixed(2)
                  }}
                </td>

                <!-- <td>{{agentAudit.results["recomendación"].negative}}</td> -->
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--ENDTABLE LLAMADAS-->
      </v-main>
    </v-app>
  </div>
</template>

<script>
let currentUrl = window.location.pathname;
let url = `https://backend-tableros-exhausted-raven-fv.mybluemix.net${currentUrl}`;
export default {
  name: "PxScoresByKeywords",
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: new Date().toISOString().substr(0, 10),
      cantidadLlamadas: 0,
      scoresbykeywords: [],
      menu1: false,
      search: "",
      sortOrder: 1,
      ordenamiento1: Number,
      search2: "",
      sortOrderCalls: 1,
      ordenamiento1Calls: Number,
      detailOfAgent: [],
      recordScoreByKeywords: [],
      agentSelected: "",
      bandera: false
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

      return this.detailOfAgent
        .filter(agent => {
          return agent.name.match(this.search);
        })
        .sort((a, b) => {
          if (filtrarPor1 == 1) {
            if (
              parseFloat(a.results.finalScore) >
              parseFloat(b.results.finalScore)
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
              parseFloat(a.results.requiredScore) >
              parseFloat(b.results.requiredScore)
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
              parseFloat(a.results.infaltable.saludo) >
              parseFloat(b.results.infaltable.saludo)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == 2) {
            if (
              parseFloat(a.results.infaltable.producto) >
              parseFloat(b.results.infaltable.producto)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == 3) {
            if (
              parseFloat(a.results.infaltable.venta) >
              parseFloat(b.results.infaltable.venta)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == 4) {
            if (
              parseFloat(a.results.infaltable["validación"]) >
              parseFloat(b.results.infaltable["validación"])
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == 5) {
            if (
              parseFloat(a.results.infaltable.cierre) >
              parseFloat(b.results.infaltable.cierre)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == 6) {
            if (
              parseFloat(a.results.infaltable.despedida) >
              parseFloat(b.results.infaltable.despedida)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == 7) {
            if (
              parseFloat(a.results.infaltable.totalScore) >
              parseFloat(b.results.infaltable.totalScore)
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
      } else {
        this.search = "";
        this.bandera = false;
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
        this.scoresbykeywords[0].callDetailByAgent
      );
      this.mostrarTableDetailOfAgents(this.scoresbykeywords[0].detailOfAgent);
      this.mostrarTableCallDetailByAgent(
        this.scoresbykeywords[0].callDetailByAgent,
        this.agentSelected
      );
    },
    mostrarCantidadDeLLamadas(data) {
      let suma = 0;
      for (let key in data) {
        suma += data[key].length;
      }
      this.cantidadLlamadas = suma;
    },
    mostrarTableDetailOfAgents(data) {
      this.detailOfAgent = data;
    },
    mostrarTableCallDetailByAgent(data, name) {
      for (let key in data) {
        if (key == name) {
          this.recordScoreByKeywords = data[key];
        }
      }
    }
  }
};
</script>
