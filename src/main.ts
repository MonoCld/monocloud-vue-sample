import './assets/main.css'

import type { User } from 'oidc-client-ts';
import { createApp, ref, type Ref } from 'vue'
import App from './App.vue'
import router from './router'
import userManager from './user-manager';

const app = createApp(App)

const userRef = ref<User | undefined | null>(undefined);

userManager.getUser().then(x => {
    userRef.value = x;
});

userManager.events.addUserLoaded(x => {
    userRef.value = x
});

app.provide('user', userRef);

app.use(router)

app.mount('#app')
