<template>
    <div class="app">
        <v-app>
            <v-main>
                <h2 class="text-center orange--text">CONSUMPTION</h2>
                <v-container>
                    <v-row>
                        <v-col  lg="2" cols="5" sm="5">
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="date"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="date"
                                    label="Picker in menu"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                v-model="date"
                                type="month"
                                no-title
                                scrollable
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="menu = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.menu.save(date)"
                                >
                                    OK
                                </v-btn>
                                </v-date-picker>
                            </v-menu>
                            <p v-show="false">{{ submitDate }}</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col >
                            <v-card elevation="2">
                                <h3 style="color:#FF9B00;text-align: center;">TOTAL MINUTES <br> <span style="color:#4C4C4C;">500.000</span></h3>
                                
                            </v-card>
                        </v-col>
                        <v-col>
                            <h3 style="color:#FF9B00;text-align: center;">TOTAL <span style="color:#4C4C4C;"> CALL </span> RECORDS  <br> <span style="color:#4C4C4C;">100.000</span></h3>
                        </v-col>
                        <v-col>
                            <h3 style="color:#FF9B00;text-align: center;">CALL READ <br> <span style="color:#4C4C4C;">99.900</span></h3>
                        </v-col>
                    </v-row>
                    
                </v-container>
                <v-container class="pt-lg-12">
                    
                    <v-row>
                        <br>
                        <h3 class="ml-lg-10" style="color:#FF9B00;">Minutes</h3>
                        <br>
                        <br>    
                        <column-chart :colors="['#FF9B00','#CC7C00']" :data="[['1', 32], ['2', 46], ['3', 28],['4', 32], ['5', 46], ['6', 28],['7', 32], ['8', 46], ['9', 28],['10', 32], ['11', 46], ['12', 28],['13', 46], ['14', 28],['15', 32], ['16', 46], ['17', 28]]"></column-chart>
                    </v-row>
                    <v-row>
                        <br>
                        <h3 class="ml-lg-10 pt-lg-8 pb-lg-8" style="color:#FF9B00;">Call records</h3>
                        <br>
                        <br>
                        <column-chart :colors="['#FF9B00']" :data="[['1', 32], ['2', 46], ['3', 28],['4', 32], ['5', 46], ['6', 28],['7', 32], ['8', 46], ['9', 28],['10', 32], ['11', 46], ['12', 28],['13', 46], ['14', 28],['15', 32], ['16', 46], ['17', 28]]"></column-chart>

                    </v-row>
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>
<script>
let currentUrl = window.location.pathname;
console.log("currenturl", currentUrl);
let url = `http://localhost:3000${currentUrl}/`; //igsSerfinanzaCO/basephrases/
console.log("url", url);

export default {
    name: "PxConsumption",
    data(){
        return{
            date: new Date().toISOString().substr(0, 7),
            menu: false,
        }
    },
    computed: {
        submitDate() {
        const date = new Date(this.date).toISOString().substr(0, 7);
        
        console.log(date);
        return date;
        },
    }

}
</script>