import { createStore } from 'vuex';
import axios from 'axios';
export default createStore({
    state: {
        chatText: [],
        botText:[]
    },
    getters: {
        getChatContent(state) {
            return state.chatText;
        }
    },
    mutations: {
        setUserText(state, payload) {
            state.chatText.push(payload);
        },
        setBotText(state, payload) {
            state.chatText[state.chatText.length-1] = payload;
        }
    },
    actions: {
        getResponse(context, payload) {
            let { id, question } = payload;
            console.log('id',id)
            try {
                let url = 'http://localhost:5000/'
                let result = axios.post(url, { body: question }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                )
                console.log('result', result);
                // context.commit('setCha')
            } catch (error) {
                console.warn(error);
            }
            
        }

    }
})