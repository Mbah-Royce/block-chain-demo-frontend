<template>
  <div class="row py-5">
    <div class="col-md-6 offset-md-3">
      <div>
        <div>
          <h3>Wallet</h3>
          <hr />
        </div>
        <form>
          <div class="form-group row py-3">
            <label for="" class="col-sm-2 col-form-label">Private Key</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control overflow-auto"
                :value="this.user[1]"
                disabled
              />
            </div>
          </div>
          <div class="form-group row py-3">
            <label for="" class="col-sm-2 col-form-label">Public Key</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control overflow-auto"
                :value="this.user[0]"
                disabled
              />
            </div>
          </div>
          <div class="form-group row py-3">
            <label for="" class="col-sm-2 col-form-label">Area Owned</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                :value="this.user[2]"
                disabled
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_USER_DATA, GET_USER_TOKEN_GETTER, GET_USER_INFO } from "../store/storeConstants";
export default {
  mounted() {
    this.$store.dispatch(`auth/${GET_USER_INFO}`);
    this.user = this.$store.getters[`auth/${GET_USER_DATA}`];
    this.token = this.$store.getters[`auth/${GET_USER_TOKEN_GETTER}`];
    console.log(this.user[0]);
  },
  data() {
    return {
      user: [],
      token: null,
    };
  }
};
</script>

<style></style>
