<template>
  <div class="app">
    <v-app>
      <v-main>
        <!--<h2 class="text-center">CRUD usando APIREST con Node JS</h2>-->
        <!-- Botón CREAR -->
        <v-card
          class="mx-auto mt-5"
          color="transparent"
          max-width="1280"
          elevation="0"
        >
          <v-btn class="mx-2" fab dark color="#FF9B00" @click="formNuevo()"
            ><v-icon dark>mdi-plus</v-icon></v-btn
          >
          <input
            class=""
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
            name="filter"
          />

          <v-btn tile color="success" @click="getReport()">
            <v-icon left>
              mdi-pencil
            </v-icon>
            Descargar
          </v-btn>

          <!-- Tabla y formulario -->
          <v-simple-table class="mt-5">
            <template v-slot:default>
              <thead>
                <tr class=" ">
                  <!--<th class="white--text">ID</th>-->
                  <th class=""><h2>KEYWORD / FRASE</h2></th>
                  <th class=""><h2>CATEGORIA</h2></th>
                  <th class=""><h2>MODULO</h2></th>
                  <th class=""><h2>CLUSTER</h2></th>
                  <th class=""><h2>ACCIONES</h2></th>
                </tr>
              </thead>
              <tbody v-show="!filter">
                <tr
                  v-for="basekeyword in displayedBasekeywords"
                  :key="basekeyword._id"
                >
                  <!--<td>{{ basekeyword._id }}</td>-->
                  <td>{{ basekeyword.keyword }}</td>
                  <td>{{ basekeyword.category }}</td>
                  <td>{{ basekeyword.module }}</td>
                  <td>{{ basekeyword.cluster }}</td>

                  <td>
                    <v-btn
                      class="orange"
                      dark
                      small
                      fab
                      @click="
                        formEditar(
                          basekeyword._id,
                          basekeyword.keyword,
                          basekeyword.category,
                          basekeyword.module,
                          basekeyword.cluster
                        )
                      "
                      ><v-icon>mdi-pencil</v-icon></v-btn
                    >
                    <v-btn
                      class="error"
                      fab
                      dark
                      small
                      @click="borrar(basekeyword._id)"
                      ><v-icon>mdi-delete</v-icon></v-btn
                    >
                  </td>
                </tr>
              </tbody>
              <!--filterd-->
              <tbody v-if="filter">
                <tr
                  v-for="basekeyword in filteredBasekeywords"
                  :key="basekeyword._id"
                >
                  <td>{{ basekeyword.keyword }}</td>
                  <td>{{ basekeyword.category }}</td>
                  <td>{{ basekeyword.module }}</td>
                  <td>{{ basekeyword.cluster }}</td>
                  <td>
                    <v-btn
                      class="orange"
                      dark
                      small
                      fab
                      @click="
                        formEditar(
                          basekeyword._id,
                          basekeyword.keyword,
                          basekeyword.category,
                          basekeyword.module,
                          basekeyword.cluster
                        )
                      "
                      ><v-icon>mdi-pencil</v-icon></v-btn
                    >
                    <v-btn
                      class="error"
                      fab
                      dark
                      small
                      @click="borrar(basekeyword._id)"
                      ><v-icon>mdi-delete</v-icon></v-btn
                    >
                  </td>
                </tr>
              </tbody>
              <!--enfilter-->
            </template>
          </v-simple-table>
        </v-card>
        <!--Pagination-->
        <div v-show="!filter" class="" style="">
          <div
            class=""
            style="display: flex; justify-content: center; align-items: center;"
          >
            <v-btn v-if="page != 1" @click="page--">
              Anterior
            </v-btn>
            <v-btn
              v-for="pageNmber in pages.slice(page - 1, page + 2)"
              :key="pageNmber"
              @click="page = pageNmber"
            >
              {{ pageNmber }}
            </v-btn>
            <v-btn>
              ...
            </v-btn>
            <v-btn v-if="page < pages.length" @click="page = pages.length">
              {{ pages.length }}
            </v-btn>
            <v-btn v-if="page < pages.length" @click="page++">
              Siguiente
            </v-btn>
          </div>
        </div>
        <!--Inicio modal-->
        <v-dialog v-model="dialog" max-width="700">
          <v-form>
            <v-card>
              <v-card-title class="orange accent-3 white--text"
                >Keyword / Frase</v-card-title
              >
              <v-card-text>
                <!---->
                <v-container>
                  <v-row>
                    <!--<input v-model="basekeyword._id" hidden></input>-->
                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="basekeyword.keyword"
                        label="Keyword / Frase"
                        solo
                        required
                        >{{ basekeyword.keyword }}</v-text-field
                      >
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="12">
                      <select
                        style="width:500px; height:50px; background-color: #EEEDED;"
                        v-model="basekeyword.category"
                        @click="obtenerCategorySelect($event)"
                      >
                        <option disabled value="">Categoria</option>
                        <option value="infaltable">infaltable</option>
                        <option value="recomendacion">recomendación</option>
                        <option value="no permitida">no permitida</option>
                      </select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="12">
                      <select
                        style="width:500px; height:50px; background-color: #EEEDED;"
                        v-model="basekeyword.module"
                        @click="obtenerModuleSelect($event)"
                      >
                        <option disabled value="">Modulo</option>
                        <option
                          v-bind:value="modules"
                          v-for="modules in modules"
                          :key="modules"
                          >{{ modules }}</option
                        >
                      </select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="12">
                      <select
                        style="width:500px; height:50px;background-color: #EEEDED;"
                        v-model="basekeyword.cluster"
                      >
                        <option disabled value="">Cluster</option>
                        <option v-for="clusters in clusters" :key="clusters">{{
                          clusters
                        }}</option>
                      </select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="dialog = false" color="blue-grey" dark
                  >Cancelar</v-btn
                >
                <v-btn
                  @click="guardar()"
                  type="submit"
                  color="orange accent-3"
                  dark
                  >Guardar</v-btn
                >
              </v-card-actions>
              <!--</v-form>-->
            </v-card>
          </v-form>
        </v-dialog>
        <!--fin modal-->
      </v-main>
    </v-app>
  </div>
