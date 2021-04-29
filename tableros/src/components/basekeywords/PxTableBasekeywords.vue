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

          <!-- Tabla y formulario -->
          <v-simple-table class="mt-5">
            <template v-slot:default>
              <thead>
                <tr class=" ">
                  <!--<th class="white--text">ID</th>-->
                  <th class=""><h2>KEYWORD</h2></th>
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
                >BaseKeyword</v-card-title
              >
              <v-card-text>
                <!---->
                <v-container>
                  <v-row>
                    <!--<input v-model="basekeyword._id" hidden></input>-->
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model="basekeyword.keyword"
                        label="Keyword"
                        solo
                        required
                        >{{ basekeyword.keyword }}</v-text-field
                      >
                    </v-col>
                    <v-col cols="12" md="3">
                      <select
                        style="width:110px; height:50px"
                        v-model="basekeyword.category"
                      >
                        <option disabled value="">Categoria</option>
                        <option>infaltable</option>
                        <option>recomendacion</option>
                        <option>no permitida</option>
                      </select>
                    </v-col>
                    <v-col cols="12" md="3">
                      <select
                        style="width:100px; height:50px"
                        v-model="basekeyword.module"
                      >
                        <option disabled value="">Modulo</option>
                        <option>saludo</option>
                        <option>producto</option>
                        <option>validacion</option>
                        <option>venta</option>
                        <option>despedida</option>
                        <option>cierre</option>
                      </select>
                    </v-col>
                    <v-col cols="12" md="3">
                      <select
                        style="width:110px; height:50px"
                        v-model="basekeyword.cluster"
                      >
                        <option disabled value="">Cluster</option>
                        <option>identificación</option>
                        <option>saludo</option>
                        <option>términos</option>
                        <option>nombre de cobertura</option>
                        <option>descripción</option>
                        <option>número de eventos</option>
                        <option>confirmación</option>
                        <option>modo de pago</option>
                        <option>precio</option>
                        <option>activación</option>
                        <option>cierre</option>
                        <option>tiempo de activación</option>
                        <option>validación</option>
                        <option>nombre</option>
                        <option>despedida</option>
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
console.log("currenturl", currentUrl);
let url = `${process.env.VUE_APP_URLBACKEND}${currentUrl}/`; //igsSerfinanzaCO/basephrases/
console.log("url", url);
//let url = "http://localhost:3000/basekeywords/";

export default {
  name: "PxTableBasekeywords",
  data() {
    return {
      filter: null,
      category: "",
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
  mounted() {
    console.log("esta es ", process.env.VUE_APP_URLBACKEND);
  },
  created() {
    this.mostrar();
  },
  methods: {
    async mostrar() {
      const response = await this.axios.get(url);
      this.basekeywords = response.data.body;
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
