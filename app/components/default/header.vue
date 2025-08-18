<script setup lang="ts">
const nav = ref([
  { name: $t('home'), path: '' },
  { name: $t('could'), path: '' },
  { name: $t('zap'), path: '' }
])
</script>

<template>
  <div class="dark:border-dark-border light:border-light-border border-b w-full transition-colors top-0 fixed z-50 backdrop-blur-md dark:bg-dark-layout/70 light:bg-light-layout/70">
    <div class="mx-auto px-4 flex h-16 max-w-7xl items-center justify-between lg:px-8 sm:px-6">
      <div class="flex gap-3 items-center">
        <div i-ri:anchor-fill class="size-10 transition-colors dark:text-dark-text light:text-light-text" />
        <span class="text-xl text-transparent font-bold from-blue-600 to-purple-600 bg-gradient-to-r bg-clip-text">
          ImagePro
        </span>
      </div>

      <div class="gap-3 hidden items-center md:flex">
        <NuxtLink v-for="(item, index) in nav" :key="index" :to="item.path" class="transition-colors dark:text-dark-text light:text-light-text">
          <button>
            {{ item.name }}
          </button>
        </NuxtLink>
        <theme-toggle />
      </div>

      <div class="flex gap-2 items-center md:hidden">
        <div i-ri:apps-2-line class="text-#ffffff h-5 w-5" />
      </div>
    </div>
  </div>
</template>
