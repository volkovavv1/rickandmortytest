<script>
import { ref } from 'vue'

export const filterUrl = ref(null)
</script>

<script setup>
import { store } from '../store/store';

import { getCharacters, filterCharacters } from '@/App.vue';

const name = ref('')
const status = ref('')

const generateFilterUrl = () => {
    name.value ? 
        (status.value ?
        filterUrl.value=`name=${name.value}&status=${status.value}` :
        filterUrl.value=`name=${name.value}`)

        : (status.value ? 
        filterUrl.value=`status=${status.value}` :
        filterUrl.value=null);

        store.setFilter(true)
}
</script>



<template>
  <form class="filters-container">
    <input class="filter-input" :id="name" v-model="name" placeholder="Введите имя">  
    <select v-model="status">
        <option disabled value="">Выберите статус:</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
    </select>
  </form>
  <div class="button-container">
  <button class="filter-button" @click="() => {
    generateFilterUrl();
    filterCharacters();
  }">Применить</button>

  <button :class="`filter-button reset-button`" @click="() => {
    store.setFilter(false);
    store.setCurrentPage(1);
    getCharacters();
  }">Сбросить фильтр</button>
  </div>
</template>

<style scoped>
  .filters-container{
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 50px 0 20px 0;
  }

  .filter-input {
    border-radius: 30px;
    height: 27px;
  }

  .button-container{
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .filter-button {
    width: 120px;
    border-radius: 30px;
    color: green;
    border: none;
  }

  .reset-button{
    color: red;
  }

</style>