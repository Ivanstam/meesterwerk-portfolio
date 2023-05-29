import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import ArtworkList from "../views/ArtworkList.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/letter/:letter',
        name: 'byLetter',
        component: ArtworkList
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
