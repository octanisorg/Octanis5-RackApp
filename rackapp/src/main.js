// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'

import App from './App.vue'
import Splash from './components/Splash.vue'
import Items from './components/Items.vue'
import Auth from './components/Auth.vue'
import ItemBooking from './components/ItemBooking.vue'
import NotFound from './components/NotFound.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueMoment)

const router = new VueRouter({

  mode: 'hash',
  base: '/',
  routes: [
    { name: 'rack', path: '/:rackName', component: Splash, props: true },
    { name: 'rackItems', path: '/:rackName/items', component: Items, props: true  },
    { name: 'auth', path: '/:rackName/auth', component: Auth, props: true  },
    { name: 'rackItem', path: '/:rackName/items/:itemName', component: ItemBooking, props: true  },
    { path: '*', component: NotFound }

  ]
})

 new Vue({
   router,
   el: '#app',
   render: h => h(App)
 });
