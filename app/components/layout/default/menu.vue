<script setup lang="ts">
const { menuList } = storeToRefs(useMenuStore())
</script>

<template>
  <div
    relative="~" absolute="after:~" w="after:1px" h="after:full" bg="after:divider-light dark:after:divider-dark"
    top="after:0" right="after:0" content="after:empty"
  >
    <div
      h="64px after:1px" content="after:empty" w="after:full" bottom="after:0" left="after:0"
      relative="~" absolute="after:~" bg="after:divider-light dark:after:divider-dark"
    />
    <div p="4">
      <UNavigationMenu orientation="vertical" :items="menuList" class="data-[orientation=vertical]:w-48" />
    </div>
  </div>
</template>
