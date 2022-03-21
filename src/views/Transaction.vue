<template>
  <div class="card border-design rounded">
    <div class="card-header">
      <h4>Transaction</h4>
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a href="#" class="nav-link active">Send</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Verify</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <div class="tab-content">
        <div class="tab-pane show active">
          <form
            action=""
            class="form-horizontal"
            @submit.prevent="submitTransaction()"
          >
            <div class="form-group">
              <label for="" class="control label">Tx</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3"
                    >&#13217;</span
                  >
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  v-model.trim="area"
                />
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3">From</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  :value="this.user[0]"
                  disabled
                />
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3">To</span>
                </div>
                <input
                  v-model="reciverPub"
                  type="text"
                  class="form-control overflow-auto"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
            <div class="form-group py-5">
              <label for="" class="control-label">Private Key</label>
              <input
                type="text"
                class="form-control"
                :value="this.user[1]"
                disabled
              />
            </div>
            <!-- <div class="form-group py-1">
              <label for="" class="control-label">Message</label>
              <input
                type="text"
                class="form-control"
                v-model="message"
                disabled
              />
            </div> -->
            <div class="my-3 d-flex justify-content-center">
              <button type="submit" class="btn btn-primary">Sign</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions,mapMutations } from "vuex";
import {
  GET_USER_DATA,
  GET_USER_TOKEN_GETTER,
  TRANSATION_SUBMIT,
  LOADING_SPINNER_SHOW_MUTATION,
  UPDATE_AREA
} from "../store/storeConstants";
export default {
  mounted() {
    var EC = require("elliptic").ec;
    var ec = new EC("secp256k1");

    this.keypair = ec.genKeyPair();

    this.user = this.$store.getters[`auth/${GET_USER_DATA}`];
    this.token = this.$store.getters[`auth/${GET_USER_TOKEN_GETTER}`];
    console.log(this.user[0]);
  },
  data() {
    return {
      user: [],
      reciverPub: null,
      token: null,
      message: null,
      keyPair: null,
      area: null
    };
  },
  methods: {
        ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION,
      updateArea: UPDATE_AREA
    }),
    ...mapActions("auth", {
      transaction: TRANSATION_SUBMIT
    }),
    async submitTransaction() {
      if (this.area > this.user[2]) {
        alert("Insufficient Land!! Only send land <= "+this.user[2]);
      } else {
        console.log(this.textToBin(this.area + this.user[0] + this.reciverPub));
         this.showLoading(true);
        await this.transaction({
          message: this.textToBin(this.area + this.user[0] + this.reciverPub),
          senderPub: this.user[0],
          receiverPub: this.reciverPub,
          area: this.area
        }).catch((resError) => {
          this.showLoading(false);
          console.log(resError)
        });
        this.updateArea(this.user[2] - this.area);
        this.showLoading(false);
              this.$router.replace("/wallet");

        // this.$router.push("/wallet");
      }

      // var reciverPub = reciverPub;
      // // var sendPrv = this.user[1];
      // var transaction = this.area + this.user[0] + this.reciverPub;
      // var binaryMessage = this.keyPair.sign(transaction).toDER();
      // // var hexSignature = buffer.Buffer.from(keypair.sign(binaryMessage).toDER()).toString('hex');
      // this.message = binaryMessage;
    },
    textToBin(text) {
      var length = text.length,
        output = [];
      for (var i = 0; i < length; i++) {
        var bin = text[i].charCodeAt().toString(2);
        output.push(Array(8 - bin.length + 1).join("0") + bin);
      }
      return output.join(" ");
    }
  }
};
</script>

<style>
.border-design{
  border: 2px black;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  margin-top:5px;
  margin-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  margin-left: 15px;
  margin-right: 15px;
}
</style>
