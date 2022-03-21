import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axiosInstance from "../services/axiosInterceptor";

import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

createApp(App).use(Vuex);
createApp(App).use(VueAxios, axios);

const app = createApp(App).use(store).use(router);
app.config.globalProperties.$api = axiosInstance;
app.mount("#app");