export default {
    state: {
        question: '',
        options: [],
        votingResults: [],
        resetFlag: false,
        totalVotes: 0,
    },
    mutations: {
        UPDATE_QUESTION(state, question) {
            state.question = question
        },
        UPDATE_OPTIONS(state, options) {
            state.options = options
        },
        UPDATE_VOTING_RESULTS(state, votingResults) {
            state.votingResults = votingResults
        },
        UPDATE_RESET_FLAG(state, resetFlag) {
            state.resetFlag = resetFlag
        },
        UPDATE_TOTAL_VOTES(state, totalVotes) {
            state.totalVotes = totalVotes
        }
    },
    actions: {
        updateQuestion({ commit }, newQuestion) {
            commit('UPDATE_QUESTION', newQuestion)
        },
        updateOptions({ commit }, newOptions) {
            commit('UPDATE_OPTIONS', newOptions)
        },
        updateVotingResults({ commit }, votingResults) {
            commit('UPDATE_VOTING_RESULTS', votingResults)
        },
        updateResetFlag({ commit }, resetFlag) {
            commit('UPDATE_RESET_FLAG', resetFlag)
        },
        updateTotalVotes({ commit }, totalVotes) {
            commit('UPDATE_TOTAL_VOTES', totalVotes)
        },
        resetAll({ commit }) {
            commit('UPDATE_QUESTION', '')
            commit('UPDATE_OPTIONS', [])
            commit('UPDATE_VOTING_RESULTS', [])
            commit('UPDATE_RESET_FLAG', true)
        },
    },
    getters: {
        question: state => state.question,
        options: state => state.options,
        votingResults: state => state.votingResults,
        resetFlag: state => state.resetFlag,
    }
}
