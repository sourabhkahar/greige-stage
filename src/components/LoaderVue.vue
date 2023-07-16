<template>
    <div v-if="isLoader">
        <div class="has_loader">
          <img src="../assets/loader_download.gif" alt="gif">
        </div>
    </div>
</template>

<script setup>
import { ref,onMounted  } from 'vue'
const isLoader = ref(true)
onMounted(() => {
    setTimeout(() => {
        isLoader.value = false
    }, 2000);
})
</script>