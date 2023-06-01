import axiosClient from "../axiosClient.js";

const key = '0QSmn1vm';

// Fetch the latest 20 artworks with pictures using the artist name and pass to the mutation
export function searchArtworks({ commit }, artist) {
    axiosClient.get(`collection?key=${key}&q=${artist}&ps=20&imgonly=True&s=relevance`)
        .then(({data}) => {
            console.log(data.artObjects );
            commit('setSearchedArtworks', data.artObjects);
        })
}

// Fetch a single artwork using the ID provided in the usual artworks search, pass to mutation
export function getArtworkInfo({ commit }, id) {
    axiosClient.get(`collection/${id}?key=${key}`)
        .then(({data}) => {
            console.log(data);
            commit('setArtworkInfo', data.artObject);
        });
}

export function searchByMaterial({ commit }, material) {
    axiosClient.get(`collection?key=${key}&material=${material}&ps=20&imgonly=True&s=relevance`)
        .then(({data}) => {
            console.log(data.artObjects );
            commit('setArtworksMaterial', data.artObjects);
        })
}

