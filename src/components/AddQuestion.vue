<template>
    <div >
        <div class="form-group row" v-for="(input, index) in options"
             :key="`option-${index}`" v-if="index < 10">
            <div class="col-9">
                <input type="text" :test-data-id="`option-data-${index}`" class="form-control" v-model="input.option" maxlength="80" placeholder="Enter option">
            </div>
            <div class="col-2">
                <button :id="`add-button-${index}`" :test-data-id="`add-option-${index}`" type="button" @click="addOption(input, options, index)">Add</button>
            </div>
            <div class="col-1">
                <button :id="`cancel-button-${index}`" :test-data-id="`cancel-option-${index}`" disabled type="button" @click="cancelOption(index, options)">X</button>
            </div>
        </div>
        <h4>{{optionCount}}/10 options</h4>
    </div>
</template>

<script>
    export default {
        name: 'AddQuestion',
        props: {
            option: String,
        },
        data() {
            return{
                options : [{
                    option: '',
                }],
                optionCount: 0
            }
        },

        updated() {
            this.$store.dispatch('updateOptions', this.options)
        },

        methods: {
            addOption: async function (value, optionData, index) {
                optionData.push({
                    value: ''
                })
                this.optionCount++
                this.$emit('optionChanged')
                await this.$store.dispatch('updateVotingResults', [])
                document.getElementById(`add-button-${index}`).disabled = true
                document.getElementById(`cancel-button-${index}`).disabled = false
            },
            cancelOption: async function ( index, optionData) {
                optionData.splice(index, 1)
                this.optionCount--
                this.$emit('optionChanged')
                await this.$store.dispatch('updateVotingResults', [])
                document.getElementById(`add-button-${index}`).disabled = false
                document.getElementById(`cancel-button-${index}`).disabled = true
            },
        }
    }
</script>
