import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'

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



const app = createApp(App)
app.component('food-item', FoodItem)
app.mount('#app')


