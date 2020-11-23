<template>
  <section role="main">
    <div class="container bg-secondary">
      <div
        class="bg-thumper border rounded-lg p-6 flex flex-col justify-center items-center"
      >
        <h1 class="text-center font-bold uppercase tracking-wide">
          Welcome back!
        </h1>
        <!-- <Notification v-if="error" :message="error" /> -->
        <form method="post" @submit.prevent="thuumperLoginAttempt">
          <div class="mt-4 flex flex-col justify-items items-center">
            <div v-if="isLoginError" class="text-sm text-red-900 text-bold">
              <p>Please correct the following error(s):</p>
              <ul>
                <li
                  v-for="error in loginErrors"
                  v-bind:key="error"
                  class="mt-1"
                >
                  {{ error }}
                </li>
              </ul>
            </div>

            <label class="font-bold mt-4">Email</label>
            <div>
              <input
                v-model="email"
                class="rounded-lg shaddow-inner py-3 px-2"
                type="email"
                name="email"
                aria-label="email"
              />
            </div>
          </div>
          <div class="mt-4 flex flex-col justify-items items-center">
            <p class="font-bold" aria-label="password">Password</p>
            <div>
              <input
                v-model="password"
                class="rounded-lg shaddow-inner py-3 px-2"
                type="password"
                name="password"
                aria-label="password"
              />
            </div>
          </div>
          <div class="mt-4 flex flex-col justify-center items-center">
            <Button is="button" class="bg-primary btn" type="submit"
              >Log In</Button
            >
          </div>
        </form>
        <div class="mt-8">
          <p>
            Don't have an account?
            <Button is="nuxt-link" class="bg-tertiary btn" to="/register"
              >Register</Button
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import Button from '../components/Button';
import auth from '../services/Auth.js';

export default {
  components: {
    Button,
  },

  data() {
    return {
      email: '',
      password: '',
    };
  },

  computed: {
    ...mapGetters('taskManager', ['isLoginError', 'loginErrors']),
  },

  methods: {
    ...mapMutations('taskManager', ['setLoggedIn', 'setUser', 'setError']),
    async thuumperLoginAttempt() {
      // Check if there is an email
      if (!this.email) {
        this.setError('Email is required.');
      }

      // Check if there is a password
      if (!this.password) {
        this.setError('Password is required.');
      }

      // Check if email format
      // Check password length

      try {
        await auth.login({
          email: this.email,
          password: this.password,
        });
        this.setLoggedIn();
        this.setUser(this.email);
        this.$router.push('/');
      } catch (e) {
        this.error = e.message;
      }
    },
  },
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
