<template>
    <div class="container" id="app">
        <h1 class="main-title">{{currentQ.name}}</h1>
        <img :src="currentQ.img" v-if="currentQ.img !== null" />
        <ul class="main-list-container" v-if="current.id >= 0">
            <li class="btn btn-outline-success btn-block" v-for="(q, index) in current.rels" :key="index" v-on:click="next(index, current)">
                {{q.id | detailName}}
            </li>
        </ul>

        <button class="btn btn-block btn-info" v-if="current.id >= 1000" v-on:click="reset">Do it again!
        </button>
        <div v-if="current.id === -1">
            <input id="input_user" class="form-control input-name" type="text" placeholder="Your Name Please" v-model="user" />
            <button class="btn btn-lg btn-block btn-success button-start" v-on:click="next(0, current)" :disabled="user == undefined || user == ''">Start
            </button>
        </div>

        <div id="loadingContainer" v-if="isLoading">
            <div id='circle' class='marginLeft' style="text-align: center;">
                <div id='circle_1' class='circle'></div>
                <div id='circle_2' class='circle'></div>
                <div id='circle_3' class='circle'></div>
                <div class='clearfix'></div>
            </div>
        </div>
    </div>
</template>

<script>
import Lang from "./leanutils";
import Vue from "vue";
import Questions from './questions';
import Relations from './relations';

var questions = new Questions();
questions.load();
Vue.filter('detailName', function (id) {
    return questions.getDetail(id).name;
});

var triggerQuestionChanged = function(relation) {
  Vue.set(data, "current", relation);
  Vue.set(data, "currentQ", questions.getDetail(relation.id));
};

var starterRel = new Relations().starterRelation;
var startQ = questions.getDetail(starterRel.id);
var data = {
  current: starterRel,
  currentQ: startQ,
  user: "",
  isLoading: false
};
export default {
  name: "App",
  data: function() {
    return data;
  },
  methods: {
    next: function(i, v) {
      var nextQuestion = v.rels[i];
      nextQuestion = nextQuestion.id == 0 ? nextQuestion : nextQuestion.rels[0];

      if (nextQuestion.id >= 1000) {
        data.isLoading = true;

        let lang = new Lang();
        lang.set("user", data.user);
        lang.set("lang", questions.getDetail(nextQuestion.id).name);
        lang.save().then(() => {
          data.isLoading = false;
          triggerQuestionChanged(nextQuestion);
        });
      } else {
        triggerQuestionChanged(nextQuestion);
      }
    },
    reset: function() {
      triggerQuestionChanged(starterRel);
    }
  }
};
</script>

