<template>
    <div>
        <h1 class="main-title">Which Programming Language</h1>
        <img src="/assets/images/starter.png" />
        <div>
            <input id="input_user" class="form-control input-name" type="text" placeholder="Your Name Please" v-model="user" />
            <button class="btn btn-lg btn-block btn-success button-start" :disabled="user == undefined || user == ''">Start
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data: function() {
        return {
            user: 'Howard'
        }
    },
    methods: {
    }
}
</script>
