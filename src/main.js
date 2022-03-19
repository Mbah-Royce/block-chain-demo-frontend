import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axiosInstance from "../services/axiosInterceptor";

const app = createApp(App).use(store).use(router);
app.config.globalProperties.$api = axiosInstance;
app.mount("#app");