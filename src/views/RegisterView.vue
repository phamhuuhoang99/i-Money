<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              id="fullName"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="text"
              placeholder="iMoney..."
              v-model="fullName"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="email"
              placeholder="example@gmail.com"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="password"
              placeholder="Example"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
            type="submit"
          >
            Sign Up
          </button>
          <button
            class="py-3 text-center w-full bg-gray-800 text-white font-bold rounded-lg cursor-not-allowed"
            type="button"
            disabled
          >
            Loading...
          </button>
        </div>
      </form>

      <!-- Start error -->
      <div class="text-left mt-4 text-red">
        <span>error </span>
      </div>

      <!-- Start direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm ready a member.</span>
        <span class="ml-1"
          ><router-link
            :to="{ name: 'Login', params: {} }"
            class="text-primary font-bold"
            >Sign In</router-link
          ></span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";

export default {
  setup() {
    const { error, isPending, signUp } = useSignUp();
    const fullName = ref("");
    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      console.log("test", fullName, email, password);

      await signUp(email.value, password.value);
    }
    return { fullName, email, password, error, isPending, onSubmit };

    // const {, signUp }  = useSignUp()
  },
};
</script>
