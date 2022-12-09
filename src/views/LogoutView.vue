<template>
  <div>Logout Page</div>
</template>

<script>
import { useLogout } from "@/composables/useLogout.js";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, logout } = useLogout();
    const router = useRouter();

    async function onLogout() {
      await logout();
      if (!error.value)
        router.push({
          name: "Login",
          params: {},
        });
    }

    onLogout();

    return {};
  },
};
</script>
