import appGrid from '../components/appGrid.vue';
import articleView from '../components/articleView.vue';

export const routes = [
    { path: '/', component: appGrid },
    { path: '/article', component: articleView }
];