import * as fb from 'firebase'

class Order {
    constructor (name, phone, adId, done = false , id = null) {
        this.name = name
        this.phone = phone
        this.adId = adId
        this.done = done
        this.id = id
    }
}


export default {
    state:{
        orders:[]
    },
    mutations:{
        loadOrders(state, payload) {
            state.orders = payload
        }
    },
    actions:{
        async createOrder({commit}, {name, phone, adId, ownerId}) {
            const order = new Order (name, phone, adId)
            commit('clearError')

            try {             
                await fb.database().ref(`/users/${ownerId}/orders`).push(order)
            } catch (error) {
                commit('setError', error.message)
                throw error
            }
           
        }
    },
    getters:{}

}