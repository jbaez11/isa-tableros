<template>
  <div class="app">
    <v-app>
      <v-main>
        <v-card class="mx-auto mt-5" color="transparent" max-width="1280" elevation="0">
            <v-btn class="mx-2" fab dark color="#FF9B00" @click="formNuevo()"><v-icon dark>mdi-plus</v-icon></v-btn>
        
                <v-simple-table class="mt-5">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th><h2>Modulo</h2> </th>
                        <th><h2>Cluster</h2></th>
                        <th><h2>Porcentaje</h2></th>
                        <th><h2>Acciones</h2> </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="basescore in basescores" :key="basescore._id">
                        <td @click="obtenerClusters(basescore.modulo)">{{basescore.modulo}}</td>
                        
                        <td v-for="cluster in basescore.clusters" :key="cluster.name">{{cluster.name}} </td>
                        <td v-for="cluster in basescore.clusters" :key="cluster.name">{{cluster.valor}}</td>
                        
                        
                        <td>
                          <v-btn
                              class="orange"
                              dark
                              small
                              fab
                              @click="
                                formEditar(
                                  basescore._id,
                                  basescore.category,
                                  basescore.modulo,
                                  basescore.clusters.name,
                                  basescore.clusters.valor

                                )
                              "
                              ><v-icon>mdi-pencil</v-icon>
                          </v-btn>

                          <v-btn
                              class="error"
                              fab
                              dark
                              small
                              @click="borrar(basescore._id)"
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
            
            <v-card-title class="orange accent-3 white--text">Modulo</v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                      <v-text-field
                        v-model="basescore.modulo"
                        label="Modulo"
                        solo
                        required
                        >{{ basescore.modulo }}
                        </v-text-field
                      >
                    </v-col>

                    <v-col cols="12" md="12" >
                      <v-text-field 
                        v-model="basescore.clusters.name"
                        label="Nombre cluster"
                        solo
                        required
                        >{{ basescore.clusters.name }}
                        </v-text-field
                      >
                    </v-col>

                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="basescore.clusters.valor"
                        label="Porcentaje de culster"
                        solo
                        required
                        >{{ basescore.clusters.valor }}
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


        <!--Modificacion clusters-->
          <v-card class="mx-auto mt-5" color="transparent" max-width="1280" elevation="0">
            <v-btn class="mx-2" fab dark color="#FF9B00" @click="formNuevoCluster()"><v-icon dark>mdi-plus</v-icon></v-btn>
        
                <v-simple-table class="mt-5">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th><h2>Clusters</h2> </th>
                        <th><h2>Porcentaje</h2> </th>
                        <th><h2>Acciones</h2> </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="basescore in clustersSelect" :key="basescore.name">
                        <td>{{basescore.name}}</td>
                        <td>{{basescore.valor}}</td>
                        <td>
                          <v-btn
                              class="orange"
                              dark
                              small
                              fab
                              @click="
                                formEditarCluster(
                                  basescore.name,
                                  basescore.valor,
                                  

                                )
                              "
                              ><v-icon>mdi-pencil</v-icon>
                          </v-btn>

                          <v-btn
                              class="error"
                              fab
                              dark
                              small
                              @click="borrar(basescore.name)"
                              ><v-icon>mdi-delete</v-icon>
                          </v-btn>
                            
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
        </v-card>
        <!--fin cluster-->
        <!--Dialog-->
        <v-dialog v-model="dialogCluster" max-width="700">
          
          <v-form>
            <v-card>
            
            <v-card-title class="orange accent-3 white--text">Cluster</v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                      <v-text-field
                        v-model="basescore.name"
                        label="Cluster"
                        solo
                        required
                        >{{ basescore.name }}
                        </v-text-field
                      >
                    </v-col>

                     <v-col cols="12" md="12">
                      <v-text-field
                        v-model="basescore.valor"
                        label="Porcentaje"
                        solo
                        required
                        >{{ basescore.valor }}
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
                  @click="guardarCluster()"
                  type="submit"
                  color="orange accent-3"
                  dark
                  >Guardar</v-btn
                >
            </v-card-actions>
            
            </v-card>
          </v-form>
        </v-dialog>

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
      basescores:[],
      clustersSelect:[],
      clusterMostrar:[],
      
      dialog:false,
      dialogCluster:false,
      operacion:'',
      operacionCluster:'',
      basescore:{
        _id:null,
        category:"infaltable",
        modulo:"",
        clusters:[{}],
        
      }
    };
  },
  created(){
    this.mostrar();
  },
  methods:{
    async mostrar(){
      const response = await this.axios.get(url);
      this.basescores =response.data.body;
      console.log(this.basescores)

      
    },
    obtenerClusters(moduleName){
      console.log(moduleName)
      this.clustersSelect=[];
      
      
        for(let i =0 ; i<this.basescores.length;i++){
      
            if(moduleName == this.basescores[i].modulo){
              
              this.clustersSelect = this.clustersSelect.concat(this.basescores[i].clusters)
            }
        }
         
        console.log('this.clustersSelect',this.clustersSelect)
      
      
      
    },
    crear(){
      let parametros = {
        category:this.basescore.category,
        modulo:this.basescore.modulo,
        clusters:[{name:this.basescore.clusters.name,valor:this.basescore.clusters.valor}]
        

      };
    
      this.axios.post(url, parametros).then(response => {
        console.log(response);
        //this.$swal.fire("¡Phrase ya existente!", "", "warning");
        this.$swal.fire("¡Creado!", "", "success");
        this.mostrar();
        console.log(response);
      });
      this.basescore.category="infaltable";
      this.basescore.modulo="";
      this.basescore.clusters=[{}];
      

    },
    editar(){
      let parametros = {
        id:this.basescore._id,
        category:this.basescore.category,
        modulo:this.basescore.modulo,
        clusters:[{name:this.basescore.clusters.name,valor:this.basescore.clusters.valor}]

      }
      this.axios.patch(url + this.basescore._id, parametros).then(response => {
        console.log(response);
        //this.$swal.fire("¡Phrase ya existente!", "", "warning");
        this.$swal.fire("¡Modificado!", "", "success");
        this.mostrar();
        console.log(response);
      });

    },
    editarCluster(){
      let parametros = {
        id:this.basescore._id,
        category:this.basescore.category,
        modulo:this.basescore.modulo,
        clusters:this.basescore.clusters,
        

      }
      this.axios.patch(url + this.basescore._id, parametros).then(response => {
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
    guardar: function() {
      if (this.operacion == "crear") {
        this.crear();
      }
      if (this.operacion == "editar") {
        this.editar();
      }
      this.dialog = false;
    },
    guardarCluster: function() {
      if (this.operacionCluster == "crear") {
        this.crear();
      }
      if (this.operacionCluster == "editar") {
        this.editarCluster();
      }
      this.dialog = false;
    },
    formNuevo: function() {
      this.dialog = true;
      this.operacion = "crear";
      this.basescore.category = "";
      this.basescore.modulo = "" ;
      
     
    },
    formNuevoCluster: function() {
      this.dialogCluster = true;
      this.operacionCluster = "crear";
      this.basescore.category = "";
      this.basescore.modulo = "" ;
      
     
    },
    formEditar: function(id, category, modulo) {
      this.basescore._id = id;
      this.basescore.category = category;
      this.basescore.modulo = modulo ;
      
      
      this.dialog = true;
      this.operacion = "editar";
    },
    formEditarCluster: function(id, category, modulo) {
      this.basescore._id = id;
      this.basescore.category = category;
      this.basescore.modulo = modulo ;
      
      
      this.dialogCluster = true;
      this.operacionCluster = "editar";
    }
  }
  
  
};
</script>
