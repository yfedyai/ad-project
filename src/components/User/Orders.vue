<template>
  <v-container>
    <v-layout row>
      <v-flex xs 12 sm6 class="text-xs-center pt-5" v-if="loading">
        <v-progress-circular 
          :size="100" 
          :width="4" 
          indeterminate color="purple"
        ></v-progress-circular>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 v-else-if ="!loading && orders.length !== 0">
          <h1 class="text--secondary mb-3" >Orders</h1>
        <v-list two-line subheader>
          <v-list-tile 
            avatar
            v-for="order in orders"
            :key="order.id"
            >
            <v-list-tile-action>
              <v-checkbox
              color ="success" 
              @change="markDone(order)"
              :input-value="order.done" 
              ></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
                <v-btn
                :to="`/ad/${order.adId}`" 
                class="primary"
                >open</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex xs 12 sm6 class="text-xs-center pt-5" v-else>
        <h1 class="text--secondary">
          You don't have orders
        </h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.loading
    },
    orders() {
      return this.$store.getters.orders
    }
  },
  methods: {
      markDone (order) {
          this.$store.dispatch('markOrderDone', order.id)
            .then(() => {
              order.done = true
            })
            .catch(()=> {})
          order.done = true

      }
  },
  created() {
    return this.$store.dispatch('fetchOrders')
  },

};
</script>
