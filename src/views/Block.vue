<template>
  <div class="container">
    <h1>Block</h1>
    <div class="block block-success" id="blocks">
      <form action="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label" for="block1chain1number"
            >Block:</label
          >
          <div class="col-sm-10">
            <div class="input-group">
              <span class="input-group-addon">#</span
              ><input
                class="form-control"
                id="block1chain1number"
                type="number"
                v-model.trim="blockId"
                @keyup="updateHash()"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label" for="block1chain1number"
            >Nonce:</label
          >
          <div class="col-sm-10">
            <div class="input-group">
              <input
                class="form-control"
                id="block1chain1number"
                type="number"
                readonly
                v-model.trim="nonce"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label" for="block1chain1number"
            >Data:</label
          >
          <div class="col-sm-10">
            <div class="input-group">
              <textarea
                class="form-control"
                id="block1chain1number"
                rows="10"
                type="number"
                v-model.trim="data"
                @keyup="updateHash()"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label" for="block1chain1number"
            >Hash:</label
          >
          <div class="col-sm-10">
            <div class="input-group">
              <input
                class="form-control"
                id="block1chain1number"
                type="number"
                readonly
                v-model.trim="hash"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-2">
            <i class="icon-spinner icon-spin icon-large"></i>
          </div>
          <div class="col-sm-10">
            <button
              class="btn btn-primary ladda-button"
              id="block1chain1mineButton"
              data-style="expand-right"
            >
              <span class="ladda-label">Mine</span
              ><span class="ladda-spinner"></span>
              <div class="ladda-progress" style="width: 0px"></div>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blockId: "",
      nonce: "",
      data: "",
      hash: "",
    };
  },
  computed: {
    updateHashValue() {
      return this.blockId + " " + this.data;
    },
  },
  methods: {
    updateHash() {
      this.hash = this.blockId + this.data;
      console.log(this.blockId + " " + this.data);
    },
  },
};
</script>

<style>
h1 {
  margin-top: 20px;
  margin-bottom: 10px;
}
.block-success {
  background: rgb(223, 240, 216);
}
/* .well{
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
} */
</style>
