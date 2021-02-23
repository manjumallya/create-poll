<template>
    <div>
        <fusioncharts test-data-id="chart-display"
                :type="type"
                :width="width"
                :height="height"
                :dataFormat="dataFormat"
                :dataSource="dataSource">
        </fusioncharts>
        <h4>Total votes: {{ totalVotes }}</h4>
    </div>
</template>
<script>
    import {mapState} from "vuex";

    export default {
        name: 'DisplayResults',
        data() {
            return {
                type: 'column2d',
                width: '500',
                height: '300',
                dataFormat: 'json',
                dataSource: {
                    "chart": {
                        "caption": this.question,
                        "subCaption" : "Voting Results",
                        "showValues":"1",
                        "showPercentInTooltip" : "0",
                        "numberPrefix" : "",
                        "enableMultiSlicing":"0",
                        "theme": "fusion",
                        "yAxisName": "Votes",
                        "xAxisName": "Options",
                    },
                    "data": this.votingResults
                },
            }
        },
        computed: mapState({
            votingResults(state) {
                return state.applicationStates.votingResults
            },
            question(state) {
                return state.applicationStates.question
            },
            totalVotes(state) {
              return state.applicationStates.totalVotes
            },
        }),
        mounted() {
            this.dataSource.chart.caption = this.question
            this.dataSource.data = this.votingResults
        },
    }
</script>
