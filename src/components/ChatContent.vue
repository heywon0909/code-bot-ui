<template>
  <div class="grow">
      <div class="flex w-full text-white px-2 py-3 h-max">
        <div class="shrink-0 px-2">
          <img src="../assets/image/profile.png" class="w-12" />
        </div>
        <div class="grow-1 break-all bg-gray-700 font-medium p-2">
          {{chat.question }}
        </div>
      </div>
      <div class="flex w-full h-auto text-white px-2 py-3 h-max">
        <div class="grow-1 break-all bg-sky-600 font-medium p-2">
         ssdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff11111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </div>
         <div class="shrink-0 px-2">
          <img src="../assets/image/robot.png" class="w-12" />
        </div>
      </div>
     </div> 
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    chat:{type:Object,required:true}
  },
  setup() {
    const store = useStore();
    const chatContent = computed(() => store.getters.getChatContent);
    return {chatContent}

  }

}
</script>

<style>

</style>