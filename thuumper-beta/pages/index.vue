<template>
  <div role="main" class="container bg-secondary">
    <div>
      <div class="flex-col align-center justify-center items-center py-8 px-8">
        <div class="flex justify-center items-center">
          <fa
            class="text-6xl mx-4 fill-current text-carrot"
            :icon="['fas', 'carrot']"
          />
          <h1 class="title text-tertiary">Thuumper</h1>
        </div>
        <img
          class="m-auto w-3/5"
          src="../assets/thumper.png"
          alt="Cartoon Thumper from Bambi
        stomping his foot."
        />
        <div class="m-auto w-3/5">
          <p class="mt-6 text-2xl font-bold text-primary leading-tight">
            Stomp your tasks with
            <span class="text-tertiary"> Thuumper Task Manager. </span>
          </p>
          <p class="mt-2 text-gray-800">
            Thuumper helps you get more done. Create, schedule and revisit
            important tasks on the fly. Works across devices and even off-line.
          </p>
        </div>
      </div>
      <div>
        <nuxt-link
          to="/login"
          class="inline-block bg-primary text-white px-5 py-3 rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm"
        >
          Login
        </nuxt-link>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Sign Up
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  @apply min-h-screen flex justify-center text-center mx-auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
