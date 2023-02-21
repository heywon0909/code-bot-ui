<template>
  <div class="bg-slate-800 w-2/3 rounded-md h-screen flex flex-col">
      <!--header-->
      <div class="text-sky-500 text-xl font-semibold w-full p-3 h-12 border-b-2 flex">
        <p class="grow w-5/6 items-center">
          CodeBot
        </p>
        <div class="float-left grow-0 justify-center items-center flex space-x-3">
          <div class="w-2 h-2 bg-sky-500 rounded-full"></div>
          <div class="w-2 h-2 bg-sky-500 rounded-full"></div>
          <div class="w-2 h-2 bg-sky-500 rounded-full"></div>
        </div>
      </div>
      <!--chat-->
      <div class="h-full">
        <template v-if="isExist">
          <div v-for="(chat,index) in chatList" :key="index" >
            <chat-content :chat="chat" />
          </div>
        </template>
      </div>
      <!--input-->
      <chat-input/>
    </div>
</template>

<script>
import ChatContent from './ChatContent.vue'
import ChatInput from './ChatInput.vue'
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: { ChatContent, ChatInput },
  setup() {
    const store = useStore();
   
    const isExist = computed(() => !_.isEmpty(chatList.value));
    const chatList = computed(() => store.getters.getChatContent);
    return {chatList,isExist}

  }

}
</script>

<style>

</style>