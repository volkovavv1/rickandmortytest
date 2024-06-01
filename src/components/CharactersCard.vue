<script setup>
import EpisodeName from './EpisodeName.vue';

import { ref } from 'vue';

const props = defineProps({
  character: {
    type: [Object, null],
    required: true,
  },
  seenIn: {
    type: [Array, null, undefined],
    required: true,
  }
})

const firstEpisode = ref(props.seenIn[0])
</script>

<template>
  <div class="card">
    <div class="card-img__wrapper">
      <img class="card-img" :src=character.image alt="logo">
    </div>
    <div class="card-info">
      <h2> {{ character.name }} </h2>
      <span class="card-info__p status-flex">
        <div :class="`status status${character.status}`"></div>
        <p>{{character.status}}  -  {{character.species}}</p>
      </span>
      <span class="text-gray">Last known location:</span>
      <p class="card-info__p"> {{ character.location.name }} </p>
      <span class="text-gray">First seen in:</span>
      <p class="card-info__p"> 
        <EpisodeName :episode="firstEpisode" />
      </p>
    </div>
  </div>
</template>



<style scoped>

.card {
  display: flex;
  gap: 0;
  width: 41.67vw;
  height: 15.28vw;
  max-width: 600px;
  max-height: 220px;

  border-radius: 0.5rem;
  background: rgb(60, 62, 68);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
}

.card-img {
  max-width: 230px;
  max-height: 220px;
  height: 15.28vw;

  border-radius: 0.5rem 0 0 0.5rem;
}

.card-info {
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
}

.name {
  font-size: 1.5rem;
}

.status-flex {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-transform: capitalize;
}

.status {
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  border-radius: 50%;
}

.statusAlive {
  background: rgb(85, 204, 68);
}

.statusDead {
  background: rgb(214, 61, 46);
}

.statusunknown {
  background: rgb(158, 158, 158);
}

.status__icon {
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(214, 61, 46);
  border-radius: 50%;
}

.text-gray {
  color: rgb(158, 158, 158);
}

.card-info__p {
  padding-bottom: 18px;
}
</style>
