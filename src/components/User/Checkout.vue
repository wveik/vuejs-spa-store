<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text-secondary mb-3">Orders</h1>
                    <v-list
                        subheader
                        two-line
                        >

                        <v-list-tile avatar
                            v-for="order in orders"
                            :key="order.id"
                        >
                            <v-list-tile-action>
                                <v-checkbox
                                    color="success"
                                    :input-value="order.done"
                                    @change="markDone(order)"
                                ></v-checkbox>
                            </v-list-tile-action>

                            <v-list-tile-content>
                                <v-list-tile-title>{{ order.name }}</v-list-tile-title>
                                <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-btn 
                                    :to="'/product/' + order.productId"
                                class="primary">Open</v-btn>
                            </v-list-tile-action>
                        </v-list-tile>
                    
                    </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: '1',
          name: 'Mihail',
          phone: '33-33-33',
          productId: '1',
          done: false
        },
        {
          id: '2',
          name: 'Tolia',
          phone: '777-11-56',
          productId: '2',
          done: false
        },
        {
          id: '3',
          name: 'Serega',
          phone: '141-211-12',
          productId: '4',
          done: true
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>
