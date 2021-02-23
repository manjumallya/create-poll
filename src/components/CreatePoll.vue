<template>
    <div>
        <form class="outline">
            <div class="form-group ">
                <input type="text" test-data-id="question-data" maxlength="80" v-model="voteQuestion" class="form-control" placeholder="Enter the question">
            </div>
           <AddQuestion @optionChanged="emitResetVote"/>
        </form>

    </div>
</template>
<script>
    import AddQuestion from "./AddQuestion";
    export default {
        name: 'CreatePoll',
        components: {AddQuestion},
        props: {
            option : {
                type: String,
                default : '',
            }
        },
        data() {
            return {
                voteQuestion: '',
            }
        },
        updated() {
            this.$store.dispatch('updateQuestion', this.voteQuestion)
        },
        methods: {
            emitResetVote: function () {
                this.$emit('resetVotes')
            }
        }
    }
</script>
<style>
    .outline {
        outline: 1px solid;
        outline-offset: 24px;
    }
</style>
