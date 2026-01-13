<script setup lang="ts">
const { menuList } = storeToRefs(useMenuStore())
</script>

<template>
  <UNavigationMenu orientation="vertical" :items="menuList" class="data-[orientation=vertical]:w-48" />
</template>
