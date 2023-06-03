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
        paginate (state) {
            return state.searchedArtworks.slice(0,10)
        }
    },
})

export default store;
