<template>
    <div>
        <h1 class="main-title">Which Programming Language</h1>
        <img src="assets/images/starter.png" />
        <p class="tips">
          Get to know your programming language with few questions. Enjoy it!
        </p>
        <div>
          <button class="btn btn-lg btn-block btn-success button-start" 
                  v-on:click="start()">
                  Let's Start
          </button>
        </div>
    </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return { };
  },
  methods: {
    start: function() {
      this.$router.push({ path: "/questions/1" });
    }
  }
};
</script>

<style>
img {
  margin-top: 20px;
}
</style>

