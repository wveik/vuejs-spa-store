<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb3">My products</h1>
                <v-card class="elevation-10 mb-2"
                    v-for="product in myProducts"
                    :key="product.id"
                >
                    <v-layout>
                        <v-flex xs4>
                            <v-img :src="product.imageSrc" height="250px"></v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ product.title }}</h2>
                                <p>{{ product.description }}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn :to="'/product/' + product.id" class="info">Open</v-btn>
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
  computed: {
    myProducts () {
      return this.$store.getters.myProducts
    }
  }
}
</script>
