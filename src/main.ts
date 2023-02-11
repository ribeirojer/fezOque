import { createApp, h } from "vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Partidos from "./pages/Partidos.vue";

const NotFoundComponent = { template: "<p>Page not found</p>" };

const routes = {
  "/": Home,
  "/partidos": Partidos,
};

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname,
  }),
  computed: {
    CurrentComponent(): any {
      return routes[this.currentRoute] || NotFoundComponent;
    },
  },

  render(): any {
    return h(this.CurrentComponent);
  },
};

createApp(SimpleRouter).mount("#app");
