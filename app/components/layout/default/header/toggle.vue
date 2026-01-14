<script lang="ts" setup>
const current = defineModel<'waterfall' | 'timeline'>({ default: 'waterfall' })
</script>

<template>
  <div class="flex" gap="3">
    <div i-hugeicons:waterfall-down-03 @click="current = 'waterfall'" />
    <div i-hugeicons:timeline-list @click="current = 'timeline'" />
  </div>
</template>
