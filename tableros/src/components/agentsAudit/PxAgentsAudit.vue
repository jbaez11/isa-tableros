import api from '@/api';
<template>
  <div class="app">
    <v-app>
      <v-main>
        <h2 class="text-center">AGENTS AUDIT</h2>
        <!--calendar-->
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <h4>Fecha a auditar</h4>
          </v-flex>
        </v-layout>
        <v-layout row class="mb-2">
          <v-flex xs12 sm6 offset-sm3>
            <v-date-picker v-model="date"></v-date-picker>
            <!-- <p>{{date}}</p>-->
            {{ submitDate }}
          </v-flex>
        </v-layout>
        <!--ENDcalendar-->

        <!--<input type="date" name="" id="" />-->
        <span>{{ this.cantidadLlamadas }} llamdas</span>
        
        
        <!--<span>Checked names: {{ checkedNames | json }}</span>-->

        <!--TABLE Mostrar nombre y cantidad-->
        <v-simple-table class="mt-5" v-show="auditAgents != false">
          <template>
            <thead>
              <th>NOMBRE</th>
              <th>LLAMADAS</th>
              <th>INFALTABLE POSITIVE</th>
              <th>INFALTABLE NEGATIVE</th>
              <th>NO PERMITIDA POSITIVE</th>
              <th>NO PERMITIDA POSITIVE</th>
              <th>RECOMENDACION POSITIVE</th>
              <th>RECOMENDACION POSITIVE</th>
              
            </thead>
            <tbody>
              <tr v-for="agentAudit in agentCategoryTotals" :key="agentAudit.name">
                <td>{{ agentAudit.name}}</td>
                <td>{{ agentAudit.results.keyfiles.length}}</td>
                <td>{{ agentAudit.results.infaltable.positive || 0}}</td>
                <td>{{ agentAudit.results.infaltable.negative || 0}}</td>
                <td>{{ agentAudit.results["no permitida"].positive || 0}}</td>
                <td>{{ agentAudit.results["no permitida"].negative || 0}}</td>
                <td>{{ agentAudit.results["recomendación"].positive || 0}}</td>
                <td>{{ agentAudit.results["recomendación"].negative || 0}}</td>
                
                
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        
        <!--ENDTABLE Mostrar nombre y cantidad-->
        <!--TABLE LLAMADAS-->
        <v-simple-table class="mt-5" v-show="auditAgents != false">
          <template>
            <thead>
              <th>LLAMADA</th>
              <th>TOTAL</th>
              
            </thead>
            <tbody>
              <tr v-for="agentAudit in agentCategoryTotals" :key="agentAudit.name">
                <td>{{ agentAudit.results.keyfiles }}</td>
                
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--ENDTABLE LLAMADAS-->
        <v-simple-table class="mt-5" v-show="auditAgents != false">
          <template>
            <thead>
              <th>FROM</th>
              <th>KEYWORD</th>
              <th>TO</th>
              <th>CONFIDENCE</th>
              <th>MODULE</th>
              <th>CATEGORY</th>
            </thead>
            <tbody>
              <tr v-for="agentAudit in agentCategoryTotals" :key="agentAudit._id">
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <!-- <td>{{agentAudit.keywords}}</td> -->
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!-- TABLE DATOS-->

        <!-- ENDTABLE DATOS-->
      </v-main>
    </v-app>
  </div>
</template>

<script>
//import api from "@/apiAgentAudit";
let currentUrl = window.location.pathname;
console.log("currenturl", currentUrl);
let url = `http://localhost:3000${currentUrl}`; //igsSerfinanzaCO/basephrases/
console.log("url", url);
//let urlfecha = url+'?eventDate=2021-02-08T00:00:00.000Z';
//console.log('url fecha completa',urlfecha);

//let url = "http://localhost:3000/agents/";

export default {
  name: "PxAgentsAudit",
  data() {
    return {
      auditAgents: {},
      date: "2021-02-21",
      cantidadLlamadas: 0,
      totalCategory:[],
      agentCategoryTotals:[]
      

    };
  },
  created() {
    this.mostrar();
  },
  methods: {
    async mostrar() {
      const response = await this.axios.get(
        url + `?eventDate=${this.date}T00:00:00.000Z`
      );
    //   console.log('toda la dta',response.data.body);
      this.auditAgents = response.data.body;
      console.log('this.auditAgents',this.auditAgents);
      this.cantidadLlamadas = this.auditAgents.length;
       let agentCategoryTotals = {}; 
      for(let i=0; i<this.auditAgents.length;i++){
        //   console.log('auditAgetn', this.auditAgents[i].agent.name);
          let nameAgent = this.auditAgents[i].agent.name;
          if(!(nameAgent in agentCategoryTotals)){
              agentCategoryTotals[nameAgent] = {};
             (agentCategoryTotals[nameAgent])["keyfiles"]=[];
          }
          let keyfile = this.auditAgents[i].keyfile;
          //console.log('keyfile = ',keyfile)
          ((agentCategoryTotals[nameAgent])["keyfiles"]).push(keyfile);
          
          
          
        for (let keyword in (this.auditAgents[i].keywords)) {
            
            // console.log('keyword  = ',(keyword));
            // console.log('clasification  = ',this.auditAgents[i].keywords[keyword].clasification.category);

            let category=this.auditAgents[i].keywords[keyword].clasification.category;
            if(!(category in agentCategoryTotals[nameAgent])){
                (agentCategoryTotals[nameAgent])[category]={};
            }
            let haveResults=false;
            if(this.auditAgents[i].keywords[keyword].results.length>0){
                haveResults =true;

            }

            if(haveResults){
                if(!("positive" in (agentCategoryTotals[nameAgent])[category])){
                   (agentCategoryTotals[nameAgent][category])["positive"]=1;
                }else{
                    (agentCategoryTotals[nameAgent][category])["positive"]+=1;
                }
            }else{
                 if(!("negative" in (agentCategoryTotals[nameAgent])[category])){
                    (agentCategoryTotals[nameAgent][category])["negative"]=1;
                }else{
                    (agentCategoryTotals[nameAgent][category])["negative"]+=1;
                }
            }
            
            
            
        }
        
          
      }
      console.log('agentCategoryTotals',agentCategoryTotals);
      let agentCategoryArray=[];
      for(let key in agentCategoryTotals){
          let infoByAgent = {
              name:key,
              results:agentCategoryTotals[key]
              
          };

          agentCategoryArray.push(infoByAgent);
      }
      console.log('ver data dicc', agentCategoryArray)
      this.agentCategoryTotals=agentCategoryArray;
     // this.calls=agentCategoryTotals
      //console.log('ver el total de la category', this.agentCategoryTotals)

    }
  },
  computed: {
    submitDate() {
      const date = new Date(this.date);

      console.log(date);
      this.mostrar();
      return date;
    }
  }
};
</script>
