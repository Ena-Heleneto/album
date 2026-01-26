<script setup lang="ts">
type UploadingFile = File & { progress?: number, preview?: string }

const fileModel = defineModel<UploadingFile[]>({ default: [] })

const progressIntervals = new Map<UploadingFile, ReturnType<typeof setInterval>>()
const previewUrls = new Map<UploadingFile, string>()

function handleUpload(files: UploadingFile[]) {
  consola.info('Uploading files:', files)

  files.forEach((file) => {
    const existing = progressIntervals.get(file)
    if (existing) {
      clearInterval(existing)
    }

    const interval = setInterval(() => {
      const nextProgress = Math.min((file.progress ?? 0) + 10, 100)
      file.progress = nextProgress
      // Reassign to refresh the view as progress updates.
      fileModel.value = [...fileModel.value]

      if (nextProgress >= 100) {
        clearInterval(interval)
        progressIntervals.delete(file)
      }
    }, 100)

    progressIntervals.set(file, interval)
  })
}

const _fileModel = computed({
  get: () => fileModel.value,
  set: (v: UploadingFile[]) => {
    const next = [...v]

    const removed = fileModel.value.filter(file => !next.includes(file))
    removed.forEach((file) => {
      const url = previewUrls.get(file)
      if (url) {
        URL.revokeObjectURL(url)
        previewUrls.delete(file)
      }
    })

    next.forEach((file) => {
      if (!previewUrls.has(file)) {
        const url = URL.createObjectURL(file)
        previewUrls.set(file, url)
        file.preview = url
      }
      file.progress = 10
    })
    fileModel.value = next
    handleUpload(next)
  },
})

async function handleChange(e: Event) {
  consola.info('File changed:', e)
}

onBeforeUnmount(() => {
  progressIntervals.forEach(clearInterval)
  progressIntervals.clear()

  previewUrls.forEach(url => URL.revokeObjectURL(url))
  previewUrls.clear()
})
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
      <div flex="~" items="center" gap="4" w="full">
        <NuxtImg v-if="file.preview" v-slot="{ src, imgAttrs }" custom :src="file.preview">
          <img
            :src="src"
            v-bind="imgAttrs"
            class="tw:h-full tw:w-auto tw:block tw:object-contain"
            alt=""
          >
        </NuxtImg>
        <div flex="~ col" w="full" justify="between" items="start" gap="2">
          <div class="tw:p-4 tw:border tw:rounded tw:mb-2">
            <div class="tw-font-bold">
              File {{ index + 1 }}: {{ file.name }}
            </div>
            <div>Size: {{ (file.size / 1024).toFixed(2) }} KB</div>
            <div v-if="file.progress !== undefined">
              Progress: {{ file.progress }}%
            </div>
          </div>

          <UProgress v-model="file.progress" />
        </div>
      </div>
    </template>
  </UFileUpload>
</template>
