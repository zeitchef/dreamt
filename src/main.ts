import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import App from './App.vue'
import router from './router'

const httpLink = new HttpLink({
  uri: 'http://localhost:8010/proxy/graphql'
})
const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

const app = createApp(App).provide(DefaultApolloClient, apolloClient)

app.component('VueDatePicker', VueDatePicker)

app.use(createPinia())
app.use(router)

app.mount('#app')
