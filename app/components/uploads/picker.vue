<script setup lang="ts">
const value = defineModel<File | null>({ default: null })
</script>

<template>
  <UFileUpload v-model="value" class="tw:flex-1 tw:min-h-300px tw:w-full" accept="image/*" />
</template>
