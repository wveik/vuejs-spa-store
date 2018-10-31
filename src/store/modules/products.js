export default {
  state: {
    products: [
      {
        id: '2',
        title: 'Asus FX503VD',
        vendor: 'Asus',
        color: 'white',
        material: 'plastic',
        description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD нет/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
        price: 984,
        promo: true,
        imageSrc: 'https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },
      {
        id: '1',
        title: 'Lenovo Legion Y520',
        vendor: 'Lenovo',
        color: 'black',
        material: 'metal/plastic',
        description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
        price: 760,
        promo: false,
        imageSrc: 'https://images.pexels.com/photos/7350/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },
      {
        id: '3',
        title: 'ASUS TUF Gaming FX504GD',
        vendor: 'Asus',
        color: 'black',
        material: 'metal/plastic',
        description: 'Intel Core i7 8750H 2300 MHz/15.6"/1920x1080/12Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
        price: 1220,
        promo: true,
        imageSrc: 'https://images.unsplash.com/photo-1520510203262-aa7a8659f06b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=793c7ac7b67ef6df8bddb710937ffa70&auto=format&fit=crop&w=1350&q=80'
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
        imageSrc: 'https://images.pexels.com/photos/6972/summer-office-student-work.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },
      {
        id: '5',
        title: 'Acer Swift 5 SF514',
        vendor: 'Acer',
        color: 'gold',
        material: 'metal',
        description: 'Intel Core i7 8550U 1800 MHz/14"/1920x1080/16Gb/512Gb SSD/DVD нет/Intel HD Graphics 620/Wi-Fi/Bluetooth/Windows 10 Home',
        price: 1100,
        promo: true,
        imageSrc: 'https://images.pexels.com/photos/7062/man-people-space-desk.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },
      {
        id: '6',
        title: 'Apple MacBook (MLHC2RU/A)',
        vendor: 'Apple',
        color: 'silver',
        material: 'metal',
        description: 'Intel Core m3 1200 MHz/12"/2304x1440/8Gb/256Gb SSD/DVD нет/Intel HD Graphics 615/Wi-Fi/Bluetooth/MacOS X',
        price: 980,
        promo: true,
        imageSrc: 'https://images.pexels.com/photos/7372/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    products (state) {
      return state.products
    },
    promoProducts (state) {
      return state.products.filter(x => {
        return x.promo
      })
    },
    myProducts (state) {
      return state.products
    },
    productById (state) {
      return productId => {
        return state.products.find(x => x.id === productId)
      }
    }
  }
}
