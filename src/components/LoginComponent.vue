<template>
  <div class="body">
    <q-page class="flex flex-column items-center justify-center">
      <div class="flex visible-content flex-column justify-center">
        <div class="q-mb-md row">
          <div class="flex justify-center col">
            <img
              src="../assets/todoo.png"
              class="q-mr-sm"
              style="width: 100px; height: 50px"
              alt="Custom Icon"
            />
          </div>
        </div>
        <div class="q-pa-md login-card">
          <div class="text-h5 text-center q-mb-md">Account Login</div>
          <div class="text-subtitle2 q-mb-md">
            Enter your credentials to log in to your account
          </div>
          <q-form @submit.prevent="onSubmit" class="form-control">
            <InputField
              borderless
              :rules="[
                (val) => (val && val.length > 0) || 'Required',
                (val) =>
                  /\S+@\S+\.\S+/.test(val) ||
                  'Invalid email format (missing @)',
              ]"
              v-model="email"
              label="Email Address"
              class="q-mb-md"
              appendIcon=""
              prependIcon="email"
              type="email"
            />

            <q-input
              v-model="password"
              borderless
              label="Password"
              :rules="[(val) => (val && val.length > 0) || 'Required']"
              :type="isPwd ? 'password' : 'text'"
            >
              <template v-slot:label>
                <div class="label">Enter Password</div>
              </template>
              <template v-slot:prepend>
                <q-icon name="key" class="icon-color" />
              </template>
              <template v-slot:append>
                <q-icon
                  class="icon-color cursor-pointer"
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  size="1.25rem"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <div
              class="q-link q-mb-md"
              style="display: flex; justify-content: flex-end"
              @click="navigateToRegister"
            >
              New To Website ?
            </div>
            <Button
              :loading="loading"
              style="max-width: 465px"
              type="submit"
              label="Login"
            />
          </q-form>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth-store";

const authStore = useAuthStore();

const router = useRouter();
const loading = ref(false);
const email = ref("");
const password = ref("");
const isPwd = ref(true);

const onSubmit = () => {
  loading.value = true;
  authStore
    .handleLogin({
      email: email.value,
      password: password.value,
    })
    .then(() => {
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    })
    .finally(() => {
      loading.value = false;
    });
};
const navigateToRegister = () => {
  router.push("/register");
};
</script>

<style scoped>
.body {
  background-image: url("@/assets/login.jpeg");
  background-size: cover;
  background-position: top;
}
.rem {
  cursor: pointer;
}
.q-link {
  text-decoration: none;
  color: #a8d7c6;
  cursor: pointer;
}

.form-control {
  width: 100%;
  max-width: 464px;
  margin-bottom: 0;
}
.login-card {
  background-color: white;
  max-width: 599px;
  width: 100%;
  height: 448px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(146, 145, 145, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-h5 {
  font-family: sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 20px;
  color: #484964;
}

.text-subtitle2 {
  font-family: sans-serif;
  font-weight: 400px;
  font-size: 13px;
  line-height: 15.73px;
  color: #abacbe;
}
.q-field:deep(.q-field__inner) {
  border: 2px solid #f2f2f7;
  padding: 0 20px 0 20px;
  border-radius: 8px;
  background: white;
  color: #40415a !important;
}
.label {
  color: #40415a !important;
}
.icon-color {
  color: #a8d7c6;
}
@media (max-width: 631px) {
  .login-card {
    background-color: white;
    width: 100%;
    height: 428px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(146, 145, 145, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 0.2s;
  }
  .visible-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 0.2s;
    max-width: 350px;
    width: 100%;
  }
}
ror-message {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

.q-field:deep(
    .q-field__inner .q-field__control .q-field__append .text-negative
  ) {
  display: none;
}
.q-checkbox .q-checkbox__inner--truthy .q-checkbox__bg {
  background: var(--q-header-background);
}
.q-checkbox .q-checkbox__inner--falsy .q-checkbox__bg {
  background: var(--q-white);
}
.q-checkbox .q-checkbox__inner--truthy {
  color: var(--q-header-background);
}
</style>
