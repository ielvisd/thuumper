const state = {
  loggedIn: false,
  user: null,
  errors: [],
};

export const getters = {
  isAuthenticated(state) {
    return state.loggedIn;
  },

  loggedInUser(state) {
    return state.user;
  },

  isLoginError(state) {
    if (state.errors.length) {
      return true;
    } else {
      return false;
    }
  },

  loginErrors(state) {
    return state.errors;
  },
};

const mutations = {
  setLoggedIn(state) {
    state.loggedIn = true;
  },
  setLoggedOut(state) {
    state.loggedIn = false;
  },
  setUser(state, value) {
    state.user = value;
  },
  setError(state, value) {
    state.errors.push(value);
  },
  clearErrors(state, value) {
    state.errors = [];
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
