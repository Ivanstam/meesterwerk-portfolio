import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import SearchByCentury from "../views/SearchByCentury.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import ArtworkInfo from "../views/ArtworkInfo.vue";
import SearchArtworks from "../views/SearchArtworks.vue";
import SearchByMaterial from "../views/SearchByMaterial.vue";

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/search/:keyword?',
                name: 'searchArtworks',
                component: SearchArtworks
            },
            {
                path: '/by-century/:century?',
                name: 'byCentury',
                component: SearchByCentury
            },
            {
                path: '/by-material/:material?',
                name: 'byMaterial',
                component: SearchByMaterial
            },
            {
                path: 'artwork/:id?',
                name: 'artworkInfo',
                component: ArtworkInfo
            }
        ]
    },
    {
        path: '/guest',
        component: GuestLayout
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
