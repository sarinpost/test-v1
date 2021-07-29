import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: `/q1`,
    name: "q1",
    component: () =>
      import("./../components/q1.vue"),
  },
  {
    path: `/q2`,
    name: "q2",
    component: () =>
      import("./../components/q2.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: '',
  routes,
});

export default router;
