import Vue from "vue"
import Playground from "./GanttPlayground.vue"
import ganttastic from "./vue-ganttastic.js"

Vue.use(ganttastic)

new Vue({
  el: "#app",
  render: (h) => h(Playground)
})
