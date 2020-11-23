<template>
  <component :is="type" :href="href" :to="to">
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
    // TODO:
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

<style scope>
.btn {
  @apply inline-block text-white px-5 py-3 rounded-lg shadow-lg uppercase tracking-wider font-semibold text-base;

  &:hover {
    @apply bg-green-500;
  }

  &:active {
    @apply bg-green-500;
  }

  &:focus {
    @apply outline-none shadow-outline;
  }
}
</style>
