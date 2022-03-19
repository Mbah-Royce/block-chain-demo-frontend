<template>
  <div class="row py-5">
    <div class="col-md-6 offset-md-3">
      <div>
        <div>
          <h3>Block {{ position }}</h3>
          <hr />
        </div>
        <form
          @submit.prevent="onSignup()"
          class="py-1 px-5 rounded-3 success"
          :class="{ failure: isAffected }"
        >
          <div class="form-group row py-3">
            <label for="" class="col-sm-2 col-form-label">Block ID</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                @keyup="updateBlock(blockId, blockNum)"
                v-model="blockNum"
              />
            </div>
          </div>
          <div class="form-group row py-3">
            <label for="" class="col-sm-2 col-form-label">Nonce</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                @keyup="updateBlock(nonce, blockNonce)"
                v-model="blockNonce"
              />
            </div>
          </div>
          <div class="form-group row py-3">
            <label for="" class="col-sm-2 col-form-label">Tx Id</label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                @keyup="updateBlock(transactionId, transId)"
                v-model="transId"
              />
            </div>
            <label for="" class="col-sm-2 col-form-label">Tx Area</label>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control"
                @keyup="updateBlock(transactionAmount, area)"
                v-model.trim="area"
              />
            </div>
          </div>
                    <div class="form-group row py-3">
            <label for="" class="col-sm-2 col-form-label">From</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                @keyup="updateBlock(transactionSender, sender)"
                    v-model="sender"
              />
            </div>
          </div>
              <div class="form-group row py-3">
            <label for="" class="col-sm-2 col-form-label">To</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                @keyup="updateBlock(transactionReceiver, reciever)"
                    v-model="reciever"
              />
            </div>
          </div>
          <div class="form-group row py-3">
            <label for="" class="col-sm-2 col-form-label">Signature</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                @keyup="updateBlock(transactionSignature, signature)"
                    v-model="signature"
              />
            </div>
          </div>
          <div class="form-group row py-3">
            <label for="" class="col-sm-2 col-form-label">Prev Hash</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                :value="prevHash"
                disabled
              />
            </div>
          </div>
          <div class="form-group row py-3">
            <label for="" class="col-sm-2 col-form-label">Hash</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" :value="hash" disabled />
            </div>
          </div>
          <!-- <div class="my-3">
            <button type="submit" class="btn btn-primary">Mine</button>
          </div> -->
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  emits: {
    blockChange(payload) {
      if (payload[0] && payload[1] && payload[2] && payload[3]) {
        console.log(payload[0] + "is emit");
        return true;
      }
    }
  },
  props: {
    blockId: String,
    nonce: String,
    hash: String,
    prevHash: String,
    position: Number,
    isAffected: Boolean,
    transactionId: String,
    transactionAmount: String,
    transactionReceiver: String,
    transactionSender: String,
    transactionSignature: String
  },
  data() {
    return {
      blockNum: this.blockId,
      blockNonce: this.nonce,
      area: this.transactionAmount,
      sender: this.transactionSender,
      reciever: this.transactionReceiver,
      signature: this.transactionSignature,
      transId: this.transactionId,
      isActive: this.isAffected
    };
  },
  methods: {
    updateBlock(init, newVal) {
      if (init != newVal && newVal) {
        console.log(
          "in the block" +
            this.blockNum +
            " " +
            this.blockNonce +
            " " +
            this.blockData
        );
        var blockInfo = [
          this.blockNum,
          this.blockNonce,
          this.blockData,
          this.position
        ];
        this.$emit("blockChanged", blockInfo);
      } else {
        this.$emit("blockUndo", this.position);
      }
    }
  }
};
</script>

<style>
.success {
  background-color: rgb(223, 240, 216);
}
.failure {
  background: rgb(250, 220, 220);
}
</style>
