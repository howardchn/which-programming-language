<template>
    <div>
        <h1 class="main-title">{{ name }}</h1>
        <img :src="'/assets/images/' + img" />

        <div class="container content-container">
            <section>
                <header><h4>Feature</h4></header>
                <p class="desc" v-html="desc"></p>
            </section>

            <div class="row">
                <div class="col">
                    <section>
                        <header><h6>Difficulty</h6></header>
                        <star-rating v-model="diff" :read-only="true" :star-size="20" active-color="#28a745"></star-rating>
                    </section>
                    <section>
                        <header><h6>Popularity</h6></header>
                        <star-rating v-model="pop" :read-only="true" :star-size="20" active-color="#28a745"></star-rating>
                    </section>
                </div>
                <section class="col">
                    <header><h6>Used by</h6></header>
                    <p>{{ used }}</p>
                </section>
            </div>
            
            <div class="row btn-back-container">
                <router-link to="/" class="btn btn-block btn-success button-start">
                    Do it again?
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import QuestionService from '../question-service';
import LeanUtils from '../leanutils';
import StarRating from 'vue-star-rating';

let questionService = new QuestionService(); 
export default {
    name: 'Results',
    data: function() {
        let id = this.$route.params.id;
        let result = questionService.result(id);

        let lang = new LeanUtils();
        lang.set("user", '');
        lang.set("lang", result.name);
        lang.save();

        return result;
    },
    methods: {
        reset: function() {
            this.$router.reset();
            this.$router.push({ path: '/home' });
        }
    },
    components: { StarRating }
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
    margin-top: 10px;
    list-style-type: disc;
}

div.content-container {
    max-width: 350px;
    margin: 10px auto;
}

section {
    margin-top: 10px;
}

span.vue-star-rating-rating-text {
    display: none;
}

.btn-back-container {
    margin-top: 20px;
}
</style>

