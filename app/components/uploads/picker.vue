<script setup lang="ts">
const fileModel = defineModel<File[]>({ default: [] })

function handleUpload(v: File[]) {
  consola.info('Uploading files:', v)
}

const _fileModel = computed({
  get: () => fileModel.value,
  set: (v) => {
    const next = [...v]
    next.forEach(element => element.progress = 10)
    fileModel.value = next
    handleUpload(next)
  },
})

async function handleChange(e: Event) {
  consola.info('File changed:', e)
}
</script>

<template>
  <UFileUpload
    v-model="_fileModel" position="outside"
    layout="list" class="tw:flex-1 tw:min-h-300px tw:w-full" :interactive="true"
    accept="image/*" multiple
    :ui="{ base: 'tw:h-2/5 tw:flex-none', root: 'tw:h-full tw:min-h-0 tw:gap-4', files: 'tw:flex-1 tw:min-h-0 tw:overflow-y-auto' }"
    @change="handleChange"
  >
    <template #file="{ file, index }">
      {{ consola.info('Custom rendering file item:', file, index) }}
      <div class="tw-p-4 tw-border tw-rounded tw-mb-2">
        <div class="tw-font-bold">
          File {{ index + 1 }}: {{ file.name }}
        </div>
        <div>Size: {{ (file.size / 1024).toFixed(2) }} KB</div>
        <div v-if="file.progress !== undefined">
          Progress: {{ file.progress }}%
        </div>
      </div>
    </template>
  </UFileUpload>
</template>
