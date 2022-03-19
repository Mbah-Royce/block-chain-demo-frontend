<template>
  <div class="bar">
    <nav class="container navbar navbar-expand-lg bg-color navbar-fixed-top">
      <a class="navbar-brand" href="#">Blockchain Demo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul
          class="nav navbar-nav d-flex justify-content-center"
          style="width: 80%"
        >
          <li class="nav-item active" v-if="isAuth">
            <router-link class="nav-link" to="/">Network</router-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <router-link class="nav-link" to="/block">Block</router-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <router-link class="nav-link" to="/chain">Blockchain</router-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <router-link class="nav-link" to="/transaction"
              >Transactions</router-link
            >
          </li>
          <li class="nav-item" v-if="isAuth">
            <router-link class="nav-link" to="/post">Tokens</router-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <router-link class="nav-link" to="/wallet">Wallet</router-link>
          </li>
        </ul>

        <ul class="nav navbar-nav ms-auto">
          <li class="nav-item active" v-if="!isAuth">
            <router-link class="nav-link" to="/signup"
              >Create Wallet</router-link
            >
          </li>
          <li class="nav-item" v-if="!isAuth">
            <router-link class="nav-link" to="/login"
              >Access Wallet</router-link
            >
          </li>
          <li class="nav-item" v-if="isAuth">
            <router-link
              class="nav-link"
              @click.prevent="onLogout()"
              to="/login"
              >Close Wallet</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  IS_USER_AUTHENTICATE_GETTER,
  LOGOUT_ACTION
} from "../store/storeConstants";
export default {
  computed: {
    ...mapGetters("auth", {
      isAuth: IS_USER_AUTHENTICATE_GETTER
    })
  },
  methods: {
    ...mapActions("auth", {
      logout: LOGOUT_ACTION
    }),
    onLogout() {
      this.logout();
      this.$router.replace("/login");
    }
  }
};
</script>

<style>
.bg-color {
  background-color: #222222;
}
.navbar-brand,
.nav-link {
  color: #9d9d9d;
}
.nav-link:hover {
  color: #ffffff;
}
</style>
