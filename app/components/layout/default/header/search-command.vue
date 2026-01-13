<script lang="ts" setup>
const inputValue = ref<string>('')
</script>

<template>
  <div h="60" flex="~ col">
    <UInput v-model="inputValue" />
    <div flex="1" />
  </div>
</template>
