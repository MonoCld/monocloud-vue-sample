<script setup lang="ts">
import userManager from '@/user-manager';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(async () => {
  try {
    await userManager.signinRedirectCallback();
    router.push('/');
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <div></div>
</template>