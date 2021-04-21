<template>
  <div class="app">
    <v-app>
      <v-main>
        <!--<h2 class="text-center">AGENTS</h2>-->
        <!-- Botón CREAR -->
        <v-card
          class="mx-auto"
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
                  <th class=""><h2>NOMBRE</h2></th>
                  <th class=""><h2>IDENTIFICACIÓN</h2></th>
                  <th class=""><h2>GENERO</h2></th>
                  <th class=""><h2>ACCIONES</h2></th>
                </tr>
              </thead>
              <tbody v-show="!filter">
                <tr v-for="agent in displayedAgents" :key="agent._id">
                  <!--<td>{{ agent._id }}</td>-->
                  <td class="">{{ agent.name }}</td>
                  <td>{{ agent.identification }}</td>
                  <td>{{ agent.gender }}</td>
                  <td>
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
                    <v-btn
                      class="error"
                      fab
                      dark
                      small
                      @click="borrar(agent._id)"
                      ><v-icon>mdi-delete</v-icon></v-btn
                    >
                  </td>
                </tr>
              </tbody>

              <!--filterd-->
              <tbody v-if="filter">
                <tr v-for="agent in filteredAgents" :key="agent._id">
                  <!--<td>{{ agent._id }}</td>-->
                  <td class="">{{ agent.name }}</td>
                  <td>{{ agent.identification }}</td>
                  <td>{{ agent.gender }}</td>
                  <td>
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

                    <v-btn
                      class="error"
                      fab
                      dark
                      small
                      @click="borrar(agent._id)"
                      ><v-icon>mdi-delete</v-icon></v-btn
                    >
                  </td>
                </tr>
              </tbody>
              <!--End filter-->
            </template>
          </v-simple-table>
        </v-card>
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
        <v-dialog v-model="dialog" max-width="500">
          <v-form>
            <v-card>
              <v-card-title class="orange accent-3 white--text"
                >Agentes</v-card-title
              >
              <v-card-text>
                <!---->
                <v-container>
                  <v-row>
                    <!--<input v-model="agent._id" hidden></input>-->
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="agent.name"
                        label="Nombre"
                        solo
                        required
                        >{{ agent.name }}</v-text-field
                      >
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="agent.identification"
                        label="Identificación"
                        solo
                        required
                        >{{ agent.identification }}</v-text-field
                      >
                    </v-col>
                    <v-col cols="12" md="4">
                      <select
                        style="width:80px; height:50px"
                        v-model="agent.gender"
                      >
                        <option disabled value="">Genero</option>
                        <option>F</option>
                        <option>M</option>
                        <option>X</option>
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
let url = `${process.env.VUE_APP_URLBACKEND}${currentUrl}/`; //igsSerfinanzaCO/basephrases/https://backend-tableros-exhausted-raven-fv.mybluemix.net
console.log("url", url);

//let url = "http://localhost:3000/baseagents/";

export default {
  name: "PxTableAgents",
  data() {
    return {
      filter: null,
      gender: "",
      filterActive: null,
      agents: [],
      crearAgents: [],
      dialog: false,
      operacion: "",
      agent: {
        _id: null,
        name: "",
        identification: "",
        gender: this.gender
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
      this.agents = response.data.body;
      console.log("mostrar todo", response.data.body);
    },
    paginate(agents) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return agents.slice(from, to);
    },
    setAgents() {
      let numberOfPages = Math.ceil(this.agents.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },

    crear() {
      let parametros = {
        name: this.agent.name,
        identification: this.agent.identification,
        gender: this.agent.gender
      };
      this.axios.post(url, parametros).then(response => {
        console.log(response);
        //this.$swal.fire("¡Phrase ya existente!", "", "warning");
        this.$swal.fire("¡Creado!", "", "success");
        this.mostrar();
        console.log(response);
      });
      this.agent.name = "";
      this.agent.identification = "";
      this.agent.gender = "";
    },
    editar() {
      let parametros = {
        id: this.agent._id,
        name: this.agent.name,
        identification: this.agent.identification,
        gender: this.agent.gender
      };
      this.axios.patch(url + this.agent._id, parametros).then(response => {
        console.log(response);
        this.$swal.fire("¡Modificado!", "", "success");
        this.mostrar();
        console.log(response);
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
      this.agent.name = "";
      this.agent.identification = "";
      this.agent.gender = "";
    },
    formEditar: function(id, name, identification, gender) {
      this.agent._id = id;
      this.agent.name = name;
      this.agent.identification = identification;
      this.agent.gender = gender;
      this.dialog = true;
      this.operacion = "editar";
    }
  },
  computed: {
    displayedAgents() {
      return this.paginate(this.agents);
    },
    filteredAgents() {
      return this.agents.filter(
        agent =>
          agent.name.toUpperCase().includes(this.filter.toUpperCase()) ||
          agent.identification.toUpperCase().includes(this.filter.toUpperCase())
      );
    }
  },
  watch: {
    agents() {
      this.setAgents();
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
