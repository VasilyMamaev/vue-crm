import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "./filters/currency.filter";
import messagePlugin from "@/utils/message.plugin";
import Loader from "@/components/ui/loader";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.use(Vuelidate);
Vue.component("Loader", Loader);

const firebaseConfig = {
  apiKey: "AIzaSyDR3HX0uHPX96Bqfv_8bYMtW8QMcytp5Ag",
  authDomain: "vue-crm-vailymamaev.firebaseapp.com",
  databaseURL: "https://vue-crm-vailymamaev.firebaseio.com",
  projectId: "vue-crm-vailymamaev",
  storageBucket: "vue-crm-vailymamaev.appspot.com",
  messagingSenderId: "15506687316",
  appId: "1:15506687316:web:ca0b12384e09f9d05b74c1"
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
