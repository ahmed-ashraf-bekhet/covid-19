import Vue from "vue";
import VueRouter from "vue-router";
import Weather from "../views/Weather.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/covid",
    name: "Weather",
    component: Weather
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
