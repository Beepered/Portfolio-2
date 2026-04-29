import { createRouter, createMemoryHistory } from "vue-router";

import Home from "@pages/Home.vue";
import OtherProjects from "@pages/Other-Projects.vue";
import Funny from "@pages/Funny.vue";
import Month from "@pages/Month.vue";
import Secret from "@pages/Secret.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/OtherProjects",
    name: "OtherProjects",
    component: OtherProjects,
  },
  {
    path: "/Month",
    name: "Month",
    component: Month,
  },
  {
    path: "/Funny",
    name: "Funny",
    component: Funny,
    meta: {
      backgroundColor: "#edededff",
    },
  },
  {
    path: "/Secret",
    name: "Secret",
    component: Secret,
    meta: {
      backgroundColor: "black",
    },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
