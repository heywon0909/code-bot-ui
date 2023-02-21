<template>
  <div class="grow">
      <div class="flex w-full text-white p-3 h-max">
        <div class="shrink-0 px-2">
          <img src="../assets/image/profile.png" class="w-12" id="user"/>
        </div>
        <div class="grow-1 break-all bg-gray-700 font-medium p-2 w-full">
          {{chat.question }}
        </div>
      </div>
      <div class="flex w-full h-auto text-white p-3 h-max">
        <div class="grow-1 break-all bg-sky-600 font-medium p-2 w-full" id="bot">
        
        </div>
         <div class="shrink-0 px-2">
          <img src="../assets/image/robot.png" class="w-12" />
        </div>
      </div>
     </div> 
</template>

<script>
import { computed,onMounted,toRefs } from "vue";
export default {
  props: {
    chat:Object
  },
  setup(props) {
    console.log('question', props.chat)
    let { question, answer } = toRefs(props.chat);
     console.log('question', question.value,answer.value)
    
    let loadInterval;
    const isBot = computed(() => _.isEmpty(answer));
    onMounted(() => {
      console.log('isBot',isBot.value)
      if (isBot.value === false) {  
        setAnswer();
      } else {
        console.log('대답')
      }
      

    })
    
    const setAnswer = () => {
      let bot_text = document.getElementById('bot');
      loadInterval = setInterval(() => {
        bot_text.innerHTML += '.';
        if (bot_text.textContent === '....') {
          bot_text.innerHTML = '';
        }
      }, 300);
      
    }

    return {isBot,setAnswer,loadInterval}

  }

}
</script>

<style>

</style>