<script setup lang="ts">
import { Welcome } from 'vue-element-plus-x'
</script>

<template>
  <div size="screen" flex="~ col" gap="4" p="4">
    <ClientOnly>
      <Welcome title="Ena 的 边缘计算实验室💖" description="这是描述信息 ~" />
      <template #fallback>
        <p>Loading comments...</p>
      </template>
    </ClientOnly>

    <main flex="1 ~" items="center" justify="center">
      <slot />
    </main>
  </div>
</template>
