<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>


<template>
  <h1>Food</h1>
  <food-item/>
  <food-item/>
  <food-item/>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>

<script></script>

<style>
  #app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightyellow;
  }
</style>