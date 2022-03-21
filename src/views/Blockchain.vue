<template>
<center>
  <h3 class="b1">LEDGER</h3>
</center>
  <hr />
  <div class="" v-for="(block,index) of blocks" :key="block.index">
    <Block
      :blockId="block.block_id"
      :nonce="block.block_nonce"
      :transactionId="block.transaction_id"
      :transactionAmount="block.transaction_amount"
      :transactionReceiver="block.transactiono_reciver"
      :transactionSender="block.transaction_sender"
      :transactionSignature="block.transaction_signature"
      :hash="block.block_hash"
      :prevHash="block.block_prev_hash"
      :position="index"
      :isAffected="block.isAffected"
      @blockChanged="updateBlocks"
      @blockUndo="undoChange"
    />
  </div>
</template>
<script>
import Block from "../components/Block.vue";
export default {
  mounted() {
    this.getBlocks();
    // this.blocks.push({
    //   block: 1,
    //   chain: 1,
    //   nonce: 11316,
    //   data: "data1",
    //   isAffected:false,
    //   previous:
    //     "0000000000000000000000000000000000000000000000000000000000000000"
    // });
    // this.blocks.push({
    //   block: 2,
    //   chain: 1,
    //   nonce: 35230,
    //   data: "data2",
    //   isAffected:false,
    //   previous:
    //     "000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf"
    // });
    // this.blocks.push({
    //   block: 3,
    //   chain: 1,
    //   nonce: 12937,
    //   data: "data3",
    //   isAffected:false,
    //   previous:
    //     "000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19"
    // });
    // this.blocks.push({
    //   block: 4,
    //   chain: 1,
    //   nonce: 35990,
    //   data: "data4",
    //   isAffected:false,
    //   previous:
    //     "0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf"
    // });
  },
  components: {
    Block
  },
  data() {
    return {
      data: "ddjj",
      blocks: []
    };
  },
  methods: {
    updateBlocks(blockInfo) {
      var hash = "44555";
      this.blocks[blockInfo[3]].previous = hash;
      var i = blockInfo[3];
      for(i; i<this.blocks.length;i++){
        this.blocks[i].isAffected = true
      }
    },
    undoChange(position){
      var i = position;
      for(i; i<this.blocks.length;i++){
        this.blocks[i].isAffected = false
      }
    },
    async getBlocks(){
      await this.$api.get("blocks")
      .then((response) => {
        // console.log(response.data.data);
        this.blocks = response.data.data;
        console.log(this.blocks);
      }).catch((error) => {
        console.log(error)
      })
    }
  }
};
</script>

<style>
.b1 {
  border: 2px black;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  margin-top: 5px;
  margin-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-left: 15px;
  margin-right: 15px;
}</style>
