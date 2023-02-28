<template>
  <div
    class="bg-slate-800 w-screen md:w-3/4 xl:w-1/3 rounded-md h-5/6 flex flex-col drop-shadow-xl sm:p-2"
  >
    <!--header-->
    <div
      class="text-sky-500 text-xl font-semibold w-full p-3 h-20 border-b-2 flex"
    >
      <p class="grow w-5/6 flex items-center">CodeBot</p>
      <div class="float-left grow-0 justify-center items-center flex space-x-3">
        <div class="w-2 h-2 bg-sky-500 rounded-full"></div>
        <div class="w-2 h-2 bg-sky-500 rounded-full"></div>
        <div class="w-2 h-2 bg-sky-500 rounded-full"></div>
      </div>
    </div>
    <!--chat-->
    <div class="h-full overflow-y-auto">
      <template v-if="isExist">
        <div v-for="(chat, index) in chatList" :key="index">
          <chat-content
            :chat="chat"
            :index="index"
            @settingQnA="getBotAnswer"
          />
        </div>
      </template>
    </div>
    <!--input-->
    <chat-input @settingUserText="getUserText" />
  </div>
</template>

<script>
import ChatContent from "./ChatContent.vue";
import ChatInput from "./ChatInput.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import generateUniqueId from "../common/uniqueId";
export default {
  components: { ChatContent, ChatInput },
  setup() {
    const store = useStore();

    const getBotAnswer = (params) => {
      let { id, question } = params;

      store.dispatch("getResponse", {
        id: id,
        question: question,
      });
    };

    const getUserText = (param) => {
      store.commit(
        "setUserText",
        { id: generateUniqueId(), question: param, answer: "" },
        { root: true }
      );
    };

    const isExist = computed(() => !_.isEmpty(chatList.value));
    const chatList = computed(() => store.getters.getChatContent);
    return { chatList, isExist, getBotAnswer, getUserText };
  },
};
</script>

<style></style>
