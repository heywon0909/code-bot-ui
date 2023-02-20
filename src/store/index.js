import { createStore } from 'vuex';
export default createStore({
    state: {
        chatMessage:[]
    },
    getters: {
        getChatContent(state) {
           return  state.chatMessage;
        }
    },
    mutations: {
        setChatContent(state, payload) {
            state.chatMessage.push(payload);
        }

    }
})