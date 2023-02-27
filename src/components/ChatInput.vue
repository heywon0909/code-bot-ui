<template>
  <div>
    <div class="flex bg-white w-full h-14 grow-0 p-2">
      <div class="flex grow">
        <label for="prompt"></label>
        <input
          type="text"
          id="prompt"
          @keyup.enter="searchResult(searchText)"
          v-model="searchText"
          class="block w-full p-4 text-gray-900 rounded-lg bg-gray-50 sm:text-md dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
        />
      </div>
      <div class="flex float-left grow-0">
        <button
          class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-gray-500 rounded-lg focus:shadow-outline hover:bg-indigo-800"
          @click="searchResult(searchText)"
        >
          submit
        </button>
      </div>
    </div>
    <template v-if="isError">
      <ChatUserError :setError="setError" @close="clearError" />
    </template>
  </div>
</template>

<script>
import { ref, computed } from "vue";
// import { useStore } from "vuex";
// import generateUniqueId from "../common/uniqueId";
import ChatUserError from "./ChatUserError.vue";

export default {
  emits: ["settingUserText"],
  components: { ChatUserError },
  setup(props, { emit }) {
    // const store = useStore();

    let searchText = ref("");
    let setError = ref("");
    const isError = computed(() => !_.isEmpty(setError));

    const setSearchText = (e) => {
      searchText = e.target.value;
    };

    const searchResult = (text) => {
      if (_.isEmpty(text)) {
        setError.value = "질문을 입력해주세요";
        return;
      }

      //   store.commit(
      //     "setUserText",
      //     { id: generateUniqueId(), question: text, answer: "" },
      //     { root: true }
      //   );

      emit("settingUserText", text);
      searchText.value = "";

      setError.value = "";
      document.querySelector("#prompt").value = "";
    };

    const clearError = () => {
      setError.value = "";
    };
    return {
      searchText,
      setSearchText,
      searchResult,
      setError,
      isError,
      clearError,
    };
  },
};
</script>

<style></style>
