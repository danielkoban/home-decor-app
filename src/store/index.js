import { createStore } from 'vuex';

const store = createStore({
    state: {
        items: [
            {
                id: 1,
                url: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg"
            },
            {
                id: 2,
                url: "https://images.pexels.com/photos/5627275/pexels-photo-5627275.jpeg"
            },
            {
                id: 3,
                url: "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png"
            },
            {
                id: 4,
                url: "https://images.pexels.com/photos/3889873/pexels-photo-3889873.jpeg"
            },
            {
                id: 5,
                url: "https://images.pexels.com/photos/2346925/pexels-photo-2346925.jpeg"
            },
        ]
    },
    mutations: {
        setItems(state, payload) {
            state.items = payload
        },

        // selectItem(state, id) {
        //     state.items = state.items.filter(item => item.id != id);
        // }
    },
    actions: {
        // selectItem({ commit, state }, id) {
        //     commit("selectItem", id)
        // }
    },
    getters: {
        setItems(state) {
            return state.items
        },
    }
})

export default store;