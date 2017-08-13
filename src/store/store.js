import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
       articlesList: []
   },
    mutations: {
       addArticle (state, article) {
           state.articlesList.push(article);
       }
    }
});