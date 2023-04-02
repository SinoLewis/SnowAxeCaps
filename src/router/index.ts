import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import { initBots, useBotStore } from "@/stores/ftbotwrapper";
import Freqtrade from "../views/Freqtrade/Index.vue";
import Fireshop from "../views/Fireshop/Index.vue";
import Nft from "../views/Nft/Index.vue";
import Openai from "../views/Openai/Index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/freqtrade/login",
  },
  {
    path: "/freqtrade/",
    component: Freqtrade,
    children: [
      {
        path: "",
        redirect: "/freqtrade/bots",
      },
      {
        path: "bots",
        component: () => import("@/views/Freqtrade/Bots.vue"),
        meta: {
          allowAnonymous: true,
        },
      },
      {
        path: "trade",
        component: () => import("@/views/Freqtrade/Trade.vue"),
      },
      {
        path: "dashboard",
        component: () => import("@/views/Freqtrade/Dashboard.vue"),
      },
      {
        path: "charts",
        component: () => import("@/views/Freqtrade/Charts.vue"),
      },
      {
        path: "logs",
        component: () => import("@/views/Freqtrade/Logs.vue"),
      },
      {
        path: "open_trades",
        component: () => import("@/views/Freqtrade/TradesList.vue"),
      },
      {
        path: "trade_history",
        component: () => import("@/views/Freqtrade/TradesList.vue"),
        props: { history: true },
      },
      {
        path: "settings",
        component: () => import("@/views/Freqtrade/Settings.vue"),
      },
      {
        path: "login",
        component: () => import("@/views/Freqtrade/LoginView.vue"),
        meta: {
          allowAnonymous: true,
        },
      },
      {
        path: "backtest",
        component: () => import("@/views/Freqtrade/Backtesting.vue"),
      },
    ],
  },
  {
    path: "/fireshop/",
    component: Fireshop,
    children: [
      {
        path: "",
        redirect: "/fireshop/deliveries",
      },
      {
        path: "deliveries",
        component: () => import("@/views/Fireshop/Deliveries.vue"),
      },
      {
        path: "orders",
        component: () => import("@/views/Fireshop/Orders.vue"),
      },
      {
        path: "products",
        component: () => import("@/views/Fireshop/Products.vue"),
      },
      {
        path: "users",
        component: () => import("@/views/Fireshop/Users.vue"),
      },
    ],
  },
  {
    path: "/nft/",
    component: Nft,
    children: [
      {
        path: "",
        redirect: "/nft/bids",
      },
      {
        path: "bids",
        component: () => import("@/views/Nft/Bids.vue"),
      },
      {
        path: "markets",
        component: () => import("@/views/Nft/Markets.vue"),
      },
      {
        path: "trades",
        component: () => import("@/views/Nft/Trades.vue"),
      },
    ],
  },
  {
    path: "/openai/",
    component: Openai,
    children: [
      {
        path: "",
        redirect: "/openai/freqai",
      },
      {
        path: "freqai",
        component: () => import("@/views/Openai/Freqai.vue"),
      },
      {
        path: "advisor",
        component: () => import("@/views/Openai/Advisor.vue"),
      },
      {
        path: "embeddings",
        component: () => import("@/views/Openai/Embeddings.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  // Init bots here...
  initBots();
  // TODO: Set Auth rediret
  // const botStore = useBotStore();
  // if (!to.meta?.allowAnonymous && !botStore.hasBots) {
  //   // Forward to login if login is required
  //   next({
  //     path: "/freqtrade/login",
  //     query: { redirect: to.fullPath },
  //   });
  // } else {
  //   next();
  // }
});

export default router;
