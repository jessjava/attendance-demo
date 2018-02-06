import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import user from './modules/user';
import attendance from './modules/attendance'

Vue.use(Vuex);

const store = new Vuex.Store({
    mutations: {
        //
    },
    actions: {

    },
    modules: {
        app,
        user,
        attendance
    }
});

export default store;
