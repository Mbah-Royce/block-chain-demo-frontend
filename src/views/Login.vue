<template>
  <div class="row py-5">
    <div class="col-md-6 offset-md-3 border-design">
      <div>
        <div>
          <h3>Access Wallet</h3>
          <hr />
        </div>
        <ul v-if="serverErrors">
          <li v-for="error in serverErrors" v-bind:key="error">
            <div
              class="alert alert-danger"
              v-for="message in error"
              v-bind:key="message"
            >            
            </div>
          </li>
        </ul>
        <form @submit.prevent="onLogin()">
          <div class="form-group">
            <label for="">Public Key</label>
            <input type="text" class="form-control" v-model.trim="publicKey" />
          </div>
          <div class="form-group">
            <label for="">Private Key</label>
            <input type="text" class="form-control" v-model.trim="privateKey" />
          </div>
          <div class="my-3">
            <button type="submit" class="btn btn-primary">Validate</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import {
  LOADING_SPINNER_SHOW_MUTATION,
  LOGIN_ACTION,
} from "../store/storeConstants";
export default {
  components: {},
  data() {
    return {
      publicKey: null,
      privateKey: null,
      error: []
    };
  },
  mounted() {},
  methods: {
    ...mapActions("auth", {
      login: LOGIN_ACTION
    }),
    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION
    }),
    async onLogin() {
      this.showLoading(true);
      await this.login({
        publicKey: this.publicKey,
        privateKey: this.privateKey
      }).catch((resErrors) => {
        this.showLoading(false);
        console.log(resErrors);
      });
      this.showLoading(false);
      this.$router.push("/wallet");
    }
  }
};
</script>

<style scoped>
.border-design{
  border: 2px black;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  margin-left: 25%;
}
</style>
