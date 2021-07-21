import { createStore } from "vuex";

export default createStore({
  state: {
    api_url: "https://quote-garden.herokuapp.com/api/v3/quotes?genre=business",
    no_pgs: 100,
    quote: null,
    author: null
  },
  mutations: {
    getQuotes(state, quotes){
      let randNumberBtw10 = Math.floor(Math.random() * 10);
      state.quote = quotes[randNumberBtw10].quoteText;
      state.author = quotes[randNumberBtw10].quoteAuthor;
    }
  },
  actions: {
    async getQuotes({commit,state}){
      let randNumber = Math.floor(Math.random() * state.no_pgs);
      await fetch(`${state.api_url}&page=${randNumber}`).then(res => res.json()).then(results => commit("getQuotes", results.data))
    }
  },
  modules: {},
  getters:{
    quote: (state) => state.quote,
    author: (state) => state.author
  }
});
