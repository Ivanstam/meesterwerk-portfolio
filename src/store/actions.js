import axiosClient from "../axiosClient.js";

const key = '0QSmn1vm';
export function searchArtworks({ commit }, artist) {
    axiosClient.get(`collection?key=${key}&involvedMaker=${artist}`)
        .then(({data}) => {
            console.log(data.artObjects );
            commit('setSearchedArtworks', data.artObjects)
        })
}