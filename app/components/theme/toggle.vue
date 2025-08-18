<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="p-2 rounded-lg bg-transparent transition-colors backdrop-blur-sm" @click="toggleDark">
    <div
      class="dark:i-line-md:moon-to-sunny-outline-loop-transition i-line-md:sunny-outline-to-moon-loop-transition text-gray-600 size-5 dark:text-yellow-500"
    />
  </div>
</template>
