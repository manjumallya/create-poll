import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import store from './store/index'
import VueFusionCharts from 'vue-fusioncharts'
import FusionCharts from 'fusioncharts'
import Charts from "fusioncharts/fusioncharts.charts";

Vue.use(BootstrapVue);
Vue.use(VueFusionCharts, FusionCharts, Charts)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
