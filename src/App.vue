<template>
  <div
    class="flex flex-col items-center justify-center w-screen h-screen bg-gray-100 text-gray-800 p-10 drop-shadow-sm"
  >
  <chat-frame/>
  </div>
</template>

<script>
import ChatFrame from './components/ChatFrame.vue';

export default {
  name: "App",
  components: {ChatFrame},
};
</script>

<style></style>
