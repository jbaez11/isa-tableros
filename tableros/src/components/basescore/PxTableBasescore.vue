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
          <!-- <v-btn class="mx-2" fab dark color="#FF9B00" @click="formNuevo()"
            ><v-icon dark>mdi-plus</v-icon></v-btn
          > -->
          <input
            class=""
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
            name="filter"
          />

          <!-- Tabla y formulario -->
          <v-simple-table class="mt-5" >
            <template v-slot:default>
              <thead>
                <tr class=" ">
                  <!--<th class="white--text">ID</th>-->
                  <th class=""><h2>MODULO</h2></th>

                  <!-- <th class=""><h2>ACCIONES</h2></th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="baseScor in baseScore" :key="baseScor._id">
                  <td class="">{{ Object.keys(baseScor.infaltable) }}</td>
                  <!-- <td>
                    <v-btn
                      class="orange"
                      dark
                      small
                      fab
                      @click="
                        formEditar(
                          agent._id,
                          agent.name,
                          agent.identification,
                          agent.gender
                        )
                      "
                      ><v-icon>mdi-pencil</v-icon></v-btn
                    >
                  </td> -->
                </tr>

              </tbody>
            </template>
          </v-simple-table>
        </v-card>

        <!--Inicio modal-->
        <!-- <v-dialog v-model="dialog" max-width="700">
          <v-form>
            <v-card>
              <v-card-title class="orange accent-3 white--text"
                >Base Score</v-card-title
              >
              <v-card-text>
               
                <v-container>
                  <v-row>
                    
                    <v-col cols="12" md="12">
                      
                      <v-text-field
                        
                        v-model="basekeyword.keyword"
                        label="Modulo"
                        solo
                        required
                        >{{ basekeyword.keyword }}</v-text-field
                      >
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
             
            </v-card>
          </v-form>
        </v-dialog> -->
        <!--fin modal-->
      </v-main>
    </v-app>
  </div>
</template>

<script>
require("dotenv").config();
let currentUrl = window.location.pathname;
let url = `${process.env.VUE_APP_URLBACKEND}${currentUrl}/`; //igsSerfinanzaCO/basephrases/

export default {
  name: "PxTableBasescore",
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
      baseScore: [],
      dialog: false,
      operacion: "",
      keysBasescore:[],
      baseScor: {
        _id: null,

        module: this.module
      }
    };
  },
  mounted() {},
  created() {
    this.mostrar();
  },
  methods: {
    async mostrar() {
      const response = await this.axios.get(url);
      this.baseScore = response.data.body;
      console.log(this.baseScore);

      
      // this.keysBasescore = Object.keys(this.baseScore.infaltable);
      // console.log('this.keysBasescore',this.keysBasescore)

    },

    crear() {
      let parametros = {
        module: this.baseScor.module
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
    filteredBaseScore() {
      return this.baseScore.filter(basekeyword =>
        basekeyword.keyword.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  },
  watch: {
    baseScore() {
      this.setBaseScore();
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
