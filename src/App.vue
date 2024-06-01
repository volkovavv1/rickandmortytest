<script setup>
import { ref, onMounted } from 'vue';

import { BASE_URL } from './utils/constants.js';

import CharactersCard from './components/CharactersCard.vue'
import PaginationBlock from './components/PaginationBlock.vue'
import FilterCharacters from './components/FilterCharacters.vue'

import { store } from './store/store.js';

import { filterUrl } from './components/FilterCharacters.vue'

onMounted(getCharacters)
</script>

<script>
const characters= ref('')
const loading = ref(true)
const error = ref(null)

export function getCharacters() {
  try {
    fetch(`${BASE_URL}/?page=${store.currentPage}`)
    .then((response) => response.json())
    .then((data) => characters.value = data)
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}

export function filterCharacters() {
  try {
    fetch(`${BASE_URL}/?page=${store.currentPage}&${filterUrl.value}`)
    .then((response) => response.json())
    .then((data) => characters.value = data)
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main>
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <h1 class="title">The Rick and Morty API (Test task)</h1>
    <section v-if="characters" class="container">
      <FilterCharacters />
      <section class="cards-wrapper">
        <CharactersCard v-for="(character, id) in characters.results" :key="id" :character="character" :seenIn="character.episode"/> 
      </section>
      <PaginationBlock :info="characters.info"/>
    </section>
  </main>
</template>

<style>

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin-top: 60px;
}

.container {
  background: rgb(39, 43, 51);
}

.title {
  margin: 0 0 60px 0;
  color: rgb(32, 35, 41);
  border: none;
  font-weight: 900;
  font-size: 5vw;
}

.cards-wrapper {
  display: flex;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;

  max-width: 1848px;
  margin: 0 auto;
  padding: 4.5rem 0px;

  gap: 24px;
}

</style>