import axiosClient from "../axiosClient.js";

const key = import.meta.env.VITE_API_SECRET_KEY;

// Fetch data containing the keyword and extract the objects, pass to the mutations
// Would probably be more consistent and safe to declare a class for artobjects
export function searchArtworks({ commit }, [keyword, maxArtworks]) {
    axiosClient.get(`collection?key=${key}&q=${keyword}&ps=${maxArtworks}&imgonly=True&s=relevance`)
        .then(({data}) => {
            // For testing purposes
            console.log(data.artObjects );
            commit('setSearchedArtworks', data.artObjects);
        })
}

// Fetch a single artwork using the ID provided in the usual artworks search, pass to mutation
export function getArtworkInfo({ commit }, id) {
    axiosClient.get(`collection/${id}?key=${key}`)
        .then(({data}) => {
            commit('setArtworkInfo', data.artObject);
        });
}
// Fetch data containing the matching materials and pass to the mutations
export function searchByMaterial({ commit }, [material, maxArtworks]) {
    axiosClient.get(`collection?key=${key}&material=${material}&ps=${maxArtworks}&imgonly=True&s=relevance`)
        .then(({data}) => {
            commit('setSearchedArtworks', data.artObjects);
        });
}

// Fetch data containing all artworks from the given period, pass to mutations
export function searchByCentury({commit}, [century, maxArtworks]) {
    axiosClient.get(`collection?key=${key}&f.dating.period=${century}&ps=${maxArtworks}&imgonly=True&s=relevance`)
        .then(({data}) => {
            commit('setSearchedArtworks', data.artObjects);
        });
}
