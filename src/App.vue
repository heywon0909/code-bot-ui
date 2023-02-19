<template>
  <div
    class="flex flex-col items-center justify-center w-screen h-screen bg-gray-100 text-gray-800 p-10 drop-shadow-sm"
  >
    <div class="bg-slate-800 w-2/3 rounded-md h-screen flex flex-col">
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
      <div class="grow">
      <div class="flex w-full text-white px-2 py-3  bg-gray-700 h-max">
        <div class="flex-auto w-1/4 px-2">
          <img src="./assets/image/profile.png" class="w-10" />
        </div>
        <div class="grow-1 break-all">
         31131231232131231232132131231312331231231331231ssssssssssss12312123123ssssssssssssssssssssssssssssssss2332131212313112312312312312123131sdfsdfasdasd
        </div>
      </div>
      <div class="flex w-full h-auto text-white px-2 py-3 bg-gray-700 h-max">
        <div class="grow-1 break-all bg-slate-200">
         ssdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff11111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </div>
         <div class="flex-auto w-1/4 px-2">
          <img src="./assets/image/robot.png" class="w-10" />
        </div>
      </div>
      </div>
      <div class="flex bg-white w-full h-12 grow-0 p-2">
        <div class="flex grow">
          <label for="prompt"></label>
          <input type="text" id="prompt" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"/>
        </div>
        <div class="flex float-left grow-0">
        <button class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-gray-500 rounded-lg focus:shadow-outline hover:bg-indigo-800">submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
