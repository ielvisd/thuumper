<template functional>
  <component :is="type" :href="href" :to="to" class="button">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
  },
  computed: {
    type() {
      switch (true) {
        case this.href:
          return 'a';
        case this.to:
          return 'nuxt-link';
        default:
          return 'button';
      }
    },
  },
};
</script>
