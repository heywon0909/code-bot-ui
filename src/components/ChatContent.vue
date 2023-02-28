<template>
  <div class="grow">
    <div class="flex w-full text-white p-3 h-max">
      <div class="shrink-0 px-3 py-2">
        <img src="../assets/image/profile.png" class="w-12" id="user" />
      </div>
      <div
        class="grow-1 break-all bg-gray-700 font-medium p-2 w-full min-h-min h-full rounded-br-lg rounded-tr-lg"
      >
        {{ chat.question }}
      </div>
    </div>
    <div class="flex w-full h-auto text-white p-3  h-max">
      <div
        class="grow-1 break-all bg-sky-600 font-medium p-2 w-full min-h-min rounded-bl-lg rounded-tl-lg"
        :id="`bot${index}`"
      ></div>
      <div class="shrink-0 px-3 py-2">
        <img src="../assets/image/robot.png" class="w-12" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, toRefs, watch } from "vue";
export default {
  props: {
    chat: Object,
    index: Number,
  },
  setup(props, context) {
 
    let { id, question, answer } = toRefs(props.chat);
    

    let loadInterval = ref(null);
    const isBot = computed(() => _.isEmpty(answer));
    onMounted(() => {
    
      if (isBot.value === false) {
        onLoadAnswer();
        context.emit("settingQnA", { id: id.value, question: question.value });
      }
    });

    const onLoadAnswer = () => {
      let bot_text = document.getElementById(`bot${props.index}`);
      loadInterval = setInterval(() => {
        bot_text.innerHTML += ".";
        if (bot_text.textContent === "....") {
          bot_text.innerHTML = "";
        }
      }, 300);
    };

    const onSplitBotAnswer = (text) => {
      let bot_text = document.getElementById(`bot${props.index}`);
      let index = 0;
   
      loadInterval = setInterval(() => {
        if (index < text.length) {
          bot_text.innerHTML += text[index];
          index++;
        } else {
          clearInterval(loadInterval);
          loadInterval = null;
        }
      }, 100);
    };

    watch(answer, (cur,prev) => {
      if (!_.isEmpty(cur)) {
        clearInterval(loadInterval);
        loadInterval = null;
        onSplitBotAnswer(cur);
      }
      console.log("prev", prev);
    });

    return { isBot, onLoadAnswer, loadInterval, onSplitBotAnswer };
  },
};
</script>

<style></style>
