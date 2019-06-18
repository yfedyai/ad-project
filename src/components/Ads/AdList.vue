<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My Ads</h1>
                <v-card>
                    <v-layout row>
                        <v-flex xs-4>
                            <v-card-media>

                            </v-card-media>
                        </v-flex>
                        <v-flex xs-8>
                            <v-card-text></v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn class="info">Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
