<script setup lang="ts">
const LayoutDefaultSearchAndUploadRef = useTemplateRef('LayoutDefaultSearchAndUploadRef')
</script>

<template>
  <header p="x-4 y-3" flex="~" justify="between" items="center">
    <div flex="~" items="center" gap="4">
      <LayoutDefaultToggle />

      <button
        type="button"
        w="lg"
        h="40px"
        border="1 solid #ddd"
        rounded="md"
        bg="#fff"
        flex="~"
        items="center"
        aria-haspopup="dialog"
        cursor="text"
        :aria-expanded="LayoutDefaultSearchAndUploadRef?.open ? 'true' : 'false'"
        @click="LayoutDefaultSearchAndUploadRef && (LayoutDefaultSearchAndUploadRef.open = true)"
      >
        <span class="text">
          点击搜索
        </span>
      </button>
    </div>
    <div>123</div>

    <LayoutDefaultSearchAndUpload ref="LayoutDefaultSearchAndUploadRef" />
  </header>
</template>
