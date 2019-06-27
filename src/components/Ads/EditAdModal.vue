<template>
    <v-dialog width="400px" v-model="modal">
        <v-btn class="warning ml-3" slot="activator">Edit</v-btn>
        <v-card>
            <v-contaner>
                <v-layout>
                    <v-flex xs12>
                        <v-card-title>
                            <h1 class="text--primary">Edit ad</h1>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-card-text>
                            Lorem, ipsum.
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn>Cancel</v-btn>
                            <v-btn class="success">Save</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-contaner>
        </v-card>
     </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            modal:false
        }
    },
}
</script>

