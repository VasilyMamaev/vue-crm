/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-catch */
import firebase from "firebase/app";

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        throw e;
      }
    }
  }
};
