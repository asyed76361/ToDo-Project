import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/store/auth-store";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated && authStore.token !== null) {
        next("/");
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
