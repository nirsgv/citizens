import Vue from "vue";
import Vuex from "vuex";
import Faker from "faker";
import uuidv4 from "uuidv4";
import apiService from "../services/service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    citizens: [],
  },
  mutations: {
    someOtherMutation(state, item) {
      state.citizens = item;
    },
    setCitizens(state, items) {
      state.citizens = items;
    },
  },
  actions: {
    async setCitizens({ commit }, dat) {
      commit("setCitizens", dat);
    },
    
    async createFakeCitizen({ commit }) {
      const item = {
        uid: uuidv4.uuid(),
        firstName: Faker.name.firstName,
        lastName: Faker.name.lastName,
        emoji: Faker.phone.phoneNumber,
        mail: Faker.internet,
        team: Faker.random.word,
        img: Faker.image.animals,
      };
      const { dataA } = await apiService.post(
        "http://localhost:3000/books",
        item
      );
      commit("someOtherMutation", dataA);

      return dataA;
    },
  },
  getters: {
    citizens: (state) => state.citizens,
  },
  modules: {},
});
