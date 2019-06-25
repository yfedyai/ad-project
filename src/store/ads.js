import * as fb from 'firebase'


class Ad  {
    constructor (title, description, ownerId, imageSrc = '', promo = false, id = null) {
        this.title = title
        this.description = description
        this.ownerId = ownerId
        this.imageSrc = imageSrc
        this.promo = promo
        this.id = id
    }
}


export default {
    state: {
        ads: []
    },
    mutations:{
        createAd(state,payload) {
            state.ads.push(payload)
        },
        loadAds(state,payload) {
            state.ads = payload
        }
    },
    actions:{
        async createAd({commit, getters}, payload) {
            
            commit('clearError')
            commit('setLoading', true)

            try {
                const newAd = new Ad (payload.title, payload.description, getters.user.id, payload.imageSrc, payload.promo) 
                console.log(newAd)
                const ad = await fb.database().ref('ads').push(newAd)
                commit('setLoading', false)
                commit('createAd', {
                    ...newAd,
                    id: ad.key
                })
                
            } catch(error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
        },
        async fetchAds({commit}){
            commit('clearError')
            commit('setLoading',true)
            const resultAds = []
            try {
               const fbVal = await fb.database().ref('ads').once('value')

               const ads = fbVal.val()
               Object.keys(ads).forEach(key => {
                //    console.log(Object.keys(ads))
                //    console.log(key)
                //    console.log(ads[key])
                   const ad= ads[key]
                   resultAds.push(
                       new Ad (ad.title, ad.description, ad.ownerId, ad.imageSrc, ad.promo, key)
                       ) 
               })
               commit('loadAds', resultAds)
               commit('setLoading', false)
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
            
        }
    },
    getters:{
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => ad.promo === true)
        },
        myAds(state) {
            return state.ads
        },
        addById(state){
            return addId => {
                return state.ads.find(ad => ad.id === addId)
            }
        }
    }
}