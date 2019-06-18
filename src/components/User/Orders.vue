<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
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
              @onchange="markDone(order)"
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
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        orders:[
            {
                id:'fas21',
                name:'Vladlen',
                phone: '0-93-213-2-1',
                adId: '123',
                done:false
            }
        ]
    };
  },
  methods: {
      markDone (order) {
          order.done = true
      }
  },
};
</script>
