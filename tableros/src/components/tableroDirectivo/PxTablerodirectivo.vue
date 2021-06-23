<template>
  <div class="app">
    <v-app>
      <v-main>
        <h1 class="orange--text">Tablero Directivo</h1>
        <v-container class="my-5">
          <!--antes-->
          <v-layout row wrap v-if="selectCamp == ''">
            <v-flex
              xs12
              sm6
              md4
              lg3
              v-for="campaign in clientes"
              :key="campaign.name"
            >
              <v-card class="ma-3">
                <div class="text-center" style="color:#929292">
                  <h2>{{ campaign.name }}</h2>
                </div>
                <v-responsive class="pt-4">
                  <v-img
                    class="justify-center align-center"
                    height="250"
                    :src="campaign.image"
                  ></v-img>
                </v-responsive>
                <v-card-text>
                  <h2 class="text-center pb-3">Minutos</h2>
                  <!-- <div class="row"> -->
                  <div>
                    <v-row>
                      <v-col>
                        <h4 class="text-center" style="color:#929292">Mayo</h4>
                        <h3 class="text-center gray-text">
                          {{ campaign.minAnt }}
                        </h3>
                      </v-col>
                      <v-col>
                        <h4 class="text-center orange--text">Junio</h4>
                        <h3 class="text-center gray-text">
                          {{ campaign.minAct }}
                        </h3>
                      </v-col>
                    </v-row>

                    <!-- </div> -->
                    <v-row>
                      <v-col>
                        <h4 class="text-center">Ingresos Mayo</h4>
                        <h3 class="text-center">{{ campaign.ingresosAnt }}</h3>
                      </v-col>
                      <v-col>
                        <h4 class="text-center orange--text">Ingresos Junio</h4>
                        <h3 class="text-center ">{{ campaign.ingresosAct }}</h3>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <p></p>
                      </v-col>
                      <v-col>
                        <h4 class="text-center">Ejecución</h4>
                        <h3 class="text-center">
                          {{ campaign.ejecucion.toFixed(1) }}%
                        </h3>
                      </v-col>
                    </v-row>
                  </div>
                  <!-- <div class="grey--text">{{campaign.role}}</div> -->
                </v-card-text>
                <v-row>
                  <v-col>
                    <p></p>
                  </v-col>
                  <v-col>
                    <v-card-actions>
                      <v-btn flat color="grey" @click="select(campaign.name)">
                        <!-- <v-icon small left>message</v-icon> -->
                        <span>Ver Más</span>
                      </v-btn>
                    </v-card-actions>
                  </v-col>
                  <v-col>
                    <p></p>
                  </v-col>
                </v-row>
              </v-card>
            </v-flex>
          </v-layout>
          <!--end antes-->

          <v-layout row wrap v-if="selectCamp == 'IGS'">
            <v-row>
              <v-card-actions>
                <v-btn flat color="grey" @click="select('')">
                  <!-- <v-icon small left>message</v-icon> -->
                  <span>Regresar</span>
                </v-btn>
              </v-card-actions>
            </v-row>

            <v-row>
              <v-flex
                xs12
                sm6
                md4
                lg3
                v-for="campaign in campaigns"
                :key="campaign.name"
              >
                <v-card class="ma-3">
                  <div class="text-center" style="color:#929292">
                    <h2>{{ campaign.name }}</h2>
                  </div>
                  <!-- <v-responsive class="pt-4">
              <v-img
                class="justify-center align-center"
                height="250"
                
                :src=campaign.image
                
              ></v-img>
            </v-responsive> -->
                  <v-card-text>
                    <h2 class="text-center pb-3">Minutos</h2>
                    <!-- <div class="row"> -->
                    <div>
                      <v-row>
                        <v-col>
                          <h4 class="text-center" style="color:#929292">
                            Mayo
                          </h4>
                          <h3 class="text-center gray-text">
                            {{ campaign.minAnt }}
                          </h3>
                        </v-col>
                        <v-col>
                          <h4 class="text-center orange--text">Junio</h4>
                          <h3 class="text-center gray-text">
                            {{ campaign.minAct }}
                          </h3>
                        </v-col>
                      </v-row>

                      <!-- </div> -->
                      <v-row>
                        <v-col>
                          <h4 class="text-center">Ingresos Mayo</h4>
                          <h3 class="text-center">
                            {{ campaign.ingresosAnt }}
                          </h3>
                        </v-col>
                        <v-col>
                          <h4 class="text-center orange--text">
                            Ingresos Junio
                          </h4>
                          <h3 class="text-center ">
                            {{ campaign.ingresosAct }}
                          </h3>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col>
                          <p></p>
                        </v-col>
                        <v-col>
                          <h4 class="text-center">Ejecución</h4>
                          <h3 class="text-center">
                            {{ campaign.ejecucion.toFixed(1) }}%
                          </h3>
                        </v-col>
                      </v-row>
                    </div>
                    <!-- <div class="grey--text">{{campaign.role}}</div> -->
                  </v-card-text>
                  <!-- <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Ver Más</span>
              </v-btn>
            </v-card-actions> -->
                </v-card>
              </v-flex>
            </v-row>
          </v-layout>

          <!--2-->

          <v-layout row wrap v-if="selectCamp == 'BPOGS'">
            <v-row>
              <v-card-actions>
                <v-btn flat color="grey" @click="select('')">
                  <!-- <v-icon small left>message</v-icon> -->
                  <span>Regresar</span>
                </v-btn>
              </v-card-actions>
            </v-row>
            <v-row>
              <v-flex
                xs12
                sm6
                md4
                lg3
                v-for="campaign in campaigns2"
                :key="campaign.name"
              >
                <v-card class="ma-3">
                  <div class="text-center" style="color:#929292">
                    <h2>{{ campaign.name }}</h2>
                  </div>
                  <!-- <v-responsive class="pt-4">
              <v-img
                class="justify-center align-center"
                height="250"
                
                :src=campaign.image
                
              ></v-img>
            </v-responsive> -->
                  <v-card-text>
                    <h2 class="text-center pb-3">Minutos</h2>
                    <!-- <div class="row"> -->
                    <div>
                      <v-row>
                        <v-col>
                          <h4 class="text-center" style="color:#929292">
                            Mayo
                          </h4>
                          <h3 class="text-center gray-text">
                            {{ campaign.minAnt }}
                          </h3>
                        </v-col>
                        <v-col>
                          <h4 class="text-center orange--text">Junio</h4>
                          <h3 class="text-center gray-text">
                            {{ campaign.minAct }}
                          </h3>
                        </v-col>
                      </v-row>

                      <!-- </div> -->
                      <v-row>
                        <v-col>
                          <h4 class="text-center">Ingresos Mayo</h4>
                          <h3 class="text-center">
                            {{ campaign.ingresosAnt }}
                          </h3>
                        </v-col>
                        <v-col>
                          <h4 class="text-center orange--text">
                            Ingresos Junio
                          </h4>
                          <h3 class="text-center ">
                            {{ campaign.ingresosAct }}
                          </h3>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <p></p>
                        </v-col>
                        <v-col>
                          <h4 class="text-center">Ejecución</h4>
                          <h3 class="text-center">
                            {{ campaign.ejecucion.toFixed(1) }}%
                          </h3>
                        </v-col>
                      </v-row>
                    </div>
                    <!-- <div class="grey--text">{{campaign.role}}</div> -->
                  </v-card-text>
                  <!-- <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Ver Más</span>
              </v-btn>
            </v-card-actions> -->
                </v-card>
              </v-flex>
            </v-row>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      dateAnt: new Date(),
      mesAct: "",
      mesAnt: "",
      selectCamp: "",
      ingresosClientANt: 0,
      ingresosClientACT: 0,
      clientes: [
        {
          name: "IGS",
          minAnt: 0,
          ingresosAnt: 0,
          minAct: 0,
          ingresosAct: 0,
          ejecucion: 0,
          image:
            "https://media-exp1.licdn.com/dms/image/C4E0BAQGnCM18sK2f_w/company-logo_200_200/0/1583871877344?e=2159024400&v=beta&t=ARddKOoFh1OgvVX09uy7_NYM_IPJVtA91wrjCcIrx1A"
        },
        {
          name: "BPOGS",
          minAnt: 0,
          ingresosAnt: 0,
          minAct: 0,
          ingresosAct: 0,
          ejecucion: 0,
          image:
            "https://zenprospect-production.s3.amazonaws.com/uploads/pictures/5fc96651cd5fa10001ac18c2/picture"
        }
      ],
      campaigns: [
        {
          name: "Banistmo",
          urlBD: `${process.env.VUE_APP_URLBACKEND}/igsBanistmoPA/consumptions`,
          minAnt: 0,
          ingresosAnt: 0,
          minAct: 0,
          ingresosAct: 0,
          ejecucion: 0,
          image:
            "http://oncor.com.pa/wp-content/uploads/2018/12/logo-banistmo.jpg"
        },
        {
          name: "Bancolombia",
          urlBD: `${process.env.VUE_APP_URLBACKEND}/igsBancolombiaCO/consumptions`,
          minAnt: 0,
          ingresosAnt: 0,
          minAct: 0,
          ingresosAct: 0,
          ejecucion: 0,
          image:
            "https://pbs.twimg.com/profile_images/1383646894107234307/YaD7uv_L_400x400.jpg"
        },
        {
          name: "Banco De Occidente",
          urlBD: `${process.env.VUE_APP_URLBACKEND}/igsBancoDeOccidenteCO/consumptions`,
          minAnt: 0,
          ingresosAnt: 0,
          minAct: 0,
          ingresosAct: 0,
          ejecucion: 0,
          image:
            "http://oncor.com.pa/wp-content/uploads/2018/12/logo-banistmo.jpg"
        },
        {
          name: "Banorte",
          urlBD: `${process.env.VUE_APP_URLBACKEND}/igsBanorteMX/consumptions`,
          minAnt: 0,
          ingresosAnt: 0,
          minAct: 0,
          ingresosAct: 0,
          ejecucion: 0,
          image:
            "https://logosvector.net/wp-content/uploads/2012/12/banorte-logo-vector.png"
        },
        {
          name: "Daviplata",
          urlBD: `${process.env.VUE_APP_URLBACKEND}/igsDaviplataCO/consumptions`,
          minAnt: 0,
          ingresosAnt: 0,
          minAct: 0,
          ingresosAct: 0,
          ejecucion: 0,
          image:
            "https://www.nencata.felipepeinado.com/wp-content/uploads/2020/12/Daviplata.png"
        },
        {
          name: "Enel",
          urlBD: `${process.env.VUE_APP_URLBACKEND}/igsEnelCL/consumptions`,
          minAnt: 0,
          ingresosAnt: 0,
          minAct: 0,
          ingresosAct: 0,
          ejecucion: 0,
          image:
            "https://play-lh.googleusercontent.com/xn2S7Djvn3x05DbnPukGu9ePyk_QlWzPvhbBSaIgjkEZ2vPfkRn9pPmfob8tbBwbUb8"
        },
        {
          name: "Serfinanza",
          urlBD: `${process.env.VUE_APP_URLBACKEND}/igsSerfinanzaCO/consumptions`,
          minAnt: 0,
          ingresosAnt: 0,
          minAct: 0,
          ingresosAct: 0,
          ejecucion: 0,
          image:
            "https://pbs.twimg.com/profile_images/1112753927513100290/hzwsOJl2_400x400.png"
        }
      ],
      campaigns2: [
        {
          name: "Bold English",
          urlBD: `${process.env.VUE_APP_URLBACKEND}/bpogsBoldEnglishUS/consumptions`,
          minAnt: 0,
          ingresosAnt: 0,
          minAct: 0,
          ingresosAct: 0,
          ejecucion: 0,
          image:
            "https://codigos-ascii.com/wp-content/uploads/letra-b-mayuscula.png"
        },
        {
          name: "Bold French",
          urlBD: `${process.env.VUE_APP_URLBACKEND}/bpogsBoldFrenchFR/consumptions`,
          minAnt: 0,
          ingresosAnt: 0,
          minAct: 0,
          ingresosAct: 0,
          ejecucion: 0,
          image:
            "https://pbs.twimg.com/profile_images/904678151317573632/2y7ZCBhU_400x400.jpg"
        },
        {
          name: "Hites Despacho Retiro",
          urlBD: `${process.env.VUE_APP_URLBACKEND}/bpogsHitesDespachoRetiroCO/consumptions`,
          minAnt: 0,
          ingresosAnt: 0,
          minAct: 0.0,
          ingresosAct: 0,
          ejecucion: 0,
          image:
            "https://inversionistas.hites.com/image/journal/article?img_id=25988"
        }
      ],
      meses: [
        { mes: "sin mes" },
        { mes: "Enero" },
        { mes: "Febrero" },
        { mes: "Marzo" },
        { mes: "Abril" },
        { mes: "Mayo" },
        { mes: "Junio" },
        { mes: "Julio" },
        { mes: "Agosto" },
        { mes: "Septiembre" },
        { mes: "Octubre" },
        { mes: "Noviembre" },
        { mes: "Diciembre" }
      ]
    };
  },
  created() {
    this.obtenerMinutos();
  },

  methods: {
    select(name) {
      this.selectCamp = name;
    },
    async obtenerMinutos() {
      // for(let j=0;j<this.clientes.length-1;j++){
      let sumaMinutosAct = 0;
      for (let i = 0; i < this.campaigns.length; i++) {
        let response = await this.axios.get(
          this.campaigns[i].urlBD + `?yearMonthString=${this.date}`
        );
        let data = response.data.body;
        let suma2 = 0;
        data.forEach(element => {
          suma2 += element.totalMinutes;
        });
        sumaMinutosAct += suma2;

        this.campaigns[i].minAct = Number.parseFloat(suma2).toFixed(0);
        //new Intl.NumberFormat().format(suma2)
        //
      }
      this.clientes[0].minAct = Number.parseFloat(sumaMinutosAct).toFixed(0);
      // }

      //bpogs
      let sumaMinutosAct2 = 0;
      for (let i = 0; i < this.campaigns2.length; i++) {
        let response = await this.axios.get(
          this.campaigns2[i].urlBD + `?yearMonthString=${this.date}`
        );
        let data = response.data.body;
        let suma2 = 0;
        data.forEach(element => {
          suma2 += element.totalMinutes;
        });
        sumaMinutosAct2 += suma2;

        this.campaigns2[i].minAct = Number.parseFloat(suma2).toFixed(0);
      }
      this.clientes[1].minAct = Number.parseFloat(sumaMinutosAct2).toFixed(0);
      //end bpogs

      this.dateAnt.setMonth(this.dateAnt.getMonth() - 1);
      this.dateAnt.toISOString().substring(0, 7);
      //console.log('date original', this.date)
      // console.log('nuevo date',this.dateAnt.toISOString().substring(0, 7));
      // for(let j=0;j<this.clientes.length-1;j++){
      let sumaMinutosAnt = 0;
      for (let i = 0; i < this.campaigns.length; i++) {
        let response = await this.axios.get(
          this.campaigns[i].urlBD +
            `?yearMonthString=${this.dateAnt.toISOString().substring(0, 7)}`
        );
        let data = response.data.body;
        let suma2 = 0;
        data.forEach(element => {
          suma2 += element.totalMinutes;
        });
        sumaMinutosAnt += suma2;

        this.campaigns[i].minAnt = Number.parseFloat(suma2).toFixed(0);
        //new Intl.NumberFormat().format(suma2)
        //Number.parseFloat(suma2).toFixed(0);
        //new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(suma2)
      }
      this.clientes[0].minAnt = Number.parseFloat(sumaMinutosAnt).toFixed(0);
      this.clientes[0].ejecucion =
        (this.clientes[0].minAct / this.clientes[0].minAnt) * 100;
      //}

      //2
      // for(let j=0;j<this.clientes.length-1;j++){

      //}

      //this.dateAnt.setMonth(this.dateAnt.getMonth() - 1);
      //this.dateAnt.toISOString().substring(0, 7);
      //console.log("date original", this.date);
      //console.log("nuevo date", this.dateAnt.toISOString(2).substring(0, 7));

      //for(let j=0;j<this.clientes.length-1;j++){
      let sumaMinutosAnt2 = 0;
      for (let i = 0; i < this.campaigns2.length; i++) {
        let response = await this.axios.get(
          this.campaigns2[i].urlBD +
            `?yearMonthString=${this.dateAnt.toISOString().substring(0, 7)}`
        );
        let data = response.data.body;
        let suma2 = 0;
        data.forEach(element => {
          suma2 += element.totalMinutes;
        });
        sumaMinutosAnt2 += suma2;

        this.campaigns2[i].minAnt = Number.parseFloat(suma2).toFixed(0);
      }
      this.clientes[1].minAnt = Number.parseFloat(sumaMinutosAnt2).toFixed(0);
      this.clientes[1].ejecucion =
        (this.clientes[1].minAct / this.clientes[1].minAnt) * 100;
      //   }

      this.obtenerIngresos();
    },
    obtenerIngresos() {
      for (let j = 0; j < this.clientes.length; j++) {
        let sumaClientesIngresosAct = 0;
        let sumaClientesIngresosAnt = 0;
        for (let i = 0; i < this.campaigns.length; i++) {
          this.campaigns[i].ingresosAct = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD"
          }).format(this.campaigns[i].minAct * 0.02);
          sumaClientesIngresosAct += this.campaigns[i].minAct * 0.02;
          //console.log("sumaClientesIngresosAct", sumaClientesIngresosAct[i]);

          this.campaigns[i].ingresosAnt = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD"
          }).format(this.campaigns[i].minAnt * 0.02);
          sumaClientesIngresosAnt += this.campaigns[i].minAnt * 0.02;
          this.campaigns[i].ejecucion =
            (this.campaigns[i].minAct / this.campaigns[i].minAnt) * 100;
        }
        this.clientes[0].ingresosAct = new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "USD"
        }).format(sumaClientesIngresosAct);
        this.clientes[0].ingresosAnt = new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "USD"
        }).format(sumaClientesIngresosAnt);
      }

      for (let j = 0; j < this.clientes.length; j++) {
        let sumaClientesIngresosAct = 0;
        let sumaClientesIngresosAnt = 0;

        for (let i = 0; i < this.campaigns2.length; i++) {
          this.campaigns2[i].ingresosAct = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD"
          }).format(this.campaigns2[i].minAct * 0.05);
          sumaClientesIngresosAct += this.campaigns2[i].minAct * 0.05;

          this.campaigns2[i].ingresosAnt = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD"
          }).format(this.campaigns2[i].minAnt * 0.05);
          sumaClientesIngresosAnt += this.campaigns2[i].minAnt * 0.05;

          this.campaigns2[i].ejecucion =
            (this.campaigns2[i].minAct / this.campaigns2[i].minAnt) * 100;
        }
        this.clientes[1].ingresosAct = new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "USD"
        }).format(sumaClientesIngresosAct);
        this.clientes[1].ingresosAnt = new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "USD"
        }).format(sumaClientesIngresosAnt);
      }
    }
  }
};
</script>
