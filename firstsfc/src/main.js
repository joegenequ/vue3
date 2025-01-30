import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import Country from './components/Country.vue'


const app = createApp(App)
app.component('food-item', FoodItem)
app.component('country', Country)
app.mount('#app')


