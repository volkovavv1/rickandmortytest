<script setup>

import { store } from '@/store/store';

import { getCharacters, filterCharacters } from '@/App.vue';

const props = defineProps({
  info: {
    type: [Object, null],
    required: true,
  },
})

const togglePage = () => {
  store.filter ? filterCharacters() : getCharacters()
}

</script>

<template>
  <div class="buttons-container">
   <button class="arrow-btn" @click="() => { store.currentPage <= 1 ?
    store.setCurrentPage(1) : store.setPrevPage();
    togglePage()}"
    > {{ '<' }} </button> 

  <button class="pagination-btn" v-for="i in props.info.pages" :key=i @click="() => {store.setCurrentPage(i); togglePage()}">
    {{ i }}
  </button>

  <button class="arrow-btn" @click="() => {store.currentPage >= info.pages ?
    store.setCurrentPage(info.pages) : store.setNextPage();
    togglePage()}"
    > {{ '>' }} </button> 

  </div>
</template>

<style scoped>
  .buttons-container{
    display: flex;
    justify-content: center;
    gap: 10px;
    padding-bottom: 50px;
  }

  .arrow-btn{
    background-color: white;
    border: 2px solid gray;
    font-weight: bold;
  }

 .pagination-btn{
    border-radius: 50%;
    background-color: white;
    width: 20px;
    font-weight: bold;
    border: 2px solid gray;
 }
</style>