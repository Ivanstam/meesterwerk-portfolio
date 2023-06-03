import { createStore } from 'vuex'
import state from './state.js'
import * as actions from './actions.js'
import * as mutations from './mutations.js'
import * as getters from './getters.js'

const store = createStore({
    state,
    actions,
    mutations,
    getters: {
        paginate: (state) => (index, max) => {
            return state.searchedArtworks.slice(index, max)
        }
    },
})

export default store;
