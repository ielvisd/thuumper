<template>
  <div>
    <div role="main" class="container bg-secondary">
      <div
        class="px-8 py-12 max-w-md sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-8 mx-auto lg:ml-auto"
      >
        <div
          class="flex flex-row items-center max-w-md justify-center lg:ml-auto lg:justify-start"
        >
          <fa
            class="text-5xl mx-2 fill-current text-carrot"
            :icon="['fas', 'carrot']"
          />
          <h1 class="title text-tertiary text-5xl font-bold leading-tight">
            Thuumper
          </h1>
        </div>
        <img
          class="mt-6 h-64 w-11/12 object-contain object-center sm:h-larger lg:hidden"
          src="../assets/thumper.png"
          alt="Cartoon Thumper
      from Bambi stomping his foot."
        />
        <div
          v-if="isAuthenticated"
          class="mt-6 flex flex-col w-full max-w-md text-center lg:text-left lg:ml-auto"
        >
          <p class="text-4xl font-bold text-primary leading-tight">
            Welcome back <span class="text-tertiary"> {{ loggedInUser }}</span
            >!
          </p>
        </div>
        <div
          v-else
          class="mt-6 flex flex-col w-full max-w-md text-center lg:text-left lg:ml-auto"
        >
          <p class="text-4xl font-bold text-primary leading-tight">
            Stomp your tasks with
            <br />
            <span class="text-tertiary"> Thuumper Task Manager. </span>
          </p>
          <p class="mt-2 text-gray-800 m-auto text-xl">
            Thuumper helps you get more done. Create, schedule and complete
            tasks on the fly. Works across devices and even off-line.
          </p>
        </div>
        <div v-if="isAuthenticated" class="mt-6 text-center">
          <Button is="nuxt-link" class="bg-primary btn" to="/tasks">
            Task Manager
          </Button>
          <Button is="button" class="bg-primary btn ml-4" @click="logout">
            Logout
          </Button>
        </div>
        <div
          v-else
          class="mt-6 flex flex-row max-w-md lg:ml-auto justify-center lg:justify-start"
        >
          <Button is="nuxt-link" to="/login" class="bg-primary btn">
            Login
          </Button>
          <Button is="button" class="bg-tertiary ml-4 btn" @click="signup">
            Sign up
          </Button>
        </div>
      </div>
      <div class="hidden lg:flex items-center mr-auto lg:w-1/2">
        <img
          class="h-larger w-full object-contain object-center max-w-md"
          src="../assets/thumper.png"
          alt="Cartoon Thumper
      from Bambi stomping his foot."
        />
      </div>
    </div>
    <div class="container h-screen bg-thumper"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Button from '../components/Button';

export default {
  name: 'Thuumper',
  components: {
    Button,
  },
  middleware: 'auth',
  computed: {
    ...mapGetters('taskManager', ['isAuthenticated', 'loggedInUser']),
  },
  methods: {
    ...mapMutations('taskManager', ['setLoggedOut']),
    logout() {
      this.setLoggedOut();
      this.$router.push('/');
    },
    signup() {
      const newLine = '\r\n';
      let msg = 'Thuumper is in closed beta.';
      msg += newLine;
      msg += 'Please enter your email to join the waitlist.';
      msg += newLine;
      msg += 'Email: _____________________';
      msg += newLine;
      msg += 'This should be a modal but I ran out of time. 🙂';
      alert(msg);
    },
  },
};
</script>

<style scoped>
.container {
  @apply flex mx-auto;
}
</style>
