export default {
    state: {
        ads: [
            {
                title: "First ad",
                description: "hHello i am discription",
                promo: false,
                imageSrc: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
                id: "123"
              },
              {
                title: "Second ad",
                description: "hHello i am discription",
                promo: true,
                imageSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
                id: "1234"
              },
              {
                title: "Third ad",
                description: "hHello i am discription",
                promo: true,
                imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
                id: "12345"
              }
        ]
    },
    mutations:{},
    actions:{},
    getters:{
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => ad.promo === true)
        },
        myAds(state) {
            return state.ads
        }
    }
}