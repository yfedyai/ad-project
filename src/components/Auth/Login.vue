<template>
     <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form 
                    ref="form"
                    v-model="valid"
                    validation>
                  <v-text-field 
                    prepend-icon="person" 
                    name="email" 
                    label="Email" 
                    type="email"
                    :rules="emailRules"
                    v-model="email"
                  ></v-text-field>
                  <v-text-field 
                    prepend-icon="lock" 
                    name="password" 
                    label="Password" 
                    type="password"
                    
                    :rules="paswordRules"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                    color="primary"
                    :disabled="!valid || loading"
                    :loading="loading"
                    @click="onSubmit"
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            valid: false,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'  ///validation rules
            ],
            paswordRules : [
                v => !!v || 'Password is required',
                v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
            ] 
        }
    },
    computed: {
      loading() {
        return this.$store.loading
      }
    },
    methods: {
        onSubmit() {
          if (this.$refs.form.validate()) {
            const user = {
              email: this.email,
              password: this.password
            }
            this.$store.dispatch('loginUser',user)
            .then(()=>{
                this.$router.push('/')
              })
              .catch(err => console.log(err))
          }
        }
    },
}
</script>
