import axiosClient from "../axiosClient.js";
import axios from "axios";

const key = import.meta.env.VITE_API_SECRET_KEY;

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
        });
}

export function searchByCentury({commit}, century) {
    axiosClient.get(`collection?key=${key}&f.dating.period=${century}&ps=20&imgonly=True&s=relevance`)
        .then(({data}) => {
            console.log(data.artObjects);
            commit('setArtworksCentury', data.artObjects);
        });
}
