<template>
    <div>
        <h1 class="main-title">{{ question.name }}</h1>
        <img :src="question.image" v-if="question.image !== null" />
        <ul class="main-list-container">
            <li class="btn btn-outline-success btn-block" 
                v-for="(answer, index) in answers" 
                :key="index" 
                v-on:click="next(answer.rid)">
                {{ answer.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import QuestionService from '../question-service';
let questionService = new QuestionService();
export default {
    name: 'Questions',
    data: function() {
        let id = this.$route.params.id;
        let question = questionService.query(id);
        return question;
    },
    methods: {
        next: function(id) {
            let relationId = questionService.nextId(id);
            let relation = questionService.queryRelation(relationId);
            let questionId = relation.qid;

            if(questionId >= 1000) {
                this.$router.push({ path: `/results/${questionId}` });
            }
            else {
                this.$router.push({ path: `/questions/${relationId}` });
            }
        }
    },
    watch: {
        '$route' (to, from) {
            this.$router.go(0);
        }
    }
}
</script>
