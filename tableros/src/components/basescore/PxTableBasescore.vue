<template>
  <div class="app">
    <v-app>
      <v-main>

        <!--Tabla de categorias-->
        <v-card class="mx-auto mt-5" color="transparent" max-width="1280" elevation="0">
            <v-btn class="mx-2" fab dark color="#FF9B00" @click="formNuevo()"><v-icon dark>mdi-plus</v-icon></v-btn>
        
                <v-simple-table class="mt-5">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th><h2>Categorias</h2> </th>
                        <th><h2>Acciones</h2> </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="baseCategorie in baseCategories" :key="baseCategorie.name">
                        <td>{{baseCategorie.name}} </td>
                        
                        <td>
                          <v-btn
                              class="orange"
                              dark
                              small
                              fab
                              @click="
                                formEditar(
                                  baseCategorie._id,
                                  baseCategorie.name,
                                  

                                )
                              "
                              ><v-icon>mdi-pencil</v-icon>
                          </v-btn>

                          <v-btn
                              class="error"
                              fab
                              dark
                              small
                              @click="borrar(baseCategorie._id)"
                              ><v-icon>mdi-delete</v-icon>
                          </v-btn>
                            
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
        </v-card>
        <!--Dialog-->
        <v-dialog v-model="dialog" max-width="700">
          
          <v-form>
            <v-card>
            
            <v-card-title class="orange accent-3 white--text">Categoria</v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                      <v-text-field
                        v-model="baseCategorie.name"
                        label="Categoria"
                        solo
                        required
                        >{{ baseCategorie.name }}
                        </v-text-field
                      >
                    </v-col>

                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="baseCategorie.qualifying"
                        label="Categorya para evaluar"
                        solo
                        required
                        >{{ baseCategorie.qualifying }}
                        </v-text-field
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
        </v-dialog>
        <!--END Tabla de categorias-->



        <!--Tabla de modulos-->
        <v-card class="mx-auto mt-5" color="transparent" max-width="1280" elevation="0">
            <v-btn class="mx-2" fab dark color="#FF9B00" @click="formNuevoModules()"><v-icon dark>mdi-plus</v-icon></v-btn>
        
                <v-simple-table class="mt-5">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th><h2>Categoria</h2> </th>
                        <th><h2>Modulo</h2> </th>
                        <th><h2>Acciones</h2> </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="baseModule in baseModules" :key="baseModule._id">
                        <td>{{baseModule.nameCategory}} </td>
                        <td>{{baseModule.nameModule}}</td>
                        
                        <td>
                          <v-btn
                              class="orange"
                              dark
                              small
                              fab
                              @click="
                                formEditarModules(
                                  baseModule._id,
                                  baseModule.nameCategory,
                                  baseModule.nameModule
                                  

                                )
                              "
                              ><v-icon>mdi-pencil</v-icon>
                          </v-btn>

                          <v-btn
                              class="error"
                              fab
                              dark
                              small
                              @click="borrarModules(baseModule._id)"
                              ><v-icon>mdi-delete</v-icon>
                          </v-btn>
                            
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
        </v-card>
        <!--Dialog-->
        <v-dialog v-model="dialogModules" max-width="700">
          
          <v-form>
            <v-card>
            
            <v-card-title class="orange accent-3 white--text">Modulos</v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                      <v-text-field
                        v-model="baseModule.nameCategory"
                        label="Categoria"
                        solo
                        required
                        >{{ baseModule.nameCategory }}
                        </v-text-field
                      >
                    </v-col>

                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="baseModule.nameModule"
                        label="Modulo"
                        solo
                        required
                        >{{ baseModule.nameModule }}
                        </v-text-field
                      >
                    </v-col>
                    
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="dialogModules = false" color="blue-grey" dark
                  >Cancelar</v-btn
                >
                <v-btn
                  @click="guardarModules()"
                  type="submit"
                  color="orange accent-3"
                  dark
                  >Guardar</v-btn
                >
            </v-card-actions>
            
            </v-card>
          </v-form>
        </v-dialog>
        <!--END Tabla de modulos-->


        <!--Tabla de clusters-->
        <v-card class="mx-auto mt-5" color="transparent" max-width="1280" elevation="0">
            <v-btn class="mx-2" fab dark color="#FF9B00" @click="formNuevoClusters()"><v-icon dark>mdi-plus</v-icon></v-btn>
        
                <v-simple-table class="mt-5">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th><h2>Categoria</h2> </th>
                        <th><h2>Modulo</h2> </th>
                        <th><h2>Cluster</h2> </th>
                        <th><h2>Puntaje</h2> </th>

                        <th><h2>Acciones</h2> </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="baseCluster in baseClusters" :key="baseCluster._id">
                        <td>{{baseCluster.nameCategory}} </td>
                        <td>{{baseCluster.nameModule}}</td>
                        <td>{{baseCluster.nameClusters}} </td>
                        <td>{{baseCluster.puntaje}}</td>
                        
                        <td>
                          <v-btn
                              class="orange"
                              dark
                              small
                              fab
                              @click="
                                formEditarClusters(
                                  baseCluster._id,
                                  baseCluster.nameCategory,
                                  baseCluster.nameModule,
                                  baseCluster.nameClusters,
                                  baseCluster.puntaje,

                                )
                              "
                              ><v-icon>mdi-pencil</v-icon>
                          </v-btn>

                          <v-btn
                              class="error"
                              fab
                              dark
                              small
                              @click="borrarClusters(baseCluster._id)"
                              ><v-icon>mdi-delete</v-icon>
                          </v-btn>
                            
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
        </v-card>
        <!--Dialog-->
        <v-dialog v-model="dialogCluster" max-width="700">
          
          <v-form>
            <v-card>
            
            <v-card-title class="orange accent-3 white--text">Modulos</v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                      <v-text-field
                        v-model="baseCluster.nameCategory"
                        label="Categoria"
                        solo
                        required
                        >{{ baseCluster.nameCategory }}
                        </v-text-field
                      >
                    </v-col>

                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="baseCluster.nameModule"
                        label="Modulo"
                        solo
                        required
                        >{{ baseCluster.nameModule }}
                        </v-text-field
                      >
                    </v-col>

                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="baseCluster.nameClusters"
                        label="Cluster"
                        solo
                        required
                        >{{ baseCluster.nameClusters }}
                        </v-text-field
                      >
                    </v-col>

                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="baseCluster.puntaje"
                        label="Puntaje"
                        solo
                        required
                        >{{ baseCluster.puntaje }}
                        </v-text-field
                      >
                    </v-col>
                    
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="dialogCluster = false" color="blue-grey" dark
                  >Cancelar</v-btn
                >
                <v-btn
                  @click="guardarClusters()"
                  type="submit"
                  color="orange accent-3"
                  dark
                  >Guardar</v-btn
                >
            </v-card-actions>
            
            </v-card>
          </v-form>
        </v-dialog>
        <!--END Tabla de clusters-->
      </v-main>
    </v-app>
  </div>
