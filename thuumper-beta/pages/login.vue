// pages/login.vue

<template>
  <section>
    <div class="container">
      <div>
        <div>
          <h2>Welcome back!</h2>
          <!-- <Notification v-if="error" :message="error" /> -->
          <form method="post" @submit.prevent="login">
            <div>
              <label>Email</label>
              <div>
                <input type="email" name="email" v-model="email" />
              </div>
            </div>
            <div>
              <label>Password</label>
              <div>
                <input type="password" name="password" v-model="password" />
              </div>
            </div>
            <div>
              <button type="submit">Log In</button>
            </div>
          </form>
          <div>
            <p>
              Don't have an account?
              <nuxt-link to="/register">Register</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Notification from '~/components/Notification'

export default {
  components: {
    // Notification,
  },

  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },

  methods: {
    async login() {
      try {
        await this.thuumperLogin({
          data: {
            email: this.email,
            password: this.password,
          },
        });

        this.$router.push('/');
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
    async thuumperLogin(data) {
      console.log('data is: ', data);
      return 'nice';
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
  text-align: center;
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
