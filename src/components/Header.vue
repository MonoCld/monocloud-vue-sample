<script setup lang="ts">
import type { User } from 'oidc-client-ts';
import { inject, type Ref } from 'vue';
import userManager from '@/user-manager';

const userRef = inject<Ref<User | undefined | null>>('user');

const signIn = () => userManager.signinRedirect();
const signOut = () => userManager.signoutRedirect();
</script>

<template>
  <div v-if="userRef" class="items">
      <h3>Logged in as {{ userRef.profile.given_name }} 🎉</h3>
      <button @click="signOut">Logout</button>
  </div>

  <div v-if="!userRef" class="items">
      <h3>Not Logged in!</h3>
      <button @click="signIn">Login</button>
  </div>
</template>

<style scoped>
.items {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>