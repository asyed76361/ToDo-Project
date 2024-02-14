/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import pinia from "./store";
import style from "./assets/style/table.css";

import InputField from "./components/global/InputField.vue";
import Button from "./components/global/ButtonComponent.vue";
import DropDown from "./components/global/DropDown.vue";
const app = createApp(App);
app.component("InputField", InputField);
app.component("Button", Button);
app.component("DropDown", DropDown);

app.use(style);
app.use(Quasar, quasarUserOptions);
app.use(router);
app.use(pinia);
app.mount("#app");
