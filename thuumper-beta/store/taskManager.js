const state = {
  loggedIn: false,
  user: null,
  role: 'free',
};

export const getters = {
  isAuthenticated(state) {
    return state.loggedIn;
  },

  loggedInUser(state) {
    return state.user;
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
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
