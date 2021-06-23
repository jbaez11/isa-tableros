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
            <!-- <v-col
              style="justify-content: center; align-items: center;text-align: center;"
            >
              <h3 class="orange--text">
                TOTAL <span style="color:#CACACA">HALLAZGOS</span>
              </h3>
              <span class="text-h2 orange--text">{{
                this.totalHallazgos
              }}</span>
            </v-col>  -->
          </v-row>
        </v-container>

        <!--Botonera-->

        <v-card flat class="py-12">
          <v-card-text>
            <v-row align="center" justify="center">
              <v-col cols="12">
                <p class="text-center">
                  Seleccionar
                </p>
              </v-col>
              <v-btn-toggle v-model="toggle_exclusive" mandatory>
                <v-btn @click="select = 'infaltable'">
                  Infaltables
                </v-btn>
                <v-btn @click="select = 'noPermitida'">
                  No Permitidas
                </v-btn>
                <v-btn @click="select = 'recomendacion'">
                  Recomendación
                </v-btn>
              </v-btn-toggle>
            </v-row>
          </v-card-text>
        </v-card>

        <!--End botonera-->

        <v-simple-table class="mt-5" v-if="select == 'infaltable'">
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
                    >HALLAZGO POR GRABACIÓN</span
                  >
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(2)"
                    >KEYWORD EN EL TOTAL DE GRABACIONES
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
                v-for="stadisticsofkeyword in filteredStadistics"
                :key="stadisticsofkeyword.keyword"
              >
                <td>
                  {{ stadisticsofkeyword.keyword }}
                </td>
                <td style="text-align: center;">
                  {{ stadisticsofkeyword.found }}
                </td>

                <td style="text-align: center;">
                  {{ stadisticsofkeyword.porcentage2.toFixed(1) }} %
                </td>
                <!-- <td style="text-align: center;">
                  {{stadisticsofkeyword.porcentage.toFixed(1)}} %
                </td> -->
              </tr>
            </tbody>
          </template>
        </v-simple-table>

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
                    >HALLAZGO POR GRABACIÓN</span
                  >
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(2)"
                    >KEYWORD EN EL TOTAL DE GRABACIONES
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
                <td>
                  {{ stadisticsofkeyword.keyword }}
                </td>
                <td style="text-align: center;">
                  {{ stadisticsofkeyword.found }}
                </td>
                <td style="text-align: center;">
                  {{ stadisticsofkeyword.porcentage2.toFixed(1) }} %
                </td>
                <!-- <td style="text-align: center;">
                  {{stadisticsofkeyword.porcentage.toFixed(1)}} %
                </td> -->
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--End table no permitidas-->

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
                    >HALLAZGO POR GRABACIÓN</span
                  >
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(2)"
                    >KEYWORD EN EL TOTAL DE GRABACIONES
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
                <td>
                  {{ stadisticsofkeyword.keyword }}
                </td>
                <td style="text-align: center;">
                  {{ stadisticsofkeyword.found }}
                </td>
                <td style="text-align: center;">
                  {{ stadisticsofkeyword.porcentage2.toFixed(1) }} %
                </td>
                <!-- <td style="text-align: center;">
                  {{stadisticsofkeyword.porcentage.toFixed(1)}} %
                </td> -->
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--End table recomendacion-->

        <!-- <div v-if="pxinfo == true">
          <px-info></px-info>
        </div> -->
      </v-main>
    </v-app>
  </div>
</template>
<script>
let currentUrl = window.location.pathname;
//let nameBDconn = currentUrl.split("/");
let url = `${process.env.VUE_APP_URLBACKEND}${currentUrl}`;

