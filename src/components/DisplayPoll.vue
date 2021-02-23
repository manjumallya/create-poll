<template>
    <div class="outline-vote">
        <article >
            <h3 test-data-id="poll-question" class="text-break">{{question}}</h3>
        </article>
        <div v-if="question != ''">
            <div class="form-group row ml-2" v-for="(input, index) in options"
                 :key="`option-${index}`">
                <div v-if="input.option !== '' && input.option !== undefined">
                    <input type="radio" :test-data-id="`option-radio-${index}`" :id="`${index}`" :value="`${input.option}`" v-model="votedValue">
                    <label :for="`${index}`">{{input.option}}</label>
                </div>
            </div>
        </div>
        <div v-if="options.length > 2 && question != ''" class="float-right">
            <button type="button" test-data-id="vote-button" @click="vote">Vote</button>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: 'DisplayPoll',
        data() {
            return{
                votedValue: '',
                votingResults: [],
                totalVotes: 0,
            }
        },
        computed: mapState({
            question(state) {
                return state.applicationStates.question
            },
            options(state) {
                return state.applicationStates.options
            }
        }),
        methods: {
          vote: function () {
               this.options.forEach( async (option) => {
                  const obj = {
                      label: option.option,
                      value: 1
                  };
                    if(option.option === this.votedValue) {
                        if (this.votingResults.length == 0) {
                            this.votingResults.push(obj)
                            this.totalVotes++
                            await this.$store.dispatch('updateTotalVotes', this.totalVotes)
                            await this.$store.dispatch('updateVotingResults', this.votingResults)
                        } else {
                            for (const json in this.votingResults) {
                                if (this.votingResults[json].label === this.votedValue) {
                                    this.votingResults[json].value++
                                    this.totalVotes++
                                    await this.$store.dispatch('updateTotalVotes', this.totalVotes)
                                    await this.$store.dispatch('updateVotingResults', this.votingResults)
                                    return
                                }
                            }
                            this.votingResults.push(obj);
                            this.totalVotes++
                            await this.$store.dispatch('updateTotalVotes', this.totalVotes)
                            await this.$store.dispatch('updateVotingResults', this.votingResults)
                            return
                        }
                    }

              })
          }
        },
    }
</script>
<style>
    .outline-vote {
        outline: 1px solid;
        outline-offset: -2px;
    }
</style>
