<script setup>
import { ref } from 'vue';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard.vue';

let response = await axios.get('https://rickandmortyapi.com/api/character');
console.log(response.data);
const characters = ref(response.data.results);
const info = ref(response.data.info);

async function next(){
    let response = await axios.get(info.value.next);
    console.log(response.data);
    characters.value = response.data.response;
    info.value = response.data.info;
}

async function prev(){
    let response = await axios.get(info.value.prev);
    console.log(response.data);
    characters.value = response.data.response;
    info.value = response.data.info;
}

</script>

<template>
    <div class="button">
        <button class="button is-primary" @click="prev" :disabled="!info.prev">Prev</button>
        <button class="button is-primary" @click="next" :disabled="!info.next">Next</button>
    </div>
    <div class="columns is-multiline">
        <div v-for="character in characters" class="column is-one-quarter">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
</template>