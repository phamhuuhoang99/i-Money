<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white py-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="{ name: navItem.name, params: {} }">
            <i class="t2ico" :class="navItem.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div data-circle class="top-0 absolute left-1/2 transform -translate-x-1/2">
      <div
        data-circle-inset
        class="flex items-center justify-center bg-primary text-white -top-6 rounded-full w-12 h-12 cursor-pointer absolute left-1/2 transform -translate-x-1/2"
        @click="goToRoute()"
      >
        <i class="t2ico t2ico-plus"></i>
      </div>
    </div>
  </footer>
</template>
<script>
import { NAV_BOTTOM_ITEMS } from "@/constants";
import { useRouter } from "vue-router";
import { reactive } from "vue";
export default {
  setup() {
    const router = useRouter();
    const navItems = reactive(NAV_BOTTOM_ITEMS);
    function goToRoute() {
      console.log("click");
      router.push({ name: "NewTransaction", params: {} });
    }
    return {
      navItems,
      goToRoute,
    };
  },
};
</script>
<style scoped lang="css">
footer#footer > div[data-circle] {
  @apply bg-dark-light;
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
}
footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}
footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>
