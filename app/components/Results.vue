<template>
    <div>
        <h1 class="main-title">{{ name }}</h1>
        <img :src="'/assets/images/' + img" />
        <p class="desc" v-html="desc"></p>
    </div>
</template>

<script>
import QuestionService from '../question-service';
let questionService = new QuestionService(); 

export default {
    name: 'Results',
    data: function() {
        let id = this.$route.params.id;
        let result = questionService.result(id);
        return result;
    }
}
</script>

<style>
.desc {
    max-width: 350px;
    margin: 25px auto;
}

ul {
    padding-left: 0px;
}

ul li {
    margin-top: 15px;
}

/* ul li:before {
  content: '✓ ';
} */
</style>

