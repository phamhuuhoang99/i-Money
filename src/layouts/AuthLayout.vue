<template>
  <navigation-brand />
  <slot />
</template>

<script>
// @ is an alias to /src
import NavigationBrand from "@/components/NavigationBrand.vue";
export default {
  components: { NavigationBrand },
};
</script>
