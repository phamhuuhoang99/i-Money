<template>
  <!-- Start: Info -->
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            src="@/assets/images/dongyumi.png"
            size="xs"
            alt="User's profile avatar"
            class="w-full h-auto object-cover"
          />
        </div>
        <div class="text-bold text-2xl text-primary mt-3">user.displayName</div>
        <p class="font-semibold text-gray-400 mt-1">user.email</p>
      </div>
    </div>
  </div>

  <!-- Start: Menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul>
            <li
              v-for="(profileOption, i) in profileOptions"
              :key="profileOption.name"
            >
              <router-link
                class="flex justify-between items-center py-3"
                :to="profileOption.route"
              >
                <div
                  class="flex items-center text-left"
                  :class="{ 'text-red': i == profileOptions.length - 1 }"
                >
                  <i class="t2ico text-2xl" :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
// import { PROFILE_OPTIONS } from "@/constants";
// import { useUser } from "@/composables/userUser";
export default {
  setup() {
    const profileOptions = reactive([
      {
        name: "My Wallet",
        icon: "t2ico-wallet",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        name: "Tools",
        icon: "t2ico-ticket-star",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        name: "Privacy",
        icon: "t2ico-lock",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        name: "About",
        icon: "t2ico-info-square",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        name: "Logout",
        icon: "t2ico-logout",
        route: {
          name: "Home",
          params: {},
        },
      },
    ]);
    // const profileOptions = reactive(PROFILE_OPTIONS);
    // const { getUser } = useUser();
    // const { user } = getUser();
    return {
      profileOptions,
      // user,
    };
  },
};
</script>
