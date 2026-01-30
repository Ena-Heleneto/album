<script lang="ts" setup>
type UploadingFile = File & { progress?: number, preview?: string }

const progressIntervals = new Map<UploadingFile, ReturnType<typeof setInterval>>()
const uploadModel = ref<File[]>([])

async function handleUpload(files: File[]) {
  consola.start('Files to upload:', files)
  // files.forEach((file) => {
  //   const existing = progressIntervals.get(file)
  //   if (existing) {
  //     clearInterval(existing)
  //   }

  //   const interval = setInterval(() => {
  //     const nextProgress = Math.min((file.progress ?? 0) + 10, 100)
  //     file.progress = nextProgress
  //     // Reassign to refresh the view as progress updates.
  //     uploadModel.value = [...uploadModel.value]

  //     if (nextProgress >= 100) {
  //       clearInterval(interval)
  //       progressIntervals.delete(file)
  //     }
  //   }, 100)

  //   progressIntervals.set(file, interval)
  // })
  for await (const file of files) {
    const { data: result } = await useAsyncData(
      () => fetchSignedUrl({ contentType: file.type, fileExt: file.name.split('.').pop() || '', fileName: file.name }),
      { pick: ['data', 'code'] },
    )

    const formData = new FormData()
    formData.append('file', file)
    const res = await $fetch(result.value?.data.url, { body: formData, method: 'PUT' })
    consola.success('Got signed URL:', result.value)
  }
  // }
}

onBeforeUnmount(() => {
  progressIntervals.forEach(clearInterval)
  progressIntervals.clear()
})
</script>

<template>
  <div size="full" flex="~" h="full" min="w-0" gap="5xl">
    <UploadsPicker v-model="uploadModel" @upload="handleUpload" />
    <UploadsOption />
  </div>
</template>
