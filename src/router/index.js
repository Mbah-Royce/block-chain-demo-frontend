import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Block from "../views/Block.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import BlockChain from "../views/Blockchain.vue";
import Transaction from "../views/Transaction.vue";
import Wallet from "../views/Wallet.vue";
// import { AUTO_LOGIN_ACTION } from "../store/storeConstants";
const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/block",
        name: "Block",
        component: Block
    },
    {
        path: "/wallet",
        name: "Wallet",
        component: Wallet
    },
    {
        path: "/chain",
        name: "Chain",
        component: BlockChain
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
        meta: { auth: false }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { auth: false }
    },
    {
        path: "/transaction",
        name: "Transaction",
        component: Transaction,
        meta: { auth: false }
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to) => {
    console.log(to);
});

router.beforeEach((to) => {
    if (to.fullPath == "/wallet") {
        // this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`);
    }
});

export default router;