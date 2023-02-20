<template>
  <div class="flex bg-white w-full h-14 grow-0 p-2">
        <div class="flex grow">
          <label for="prompt"></label>
          <input type="text" id="prompt"  v-model="searchText" class="block w-full p-4 text-gray-900 rounded-lg bg-gray-50 sm:text-md  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"/>
        </div>
        <div class="flex float-left grow-0">
        <button class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-gray-500 rounded-lg focus:shadow-outline hover:bg-indigo-800" @click="searchResult(searchText)">submit</button>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore();
        let searchText = reactive("");
        const setSearchText = (e) => {
            console.log('e', e.target.value);
            searchText = e.target.value;
        }
        const searchResult = (searchText) => {
            console.log('결과', searchText);
            store.commit("setChatContent", {question:searchText,answer:''});
            searchText = ""
            document.querySelector('#prompt').value =""
        }
        return {searchText,setSearchText,searchResult}
    }

}
</script>

<style>

</style>