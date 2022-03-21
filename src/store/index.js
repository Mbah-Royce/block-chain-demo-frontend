import { createStore } from "vuex";

import auth from "./modules/auth/store";
import { LOADING_SPINNER_SHOW_MUTATION } from "./storeConstants";
import GetData from "./GetData";



import axios from 'axios';





axios.defaults.baseURL = 'http://www.localhost/';

export default createStore({
    state: {
        showLoading: false
    },
    mutations: {
        [LOADING_SPINNER_SHOW_MUTATION](state, payload) {
            state.showLoading = payload;
        }
    },
    actions: {},
    modules: {
        auth,
        GetData
    }
});