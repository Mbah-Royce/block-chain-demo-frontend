<template>
  <NavigationBar />
  <Loader v-if="showLoading"></Loader>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <!-- <router-view /> -->
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import NavigationBar from "./components/NavigationBar.vue";
import Loader from "./components/Loader.vue";
import { AUTO_LOGIN_ACTION } from "../src/store/storeConstants";
export default {
  name: "app",
  created() {
    this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`);
  },
  computed: {
    ...mapState({
      showLoading: (state) => state.showLoading
    })
  },
  components: {
    NavigationBar,
    Loader
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
