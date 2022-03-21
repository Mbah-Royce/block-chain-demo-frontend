<template>
  <div class="row py-5">
    <div class="col-md-6 offset-md-3 border-design">
      <div>
        <div>
          <h3>Create Wallet</h3>
          <hr />
        </div>
        <ul v-if="serverErrors">
          <li v-for="error in serverErrors" v-bind:key="error">
            <div
              class="alert alert-danger"
              v-for="message in error"
              v-bind:key="message"
            >
              {{ message }}
            </div>
          </li>
        </ul>
        <form @submit.prevent="onSignup()">
          <div class="form-group">
            <label for="">Email</label>
            <input type="text" class="form-control" v-model.trim="email" />
          </div>
          <div class="error" v-if="errors.email">{{ errors.email }}</div>
          <div class="form-group">
            <label for="">Name</label>
            <input type="text" class="form-control" v-model.trim="name" />
          </div>
          <div class="error" v-if="errors.password">{{ errors.password }}</div>
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
  SIGNUP_ACTION
} from "../store/storeConstants";
export default {
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      serverErrors: []
    };
  },
  mounted() {},
  methods: {
    ...mapActions("auth", {
      signup: SIGNUP_ACTION
    }),
    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION
    }),
    async onSignup() {
      //make validation
      //code
      //make spinner true
      this.showLoading(true);
      await this.signup({
        email: this.email,
        name: this.name
      }).catch((resErrors) => {
        console.log(resErrors);
        this.showLoading(false);
      });
      this.showLoading(false);
      this.$router.push("/wallet");
    }
  }
};
</script>

<style></style>
