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
          <!-- Tabla y formulario -->
          <v-simple-table class="mt-5">
            <template v-slot:default>
              <thead>
                <tr class="orange accent-3 ">
                  <!--<th class="white--text">ID</th>-->
                  <th class="white--text">NAME</th>
                  <th class="white--text">iDENTIFICATION</th>
                  <th class="white--text">GENDER</th>
                  <th class="white--text text-center">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="agent in agents" :key="agent._id">
                  <!--<td>{{ agent._id }}</td>-->
                  <td>{{ agent.name }}</td>
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
            </template>
          </v-simple-table>
        </v-card>
        <!--Inicio modal-->
  <v-dialog v-model="dialog" max-width="500">        
        <v-form> <v-card>
          <v-card-title class="orange accent-3 white--text">Agent</v-card-title>    
          <v-card-text>            
                <!---->       
              <v-container>
                <v-row>
                  <input v-model="agent._id" hidden></input>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="agent.name" label="Name" solo required>{{agent.name}}</v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="agent.identification" label="Identification" solo required>{{agent.identification}}</v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="agent.gender" label="Gender" solo required>{{agent.gender}}</v-text-field>
                  </v-col>
                </v-row>
              </v-container>            
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="dialog=false" color="blue-grey" dark>Cancelar</v-btn>
            <v-btn @click="guardar()" type="submit" color="orange accent-3" dark>Guardar</v-btn>
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
let url = "http://localhost:3000/agents/";
 
export default {
  
  name: "PxTableAgents",
  data() {
    return {
      
      agents: [],
      dialog: false,
      operacion: "",
      agent: {
        _id: null,
        keyword: "",
        module: ""
      }
    };
  },
  created() {
    this.mostrar();
  },
  methods:{
    async mostrar() {
      const response = await this.axios.get(url);
      this.agents=response.data.body;
    },
    
    crear() {
      let parametros = {
        name: this.agent.name,
        identification: this.agent.identification,
        gender: this.agent.gender
      };
      this.axios.post(url, parametros).then(response => {
      console.log(response.data);
      this.mostrar();
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
        console.log(response)
        //this.mostrar();
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
  }
};
</script>


