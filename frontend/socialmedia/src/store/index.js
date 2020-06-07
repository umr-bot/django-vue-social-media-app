import Vuex from 'vuex';
import Vue from 'vue';
import groups from "./modules/groups";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        groups
    }
});