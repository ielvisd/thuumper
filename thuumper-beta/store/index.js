export const state = () => ({
  loggedIn: false,
  user: null,
});

export const getters = {
  isAuthenticated(state) {
    return state.loggedIn;
  },

  loggedInUser(state) {
    return state.user;
  },
};

export const mutations = {};

export const actions = {};
