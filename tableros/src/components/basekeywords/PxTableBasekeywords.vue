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
                  <th class="white--text">KEYWORD</th>
                  <th class="white--text">MODULE</th>
                  <th class="white--text">CATEGORY</th>
                  <th class="white--text text-center">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="basekeyword in basekeywords" :key="basekeyword._id">
                  <!--<td>{{ basekeyword._id }}</td>-->
                  <td>{{ basekeyword.keyword }}</td>
                  <td>{{ basekeyword.module }}</td>
                  <td>{{ basekeyword.category }}</td>
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
                          basekeyword.module,
                          basekeyword.category
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
            </template>
          </v-simple-table>
        </v-card>
        <!--Inicio modal-->
  <v-dialog v-model="dialog" max-width="500">        
        <v-form> <v-card>
          <v-card-title class="orange accent-3 white--text">BaseKeyword</v-card-title>    
          <v-card-text>            
                <!---->       
              <v-container>
                <v-row>
                  <input v-model="basekeyword._id" hidden></input>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="basekeyword.keyword" label="Keyword" solo required>{{basekeyword.keyword}}</v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="basekeyword.module" label="Module" solo required>{{basekeyword.module}}</v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="basekeyword.category" label="Category" solo required>{{basekeyword.category}}</v-text-field>
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
let url = "http://localhost:3000/basekeywords/";
 
export default {
  
  name: "PxTableBasekeywords",
  data() {
    return {
      
      basekeywords: [],
      dialog: false,
      operacion: "",
      basekeyword: {
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
      this.basekeywords=response.data.body;
    },
    
    crear() {
      let parametros = {
        keyword: this.basekeyword.keyword,
        module: this.basekeyword.module,
        category: this.basekeyword.category
      };
      this.axios.post(url, parametros).then(response => {
      console.log(response.data);
      this.mostrar();
      });
      this.basekeyword.keyword = "";
      this.basekeyword.module = "";
      this.basekeyword.category = "";
    },
    editar() {
      let parametros = {
        id: this.basekeyword._id,
        keyword: this.basekeyword.keyword,
        module: this.basekeyword.module,
        category: this.basekeyword.category
      };
      this.axios.patch(url + this.basekeyword._id, parametros).then(response => {
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
      this.basekeyword.keyword = "";
      this.basekeyword.module = "";
      this.basekeyword.category = "";
    },
    formEditar: function(id, keyword, module, category) {
      this.basekeyword._id = id;
      this.basekeyword.keyword = keyword;
      this.basekeyword.module = module;
      this.basekeyword.category = category;
      this.dialog = true;
      this.operacion = "editar";
    }
  }
};
</script>


