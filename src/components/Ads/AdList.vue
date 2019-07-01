<template>
  <v-container>
    <v-layout row v-if="!loading && myAds.length !== 0">
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My Ads</h1>
        <v-card class="elevation-10 mb-3" v-for="ad in myAds" :key="ad.id">
          <v-layout row>
            <v-flex xs-4>
              <v-card-media :src="ad.imageSrc" height="160px" width="200px"></v-card-media>
            </v-flex>
            <v-flex xs-8>
              <v-card-text>
                <h2 class="text--primary">{{ad.title}}</h2>
                <p>{{ad.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="info" :to="`/ad/${ad.id}`">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout  v-else-if="!loading && myAds.lenth === 0">
      <v-flex xs12 class="text-xs-center">
          <h1 class="text-primary">You have no Ads</h1>
      </v-flex>
    </v-layout>
    <v-layout  v-else>
      <v-flex xs12 class="text-xs-center">
          <v-progress-circular 
            :size="100" 
            :width="4" 
            indeterminate color="purple"
          ></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds() {
      return this.$store.getters.myAds;
    },
    loading() {
      return this.$store.getters.loading
    }
  }
};
</script>
