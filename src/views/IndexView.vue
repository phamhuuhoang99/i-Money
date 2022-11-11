<template>
  <div class="home">{{ user.displayName }}</div>
</template>

<script>
// @ is an alias to /src
import { useUser } from "@/composables/useUser";

export default {
  name: "HomeView",

  setup() {
    const { getUser } = useUser();

    const { user } = getUser();

    return {
      user,
    };
  },
};
</script>
