<script lang="ts" setup>
function handleUpload() {

}

const uploadModel = ref<File[]>([])
</script>

<template>
  <div size="full" flex="~" h="full" min="w-0" gap="5xl">
    <UploadsPicker v-model="uploadModel" @upload="handleUpload" />
    <UploadsOption />
  </div>
</template>
