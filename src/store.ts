import Vue from 'vue';
import Vuex from 'vuex';
import Comment from '@/models/comment';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comments: Array<Comment>(),
  },
  mutations: {
    addComment(state, comment: Comment) {
      state.comments.push(comment);
    },
  },
  actions: {
    addComment(context, comment: Comment ) {
      context.commit('addComment', comment);
    },
  },
});
