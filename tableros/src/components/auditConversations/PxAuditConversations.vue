import PxAuditConversations from
'@/components/auditConversations/PxAudioConversations';
<template>
  <div class="app">
    <v-app>
      <v-main>
        <h2 class="ml-3" style="color:#FF9B00">
          Conversaciones <span style="color:#CACACA"></span>
        </h2>
        <!--calendar and numCall-->
        <v-container class="">
          <v-row>
            <v-col lg="2" cols="5" sm="5" style="">
              <h3 style="color:#FF9B00">
                FECHA
                <!-- Date <span style="color:gray;">of</span> records -->
              </h3>
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                color="orange accent-3 lighten-1"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateFormatted"
                    color="orange accent-3 lighten-1"
                    hint="MM/DD/YYYY"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  color="orange accent-3 lighten-1"
                  v-model="date"
                  no-title
                  @input="menu1 = false"
                ></v-date-picker>
              </v-menu>
              <!-- <v-date-picker
                color="orange accent-3 lighten-1"
                v-model="date"
              ></v-date-picker> -->
              <!-- <p>{{date}}</p>-->
              <p v-show="false">{{ submitDate }}</p>
            </v-col>
            <v-col
              style="justify-content: center; align-items: center;text-align: center;"
            >
              <h3 class="orange--text">
                TOTAL <span style="color:#CACACA">GRABACIONES</span>
              </h3>
              <span class="text-h2 orange--text">{{
                this.cantidadLlamadas
              }}</span>
            </v-col>
          </v-row>
        </v-container>
        <!--END fechas-->
        <!--Table score general-->
        <input class="" placeholder="Buscar..." type="text" v-model="search" />
        <v-simple-table class="mt-5">
          <template v-slot:default>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  NOMBRE
                </th>
                <th style="text-align: center;" class="white--text ">
                  <img src="../../assets/sort.png" class="mr-2" />
                  <span
                    class="underline cursor-pointer"
                    @click="changeSortOrder(3)"
                    >GRABACIONES
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="agentConversations in filteredAgents"
                :key="agentConversations.name"
              >
                <td @click="mostrarDetalleCall(agentConversations.name)">
                  {{ agentConversations.name }}
                </td>
                <td style="text-align: center;">
                  {{ agentConversations.results.recordings }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--End Table score general-->
        <!--TABLE LLAMADAS-->
        <input
          class=""
          hidden
          placeholder="Buscar..."
          type="text"
          v-model="search2"
        />
        <v-simple-table
          class="mt-5"
          v-if="recordsConversationsMostrar != false"
        >
          <template>
            <thead>
              <tr style="background-color:#CACACA">
                <th class="white--text ">
                  NOMBRE GRABACIÓN
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="recordsConversations in filteredCalls"
                :key="recordsConversations.keyfile"
              >
                <td
                  @click="
                    mostrarDetalleConversations(recordsConversations.keyfile)
                  "
                >
                  {{ recordsConversations.keyfile }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--ENDTABLE LLAMADAS-->
        <!--Tablas cluster-->
        <v-simple-table
          class="mt-5"
          v-if="conversationsCompleteMostrar != false"
        >
          <template>
            <thead>
              <tr style="background-color:#CACACA">
                <th style="text-align: center;" class="white--text ">
                  INTERLOCUTOR
                </th>
                <th style="text-align: center;" class="white--text ">
                  <span class="underline cursor-pointer">TRANSCRIPCIÓN </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <span class="underline cursor-pointer">DESDE </span>
                </th>
                <th style="text-align: center;" class="white--text ">
                  <span class="underline cursor-pointer">HASTA</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="element in conversationsComplete" :key="element">
                <td
                  style="text-transform: capitalize"
                  :class="
                    element.speaker == 'agent' ? 'orange--text' : 'black--text'
                  "
                >
                  {{ element.speaker + "e" }}
                </td>
                <td
                  style=""
                  :class="
                    element.speaker == 'agent' ? 'orange--text' : 'black--text'
                  "
                >
                  {{ element.transcript }}
                </td>
                <td
                  :class="
                    element.speaker == 'agent' ? 'orange--text' : 'black--text'
                  "
                >
                  {{ element.from }}
                </td>
                <td
                  :class="
                    element.speaker == 'agent' ? 'orange--text' : 'black--text'
                  "
                >
                  {{ element.to }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--Tablas cluster-->
      </v-main>
    </v-app>
  </div>
</template>
<script>
let currentUrl = window.location.pathname;
let nameBDconn = currentUrl.split("/");
let url = `${process.env.VUE_APP_URLBACKEND}${currentUrl}`;
let urlConversations = `${process.env.VUE_APP_URLBACKEND}/${nameBDconn[1]}/conversations`;
export default {
  name: "PxAuditConversations",
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      cantidadLlamadas: 0,
      menu1: false,
      search: "",
      sortOrder: 1,
      ordenamiento1: Number,
      search2: "",
      sortOrderCalls: 1,
      ordenamiento1Calls: Number,

      conversations: [],
      agentsSummary: [],
      agentSelected: "",
      keyfileSelected: "",
      recordsConversations: [],
      recordsConversationsMostrar: false,
      bandera: false,
      banderaConversations: false,
      conversationAgent: [],
      conversationsComplete: [],
      conversationsCompleteMostrar: false
    };
  },
  created() {
    this.mostrar();
  },
  computed: {
    submitDate() {
      const date = new Date(this.date).toISOString().substr(0, 10);

      console.log(date);
      this.mostrar();
      return date;
    },
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    filteredAgents: function() {
      const altOrder = this.sortOrder == 1 ? -1 : 1;
      const filtrarPor1 = this.ordenamiento1;

      return this.agentsSummary
        .filter(conversations => {
          return conversations.name.match(this.search);
        })
        .sort((a, b) => {
          if (filtrarPor1 == 3) {
            if (
              parseInt(a.results.recordings) > parseInt(b.results.recordings)
            ) {
              return this.sortOrder;
            }
          }

          this.ordenamiento1 = "";

          return altOrder;
        });
    },
    filteredCalls: function() {
      const altOrderCalls = this.sortOrderCalls == 1 ? -1 : 1;
      const filtrarPor1 = this.ordenamiento1Calls;

      return this.recordsConversations
        .filter(conversations => {
          return conversations.keyfile.match(this.search2);
        })
        .sort((a, b) => {
          if (filtrarPor1 == 1) {
            if (
              parseFloat(a.results.infaltable.saludo) >
              parseFloat(b.results.infaltable.saludo)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == 2) {
            if (
              parseFloat(a.results.infaltable.producto) >
              parseFloat(b.results.infaltable.producto)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == 3) {
            if (
              parseFloat(a.results.infaltable.venta) >
              parseFloat(b.results.infaltable.venta)
            ) {
              return this.sortOrderCalls;
            }
          }
          if (filtrarPor1 == 4) {
            if (
              parseFloat(a.results.infaltable["validación"]) >
              parseFloat(b.results.infaltable["validación"])
            ) {
              return this.sortOrderCalls;
            }
          }

          this.ordenamiento1Calls = "";

          return altOrderCalls;
        });
    }
  },
  watch: {
    date(val) {
      console.log(val);
      this.dateFormatted = this.formatDate(this.date);
    }
  },
  methods: {
    changeSortOrder(order1) {
      this.sortOrder = this.sortOrder == 1 ? -1 : 1;
      this.ordenamiento1 = order1;

      console.log("como se va a organizar", this.ordenamiento1);
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    mostrarDetalleCall(name) {
      this.agentSelected = name;
      console.log("el agent seleccionado", this.agentSelected);

      if (this.bandera == false) {
        this.search = name;
        this.bandera = true;
        this.recordsConversationsMostrar = true;
      } else {
        this.search = "";
        this.bandera = false;
        this.recordsConversationsMostrar = false;
        this.search2 = "";
        this.banderaConversations = false;
        this.conversationsCompleteMostrar = false;
        this.agentSelected = "";
        this.keyfileSelected = "";
      }
      this.mostrar();
    },
    mostrarDetalleConversations(keyfile) {
      this.keyfileSelected = keyfile;
      console.log("keyfile selected", keyfile);
      if (this.banderaConversations == false) {
        this.search2 = keyfile;
        this.banderaConversations = true;
        this.conversationsCompleteMostrar = true;
      } else {
        this.search2 = "";
        this.banderaConversations = false;
        this.conversationsCompleteMostrar = false;
        this.keyfileSelected = "";
      }
      this.mostrar();
    },
    async mostrar() {
      const response = await this.axios.get(
        url + `?eventDate=${this.date}T00:00:00.000Z`
      );

      this.conversations = response.data.body;
      console.log("object", this.conversations);
      console.log("urlconversation", urlConversations);
      this.mostrarCantidadLLamadas(this.conversations[0].recordingsSummary);
      this.mostrarConversationsAgentes(this.conversations[0].agentsSummary);
      this.mostrarGrabaciones(
        this.conversations[0].recordingsSummary,
        this.agentSelected
      );

      if (this.keyfileSelected.length > 0) {
        const responseConversations = await this.axios.get(
          urlConversations + `?keyfile=${this.keyfileSelected}`
        );
        console.log(
          "url Phrases",
          urlConversations + `?keyfile=${this.keyfileSelected}`
        );
        console.log("object", responseConversations.data.body);
        this.conversationAgent = responseConversations.data.body;
        this.mostrarTableConversations(
          this.conversationAgent,
          this.keyfileSelected
        );
      }
    },
    mostrarCantidadLLamadas(data) {
      let suma = 0;
      for (let key in data) {
        suma += data[key].length;
      }
      this.cantidadLlamadas = suma;
    },
    mostrarConversationsAgentes(data) {
      this.agentsSummary = data;
    },
    mostrarGrabaciones(data, name) {
      for (let key in data) {
        if (key == name) {
          this.recordsConversations = data[key];
        }
      }
    },
    mostrarTableConversations(data, keyfile) {
      console.log(keyfile);
      let conversations = data[0].conversation;
      console.log("mostrar conversations ", conversations);

      function secondsToTime(seconds) {
        return new Date(seconds * 1000).toISOString().substr(11, 11);
      }

      for (let i = 0; i < conversations.length; i++) {
        conversations[i].from = secondsToTime(conversations[i].from);
        conversations[i].to = secondsToTime(conversations[i].to);
      }

      this.conversationsComplete = conversations;
    }
  }
};
</script>
