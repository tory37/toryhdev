export const namespaced = true;

export const state = {
  isOpen: false
};

export const mutations = {
  SET_OPEN(state: any) {
    state.isOpen = true;
  },
  SET_CLOSED(state: any) {
    state.isOpen = false;
  }
};

export const actions = {
  openSidebar({ commit }: any) {
    commit('SET_OPEN');
  },
  closeSidebar({ commit }: any) {
    commit('SET_CLOSED');
  }
};
