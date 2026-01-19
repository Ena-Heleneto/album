<script setup lang="ts">
const value = ref(null)
</script>

<template>
  <UFileUpload v-model="value" class="flex-1 min-h-300px w-full" />
</template>
