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
            state.chatText[state.chatText.length-1].answer = payload.answer;
        }
    },
    actions: {
        getResponse: async(context, payload) => {
            let { id, question } = payload;
            console.log('id',id)
            try {
                let url = 'http://localhost:5000'
                let {data,statusText} = await axios.post(url, { prompt: question }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
               
                if (statusText === 'OK') {
                    console.log('result',data.bot.trim())
                    context.commit('setBotText',{answer:data.bot.trim()})
                }
                
                
            } catch (error) {
                console.warn(error);
            }
            
        }

    }
})