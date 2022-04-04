<template>
  <div class="hello border-design rounded">
    <h1>{{ msg }}</h1>
    <h4 class="">
      Working on new implementations of Blockchain Technology in the sales of
      land
    </h4>
    <h4 class="">
      Begin by creating a digital wallet which would contain the area of land
      which you own
    </h4>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data(){
    return{
      url: null,
    }
  },
  
  computed: {
    listData() {
      return this.$store.state.getData.listdata;
    }
  },

  mounted() {
    // this.url = this.$route.params.id !== undefined ? this.$route.params.id : this.$router.push('notFound');
    this.url = this.$route.params.id !== undefined ? this.$route.params.id : "1";
    this.getData();
  },

  methods:{
    getData() {
        console.log("getData")
      this.$store
        .dispatch("GetData/getData", "lastApiLink" + this.url)
        .then(() => {
          console.log("this.listData", this.listData);
        })
        .catch(err => {
          console.log({ err: err });
        });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.border-design{
  border: 2px black;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  margin-top:5px;
  margin-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}
</style>
