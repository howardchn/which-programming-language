<template>
    <div>
        <h1 class="main-title">Which Programming Language</h1>
        <img src="/assets/images/starter.png" />
        <p class="tips">
          In the following contents, some simple questions are ready for you. Follow your heart to answer those questions that will lead you to one programming language you might proper to learn. In the final result, we will represent you the advantage of your chosen programming language.
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

