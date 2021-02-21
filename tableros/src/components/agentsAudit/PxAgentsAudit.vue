import api from '@/api';
<template>
    <div class="app">
        <v-app>
            <v-main>
                <h2 class="text-center">AGENTS AUDIT</h2>
                <input type="date" name="" id="">
                <span>195 llamdas</span>
                <input type="checkbox" id="" value="" >
                <label for="">Infaltable</label>
                <input type="checkbox" id="" value="" >
                <label for="">Recomendacion</label>
                <input type="checkbox" id="" value="" >
                <label for="">No permitida</label>
                <br>
                <!--<span>Checked names: {{ checkedNames | json }}</span>-->

        <ol>
            <li>jonathan <span> 45 </span></li>
            <li>andres <span> 40 </span></li>
            <li>david <span> 35 </span></li>
        </ol>
        <ol>
            <li>BANORTE_2021_080_080_089 <span> 45 </span></li> 
            <li>BANORTE_2021_080_080_089 <span> 45 </span></li> 
            <li>BANORTE_2021_080_080_089 <span> 45 </span></li> 
        </ol>

        <table>
            <thead>
                <th>from</th>
                <th>keyword</th>
                <th>to</th>
                <th>confince</th>
                <th>module</th>
                <th>category</th>
            </thead>
            <tbody>
                <tr>
                    <td>1:45</td>
                <td>prueba</td>
                <td>2:15</td>
                <td>0.90</td>
                <td>cierre</td>
                <td>infaltable</td>
                </tr>
                <tr>
                    <td>1:45</td>
                <td>prueba</td>
                <td>2:15</td>
                <td>0.90</td>
                <td>cierre</td>
                <td>infaltable</td>
                </tr>
                
            </tbody>
        </table>





            </v-main>
        </v-app>
    </div>
</template>

<script>
import api from "@/apiAgentAudit";
let currentUrl = window.location.pathname;
console.log("currenturl", currentUrl);
let url = `http://localhost:3000${currentUrl}/`; //igsSerfinanzaCO/basephrases/
console.log("url", url);

//let url = "http://localhost:3000/agents/";

export default {
  name: "PxAgentsAudit",
  data() {
    return {
      auditAgents: [],
    };
  },
  created(){
      this.mostrar();
  },
  methods: {
    async mostrar() {
        console.log('mostrar')
      const response = await this.axios.get(url);
      this.auditAgents = response.data.body;
      console.log('mostrar todo',response.data);
    }
  }

}

</script>