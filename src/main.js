import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

library.add(faPenToSquare,faRotateRight);

createApp(App).use(store).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
