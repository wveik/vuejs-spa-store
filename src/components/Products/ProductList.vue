<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb3">My products</h1>
                <v-card class="elevation-10 mb-2"
                    v-for="product in products"
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
  data () {
    return {
      products: [
        {
          id: '3',
          title: 'ASUS TUF Gaming FX504GD',
          vendor: 'Asus',
          color: 'black',
          material: 'metal/plastic',
          description: 'Intel Core i7 8750H 2300 MHz/15.6"/1920x1080/12Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
          price: 1220,
          promo: true,
          imageSrc: 'https://image.ibb.co/jBZOMo/ASUS_TUF_Gaming_FX504_GD.jpg'
        },
        {
          id: '4',
          title: 'HP Omen 17',
          vendor: 'Hp',
          color: 'black',
          material: 'metal/plastic',
          description: 'Intel Core i7 7700HQ 2800 MHz/17.3"/1920x1080/12Gb/1128Gb HDD+SSD/DVD-RW/NVIDIA GeForce GTX 1060/Wi-Fi/Bluetooth/Windows 10 Home',
          price: 1600,
          promo: false,
          imageSrc: 'https://image.ibb.co/g6czu8/HP_Omen_17.jpg'
        }
      ]
    }
  }
}
</script>
