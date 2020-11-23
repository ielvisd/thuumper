<template>
  <section role="main">
    <div class="container bg-secondary">
      <div
        class="bg-thumper border rounded-lg p-6 flex flex-col justify-center items-center"
      >
        <h1 class="text-center font-bold uppercase tracking-wide">
          Task Manager Page
        </h1>
        <Button is="nuxt-link" class="bg-primary btn mt-4" to="/">
          Home
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  middleware: 'auth',
};
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
