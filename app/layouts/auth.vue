<script lang="ts" setup>
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

const isDark = computed(() => color.value === 'dark')
</script>

<template>
  <div class="flex min-h-screen transition-colors duration-300 from-purple-50 to-orange-50 via-pink-50 bg-linear-to-br dark:from-gray-900 dark:to-pink-900/20 dark:via-purple-900/20">
    <button class="p-2 border-gray-200 rounded-lg bg-#ffffff/80 right-4 top-4 fixed z-50 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80 hover:bg-#ffffff dark:hover:bg-gray-800" @click="toggleDark">
      <ClientOnly>
        <div v-if="isDark" i-solar:sun-broken class="text-yellow-500 h-7 w-7" />
        <div v-else i-solar:moon-broken class="text-gray-600 h-7 w-7" />
      </ClientOnly>
    </button>
    <div id="Branding" class="text-#ffffff p-12 flex-col hidden justify-between relative overflow-hidden from-purple-600 to-orange-500 via-pink-600 bg-linear-to-br lg:flex lg:w-1/2 dark:from-purple-800 dark:to-orange-700 dark:via-pink-800" />
    <div id="Form">
      <slot />
    </div>
  </div>
</template>
