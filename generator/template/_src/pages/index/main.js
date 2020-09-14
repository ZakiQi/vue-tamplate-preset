import App from './App.vue'
import router from './router'
import states from './store'
import bootstrap from '@/bootstrap'

if (process.env.NODE_ENV !== 'production') {
  require('./mock/mock.js')
}

bootstrap({router, states, App})
