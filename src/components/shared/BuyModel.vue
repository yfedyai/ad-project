<template>
    <v-dialog width="400px" v-model="modal">
        <v-btn class="warning ml-3" slot="activator">Buy</v-btn>
        <v-card>
            <v-container>
                <v-layout>
                    <v-flex xs12>
                        <v-card-title>
                            <h1 class="text--primary">Do you want to buy it?</h1>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field 
                                name="name" 
                                label="Name" 
                                type="text"
                                v-model="name"
                            ></v-text-field>
                            <v-text-field 
                                name="phone" 
                                label="Your phone" 
                                type="text"
                                v-model="phone"
                                multi-line
                            ></v-text-field>                    
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn 
                                flat 
                                @click="onCancel"
                                :disabled = "localLoading"
                            >
                                Close</v-btn>
                            <v-btn 
                                class="success" 
                                flat 
                                @click="onSave"
                                :disabled = "localLoading"
                                :loading = "localLoading"
                            >
                                buy it</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
     </v-dialog>
</template>

<script>
export default {
    props: ['ad'],
    data() {
        return {
            modal: false,
            name: '',
            phone: '',
            localLoading: false
        }
    },
    methods: {
        onCancel() {
            this.name = ''
            this.phone = ''
            this.modal = false
            
        },
        onSave () {
            if (this.name !== '' && this.name !== '') {
                this.localLoading = true
                this.$store.dispatch('createOrder', {
                    name: this.name,
                    phone: this.phone,
                    adId:this.ad.id,
                    ownerId: this.ad.ownerId
                })
                .finally (()=> {
                    this.phone = '',
                    this.name = '',
                    this.modal = false,
                    this.localLoading = false
                })
                
            }

        }
        
    },
}
</script>