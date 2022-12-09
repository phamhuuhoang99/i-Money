import { projectAuth } from "@/configs/firebase";
import { createRouter, createWebHistory } from "vue-router";

//Auth Guard
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  if (!user) next({ name: "Login", params: {} });
  else next();
};

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      leading: true,
      text: "Hi, Sky",
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/IndexView.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/RegisterView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "Profile",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/ProfileView.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/LogoutView.vue"),
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "Report",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "report" */ "../views/ReportView.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "Budget",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "budget" */ "../views/BudgetView.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      text: "New Transaction",
      leading: false,
      isShowFooter: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "transition" */ "../views/NewTransactionView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