</template>

<script>
require("dotenv").config();
let currentUrl = window.location.pathname;
let nameBDconn = currentUrl.split("/");
console.log("currenturl", currentUrl);
let url = `${process.env.VUE_APP_URLBACKEND}${currentUrl}/`; //igsSerfinanzaCO/basephrases/
let urlBaseScore = `${process.env.VUE_APP_URLBACKEND}/${nameBDconn[1]}/basescore`;
console.log("url", url);
console.log("baseScore", urlBaseScore);
//let url = "http://localhost:3000/basekeywords/";

export default {
  name: "PxTableBasekeywords",
  data() {
    return {
      filter: null,
      category: "",
      modules: [],
      selectModule: "",
      selectCategory: "",
      clusters: [],
      datasCMC: [],
      module: "",
      cluster: "",
      basekeywords: [],
      dialog: false,
      operacion: "",
      basekeyword: {
        _id: null,
        keyword: "",
        category: this.category,
        module: this.module,
        cluster: this.cluster
      },
      page: 1,
      perPage: 10,
      pages: []
    };
  },
  mounted() {},
  created() {
    this.mostrar();
  },
  methods: {
    obtenerCategorySelect(event) {
      this.selectCategory = event.target.value;
      this.mostrar();
    },
    obtenerModuleSelect(event) {
      this.selectModule = event.target.value;
      this.mostrar();
    },
    async mostrar() {
      const response = await this.axios.get(url);
      this.basekeywords = response.data.body;
      const dataCMC = await this.axios.get(urlBaseScore);
      this.datasCMC = dataCMC.data.body;
      this.obtenerModules(this.datasCMC);
      this.obtnerCluster(this.datasCMC, this.selectCategory, this.selectModule);
    },

    obtenerModules(data) {
      this.modules = [];
      //console.log("sleec",select," this.basekeyword.category ",this.category)
      //if(select == "infaltable" || select == "recomendación" || select == "no permitida"){
      for (let key in data[0].infaltable) {
        //console.log('key modules', key);
        this.modules.push(key);
      }
      // }else{
      //   this.modules=this.modules[0]='-';
      // }

      //console.log('this.modules',this.modules)
    },

    obtnerCluster(data, selectCategory, selectModule) {
      this.clusters = [];

      if (selectCategory == "infaltable" && selectModule != "-") {
        for (let moduleKey in data[0].infaltable) {
          if (moduleKey == selectModule) {
            for (let cluster in data[0].infaltable[moduleKey]) {
              this.clusters = this.clusters.concat(cluster);
            }
          }
        }
      } else {
        this.clusters = this.clusters[0] = "-";
      }

      // console.log("this.clusters", this.clusters);
    },
    objectToCsv(data) {
      const csvRows = [];
      const headers = Object.keys(data[0]);
      csvRows.push(headers.join(","));

      //console.log('headers',csvRows)

      for (const row of data) {
        const values = headers.map(header => {
          const scaped = ("" + row[header]).replace(/"/g, '\\"');
          return `"${scaped}"`;
        });
        csvRows.push(values.join(","));
      }

      return csvRows.join("\n");
    },
    download(data) {
      const dataF = "\ufeff" + data;
      const hora =
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds();
      const blob = new Blob([dataF], {
        type: ' type: "text/csv;charset=UTF-8"'
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.setAttribute("hidden", "");
      a.setAttribute("href", url);
      a.setAttribute("download", "keywords_frases_" + hora + ".csv");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
    async getReport() {
      // console.log('this.agents', this.agents);

      const data = this.basekeywords.map(row => ({
        keyword: row.keyword,
        categoria: row.category,
        modulo: row.module,
        cluster: row.cluster,
        creacion: row.createdAt
      }));
      console.log("data", data);
      //const csvData =
      const csvData = this.objectToCsv(data);
      this.download(csvData);
    },
    paginate(basekeywords) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return basekeywords.slice(from, to);
    },
    setBasekeywords() {
      let numberOfPages = Math.ceil(this.basekeywords.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },

    crear() {
      let parametros = {
        keyword: this.basekeyword.keyword,
        category: this.basekeyword.category,
        module: this.basekeyword.module,
        cluster: this.basekeyword.cluster
      };
      this.axios.post(url, parametros).then(response => {
        console.log(response.data);

        this.$swal.fire("¡Creado!", "", "success");
      });
      this.basekeyword.keyword = "";
      this.basekeyword.category = "";
      this.basekeyword.module = "";
      this.basekeyword.cluster = "";
    },
    editar() {
      let parametros = {
        id: this.basekeyword._id,
        keyword: this.basekeyword.keyword,
        category: this.basekeyword.category,
        module: this.basekeyword.module,
        cluster: this.basekeyword.cluster
      };
      this.axios
        .patch(url + this.basekeyword._id, parametros)
        .then(response => {
          console.log(response);
          this.$swal.fire("¡Modificado!", "", "success");
          this.mostrar();
        });
    },
    borrar(id) {
      this.$swal
        .fire({
          title: "¿Confirma eliminar el registro?",
          confirmButtonText: `Confirmar`,
          showCancelButton: true
        })
        .then(result => {
          if (result.isConfirmed) {
            //procedimiento borrar
            this.axios.delete(url + id).then(response => {
              this.mostrar();
              console.log(response);
            });
            this.$swal.fire("¡Eliminado!", "", "success");
          } else if (result.isDenied) {
            return false;
          }
        });
    },

    //Botones y formularios
    guardar: function() {
      if (this.operacion == "crear") {
        this.crear();
      }
      if (this.operacion == "editar") {
        this.editar();
      }
      this.dialog = false;
    },
    formNuevo: function() {
      this.dialog = true;
      this.operacion = "crear";
      this.basekeyword.keyword = "";
      this.basekeyword.category = "";
      this.basekeyword.module = "";
      this.basekeyword.cluster = "";
    },
    formEditar: function(id, keyword, category, module, cluster) {
      this.basekeyword._id = id;
      this.basekeyword.keyword = keyword;
      this.basekeyword.category = category;
      this.basekeyword.module = module;
      this.basekeyword.cluster = cluster;
      this.dialog = true;
      this.operacion = "editar";
    }
  },
  computed: {
    displayedBasekeywords() {
      return this.paginate(this.basekeywords);
    },
    filteredBasekeywords() {
      return this.basekeywords.filter(basekeyword =>
        basekeyword.keyword.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  },
  watch: {
    basekeywords() {
      this.setBasekeywords();
    },
    checkFilterActivate: function(e) {
      if (this.filter == null) {
        console.log(e);
        return null;
      }
      if (this.filter != null) {
        return true;
      }
    }
  }
};
</script>
