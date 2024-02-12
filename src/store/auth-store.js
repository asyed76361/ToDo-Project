import { defineStore } from "pinia";
import {
  postRequest,
  HTTP,
} from "@/helper/http-config";
import { showSnackBar } from "@/helper/index";
import router from "@/router";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      token: "",
      isAuthenticated: false,
      userName: "",
    };
  },
  getters: {},
  actions: {
    async handleLogin(payload) {
      try {
        const response = await postRequest("login", payload);
        const token = response.data.user.token;
        HTTP.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        this.token = token;
        this.isAuthenticated = true;
        this.userName = response.data.user.name;
        showSnackBar(true, "Login successful");
        router.push("/");

        return response;
      } catch (error) { }
    },
  },
  persist: true,
});
