<script setup>
import { onMounted, toRef, ref } from 'vue';

const props = defineProps({
  episode: {
    type: [String, null],
    required: true,
  }
})

const firstSeen = toRef(props.episode)

const episodeTitle = ref('')

const getEpisodeName = async () => {
await fetch(`${firstSeen.value}`)
    .then((response) => response.json())
    .then((data) => episodeTitle.value = data)
}

onMounted(getEpisodeName)

</script>

<template>
  {{ episodeTitle.name }}
</template>



<style scoped>


</style>
