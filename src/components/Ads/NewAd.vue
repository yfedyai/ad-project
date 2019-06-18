<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form ref="form" v-model="valid" validation>
          <v-text-field
            name="email"
            label="Ad title"
            type="text"
            :rules="[v => !!v || 'title required' ]"
            v-model="title"
          ></v-text-field>
          <v-textarea
            name="description"
            label="Ad description"
            type="text"
            multi-line
            :rules="[v => !!v || 'description is required' ]"
            v-model="description"
          ></v-textarea>
        </v-form>
        <v-layout row class="mt-3">
          <v-flex xs-12>
            <v-btn color="warning">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
            <v-layout row >
              <v-flex xs="12">
                <img src="" alt height="100">
              </v-flex>
            </v-layout>
            <v-layout row >
              <v-flex xs="12">
                <v-switch 
                    color="primary"
                    v-model="promo" 
                    label="add to promo?"
                ></v-switch>
              </v-flex>
            </v-layout>
            <v-layout row >
              <v-flex xs="12">
               <v-spacer></v-spacer>
               <v-btn 
                :disabled="!valid"
                class="success"
                @click="createAd"
                >Create Ad</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        title: '',
        description:'',
        promo:false,
        valid:false
    };
  },
  methods: {
      createAd() {
          if (this.$refs.form.validate()) {
              const ad = {
                  title: this.title,
                  description:this.description,
                  promo:this.promo
              }
              console.log(ad)
              
              
      }
  }
}
}
</script>