export default {
  name: "PxStadisticsofkeywords",
  data() {
    return {
      dates: [new Date().toISOString().substr(0, 10)],
      cantidadLlamadas: 0,
      totalHallazgos: 0,
      search: "",
      menu1: false,
      stadisticsofkeywords: [],
      infaltables: [],
      toggle_exclusive: undefined,
      noPermitidas: [],
      recomendacion: [],
      sortOrder: 1,
      ordenamiento1: 0,
      select: "infaltable"
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
    }
  },
  methods: {
    changeSortOrder(order1) {
      this.sortOrder = this.sortOrder == 1 ? -1 : 1;
      this.ordenamiento1 = order1;

      console.log("como se va a organizar", this.ordenamiento1);
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
      console.log("object", this.stadisticsofkeywords);

      // switch(this.select){
      //   case "infaltable":this.mostrarTableInfaltables(this.stadisticsofkeywords);
      //   break;
      //   case "noPermitida":this.mostrarTableNopermitidas(this.stadisticsofkeywords);
      //   break;
      //   case "recomendacion":this.mostrarTableRecomendacion(this.stadisticsofkeywords);

      // }

      this.mostrarTableInfaltables(this.stadisticsofkeywords);
      this.mostrarTableNopermitidas(this.stadisticsofkeywords);
      this.mostrarTableRecomendacion(this.stadisticsofkeywords);
    },
    mostrarTableInfaltables(data) {
      // let tamData=data.length;
      let superRequired = {};
      let totalRecordings = 0;
      for (let i = 0; i < data.length; i++) {
        console.log("entro1", data[i].contents.required);
        for (let keyword in data[i].contents.required) {
          if (!Object.prototype.hasOwnProperty.call(superRequired, keyword)) {
            superRequired[keyword] = data[i].contents.required[keyword];
          } else {
            superRequired[keyword] += data[i].contents.required[keyword];
          }
        }
        totalRecordings += data[i].recordings;
      }
      this.cantidadLlamadas = totalRecordings;
      let totalFound = 0;
      for (let keyword in superRequired) {
        totalFound += superRequired[keyword];
      }
      this.totalHallazgos = totalFound;
      console.log("superRequired", superRequired);
      let superRequiredArray = [];

      for (let keyword in superRequired) {
        let keywordPackage = {
          keyword: keyword,
          found: superRequired[keyword],
          porcentage: (superRequired[keyword] * 100) / totalFound,
          porcentage2: (superRequired[keyword] * 100) / totalRecordings
        };

        superRequiredArray.push(keywordPackage);
      }

      superRequiredArray.sort((a, b) =>
        a.found < b.found ? 1 : b.found < a.found ? -1 : 0
      );

      console.log("superRequiredArray", superRequiredArray);
      this.infaltables = superRequiredArray;
    },
    mostrarTableNopermitidas(data) {
      let superRequired = {};
      let totalRecordings = 0;
      for (let i = 0; i < data.length; i++) {
        console.log("entro1", data[i].contents.notAllowed);
        for (let keyword in data[i].contents.notAllowed) {
          if (!Object.prototype.hasOwnProperty.call(superRequired, keyword)) {
            superRequired[keyword] = data[i].contents.notAllowed[keyword];
          } else {
            superRequired[keyword] += data[i].contents.notAllowed[keyword];
          }
        }
        totalRecordings += data[i].recordings;
      }
      let totalFound = 0;
      for (let keyword in superRequired) {
        totalFound += superRequired[keyword];
      }

      console.log("superRequired", superRequired);
      let superRequiredArray = [];

      for (let keyword in superRequired) {
        let keywordPackage = {
          keyword: keyword,
          found: superRequired[keyword],
          porcentage: (superRequired[keyword] * 100) / totalFound,
          porcentage2: (superRequired[keyword] * 100) / totalRecordings
        };

        superRequiredArray.push(keywordPackage);
      }

      superRequiredArray.sort((a, b) =>
        a.found < b.found ? 1 : b.found < a.found ? -1 : 0
      );

      console.log("superRequiredArray", superRequiredArray);
      this.noPermitidas = superRequiredArray;
    },
    mostrarTableRecomendacion(data) {
      let superRequired = {};
      let totalRecordings = 0;
      for (let i = 0; i < data.length; i++) {
        console.log("entro1", data[i].contents.recommendation);
        for (let keyword in data[i].contents.recommendation) {
          if (!Object.prototype.hasOwnProperty.call(superRequired, keyword)) {
            superRequired[keyword] = data[i].contents.recommendation[keyword];
          } else {
            superRequired[keyword] += data[i].contents.recommendation[keyword];
          }
        }
        totalRecordings += data[i].recordings;
      }
      let totalFound = 0;
      for (let keyword in superRequired) {
        totalFound += superRequired[keyword];
      }

      console.log("superRequired", superRequired);
      let superRequiredArray = [];

      for (let keyword in superRequired) {
        let keywordPackage = {
          keyword: keyword,
          found: superRequired[keyword],
          porcentage: (superRequired[keyword] * 100) / totalFound,
          porcentage2: (superRequired[keyword] * 100) / totalRecordings
        };

        superRequiredArray.push(keywordPackage);
      }

      superRequiredArray.sort((a, b) =>
        a.found < b.found ? 1 : b.found < a.found ? -1 : 0
      );

      console.log("superRequiredArray", superRequiredArray);
      this.recomendacion = superRequiredArray;
    }
  }
};
</script>
