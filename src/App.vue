<template>
  <div id="app">
    <article class="mb-5">
      <header>
        <h1 test-data-id="app-title">Sir Vote-a-lot</h1>
      </header>
    </article>
    <div class="row pl-2 pr-2">
      <div class="col-4">
        <create-poll :key="componentKey" @resetVotes="resetVotes"/>
      </div>
      <div class="col-3 pl-2">
        <display-poll :key="voteComponentKey"/>
      </div>
      <div v-if="votingResults.length > 0" class="col-5 pl-2">
        <display-results :key="componentKey"/>
      </div>
    </div>
    <div class="float-left mt-5 pl-1">
      <footer>
        <button type="button" @click="resetAll">Reset</button>
      </footer>
    </div>
  </div>
</template>

<script>
import CreatePoll from "./components/CreatePoll";
import DisplayPoll from "./components/DisplayPoll";
import DisplayResults from "./components/DisplayResults";
import {mapState} from "vuex";

export default {
  name: 'App',
  components: {
    DisplayResults,
    DisplayPoll,
    CreatePoll,
  },
  data() {
    return {
      componentKey: 0,
      voteComponentKey: 0
    }
  },
  computed: mapState({
    votingResults(state) {
      return state.applicationStates.votingResults
    },
  }),
  methods: {
    resetAll: function() {
      this.$store.dispatch('resetAll')
      this.componentKey += 1;
      this.voteComponentKey += 1;
    },
    resetVotes: function() {
      this.voteComponentKey += 1;
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
