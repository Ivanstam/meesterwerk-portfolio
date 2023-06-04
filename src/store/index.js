import { createStore } from 'vuex'
import state from './state.js'
import * as actions from './actions.js'
import * as mutations from './mutations.js'
// Currently unused
import * as getters from './getters.js'

const store = createStore({
    state,
    actions,
    mutations,
    // Couldn't reach the getters properly in their own store file, so for now it's done here
    getters: {
        paginate: (state) => (index, max) => {
            return state.searchedArtworks.slice(index, max)
        }
    },
})

export default store;
