import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import SearchByArtist from "../views/SearchByArtist.vue";
import SearchByLetter from "../views/SearchByLetter.vue";
import SearchByCentury from "../views/SearchByCentury.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";

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
                path: '/by-artist/:artist?',
                name: 'byArtist',
                component: SearchByArtist
            },
            {
                path: '/by-century/:century?',
                name: 'byCentury',
                component: SearchByCentury
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: SearchByLetter
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