</template>

<script>
require("dotenv").config();
let currentUrl = window.location.pathname;
let nameBDconn = currentUrl.split("/");
let url = `${process.env.VUE_APP_URLBACKEND}/${nameBDconn[1]}/basecategories/`; //igsSerfinanzaCO/basephrases/
let url2 = `${process.env.VUE_APP_URLBACKEND}/${nameBDconn[1]}/modules/`;
let url3 = `${process.env.VUE_APP_URLBACKEND}/${nameBDconn[1]}/clusters/`;

export default {
  name: "PxTableBasescore",
  data() {
    return {
      baseCategories:[],
      baseModules:[],
      baseClusters:[],
      
      dialog:false,
      dialogModules:false,
      dialogCluster:false,
      operacion:'',
      operacionModules:'',
      operacionCluster:'',
      baseCategorie:{
        _id:null,
        name:"",
        qualifying:0
      },
      baseModule:{
        _id:null,
        nameCategory:"",
        nameModule:""
      },
      baseCluster:{
        _id:null,
        nameCategory:"",
        nameModule:"",
        nameClusters:"",
        puntaje:0
      }
    };
  },
  created(){
    this.mostrar();
  },
  methods:{
    async mostrar(){
      const response = await this.axios.get(url);
      this.baseCategories =response.data.body;
      console.log(this.baseCategories)

      const response2 = await this.axios.get(url2);
      this.baseModules = response2.data.body;

      const response3 = await this.axios.get(url3);
      this.baseClusters = response3.data.body;

    },
    
    crear(){
      let parametros = {
        name:this.baseCategorie.name,
        qualifying:this.baseCategorie.qualifying,
        
      };
    
      this.axios.post(url, parametros).then(response => {
        console.log(response);
        //this.$swal.fire("¡Phrase ya existente!", "", "warning");
        this.$swal.fire("¡Creado!", "", "success");
        this.mostrar();
        console.log(response);
      });
      this.baseCategorie.name="";
      this.baseCategorie.qualifying="";
      
      

    },
    crearModules(){
      let parametros = {
        nameCategory:this.baseModule.nameCategory,
        nameModule:this.baseModule.nameModule,
        
      };
    
      this.axios.post(url2, parametros).then(response => {
        console.log(response);
        //this.$swal.fire("¡Phrase ya existente!", "", "warning");
        this.$swal.fire("¡Creado!", "", "success");
        this.mostrar();
        console.log(response);
      });
      this.baseModule.nameCategory="";
      this.baseModule.nameModule="";
    },
    crearClusters(){
      let parametros = {
        nameCategory:this.baseCluster.nameCategory,
        nameModule:this.baseCluster.nameModule,
        nameClusters:this.baseCluster.nameClusters,
        puntaje:this.baseCluster.puntaje
      };
    
      this.axios.post(url3, parametros).then(response => {
        console.log(response);
        //this.$swal.fire("¡Phrase ya existente!", "", "warning");
        this.$swal.fire("¡Creado!", "", "success");
        this.mostrar();
        console.log(response);
      });
      this.baseModule.nameCategory="";
      this.baseModule.nameModule="";
      this.baseCluster.nameClusters="";
      this.baseCluster.puntaje="";
    },
    editar(){
      let parametros = {
        id:this.baseCategorie._id,
        name:this.baseCategorie.name,
        qualifying:this.baseCategorie.qualifying,
        
      }
      this.axios.patch(url + this.baseCategorie._id, parametros).then(response => {
        console.log(response);
        //this.$swal.fire("¡Phrase ya existente!", "", "warning");
        this.$swal.fire("¡Modificado!", "", "success");
        this.mostrar();
        console.log(response);
      });

    },
    editarModules(){
      let parametros = {
        id:this.baseModule._id,
        nameCategory:this.baseModule.nameCategory,
        nameModule:this.baseModule.nameModule,
        
      }
      this.axios.patch(url2 + this.baseModule._id, parametros).then(response => {
        console.log(response);
        //this.$swal.fire("¡Phrase ya existente!", "", "warning");
        this.$swal.fire("¡Modificado!", "", "success");
        this.mostrar();
        console.log(response);
      });

    },
    editarClusters(){
      let parametros = {
        id:this.baseCluster._id,
        nameCategory:this.baseCluster.nameCategory,
        nameModule:this.baseCluster.nameModule,
        nameClusters:this.baseCluster.nameClusters,
        puntaje:this.baseCluster.puntaje
        
      }
      this.axios.patch(url3 + this.baseCluster._id, parametros).then(response => {
        console.log(response);
        //this.$swal.fire("¡Phrase ya existente!", "", "warning");
        this.$swal.fire("¡Modificado!", "", "success");
        this.mostrar();
        console.log(response);
      });

    },
    
    borrar(id){
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
    borrarModules(id){
      this.$swal
        .fire({
          title: "¿Confirma eliminar el registro?",
          confirmButtonText: `Confirmar`,
          showCancelButton: true
        })
        .then(result => {
          if (result.isConfirmed) {
            //procedimiento borrar
            this.axios.delete(url2 + id).then(response => {
              this.mostrar();
              console.log(response);
            });
            this.$swal.fire("¡Eliminado!", "", "success");
          } else if (result.isDenied) {
            return false;
          }
        });
    },
    borrarClusters(id){
      this.$swal
        .fire({
          title: "¿Confirma eliminar el registro?",
          confirmButtonText: `Confirmar`,
          showCancelButton: true
        })
        .then(result => {
          if (result.isConfirmed) {
            //procedimiento borrar
            this.axios.delete(url3 + id).then(response => {
              this.mostrar();
              console.log(response);
            });
            this.$swal.fire("¡Eliminado!", "", "success");
          } else if (result.isDenied) {
            return false;
          }
        });
    },
    guardar: function() {
      if (this.operacion == "crear") {
        this.crear();
      }
      if (this.operacion == "editar") {
        this.editar();
      }
      this.dialog = false;
    },
    guardarModules: function() {
      if (this.operacionModules == "crearModules") {
        this.crearModules();
      }
      if (this.operacionModules == "editarModules") {
        this.editarModules();
      }
      this.dialogModules = false;
    },
    guardarClusters: function() {
      if (this.operacionCluster == "crearClusters") {
        this.crearClusters();
      }
      if (this.operacionCluster == "editarClusters") {
        this.editarClusters();
      }
      this.dialogCluster = false;
    },
    
    formNuevo: function() {
      this.dialog = true;
      this.operacion = "crear";
      this.baseCategorie.name = "";
      this.baseCategorie.qualifying = "" ;
      
     
    },
    formNuevoModules: function() {
      this.dialogModules = true;
      this.operacionModules = "crearModules";
      this.baseModule.nameCategory = "";
      this.baseModule.nameModule = "" ;
    },

    formNuevoClusters: function() {
      this.dialogCluster = true;
      this.operacionCluster = "crearClusters";
      this.baseCluster.nameCategory = "";
      this.baseCluster.nameModule = "" ;
      this.baseCluster.nameClusters = "";
      this.baseCluster.puntaje = "";
    },
    
    formEditar: function(id, name, qualifying) {
      this.baseCategorie._id = id;
      this.baseCategorie.name = name;
      this.baseCategorie.qualifying = qualifying ;
      
      
      this.dialog = true;
      this.operacion = "editar";
    },

    formEditarModules: function(id, nameCategory, nameModule) {
      this.baseModule._id = id;
      this.baseModule.nameCategory = nameCategory;
      this.baseModule.nameModule = nameModule ;
      
      
      this.dialogModules = true;
      this.operacionModules = "editarModules";
    },
    formEditarClusters: function(id, nameCategory, nameModule, nameClusters , puntaje) {
      this.baseCluster._id = id;
      this.baseCluster.nameCategory = nameCategory;
      this.baseCluster.nameModule = nameModule ;
      this.baseCluster.nameClusters=nameClusters,
      this.baseCluster.puntaje=puntaje
      
      
      this.dialogCluster = true;
      this.operacionCluster = "editarClusters";
    },
  }
  
  
};
</script>
