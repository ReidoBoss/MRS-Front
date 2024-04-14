import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [


    {
      path: "/",
      name: "Arduino",
      component: () => import("../mainPages/Arduino.vue"),
    },


  ],
});

export default router;
