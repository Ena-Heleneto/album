<script lang="ts" setup>
import type { FilesCardProps } from 'vue-element-plus-x/types/FilesCard'

// import { useLogger } from '@nuxt/kit'
import { Attachments } from 'vue-element-plus-x'

type SelfFilesCardProps = FilesCardProps & {
  id?: number
}
const files = ref<SelfFilesCardProps[]>([])

const action = ref<string>('')

async function handleBeforeUpload(file: File) {
  consola.info(2)

  try {
    const { data: result } = await useAsyncData(
      () => fetchSignedUrl({ contentType: file.type, fileExt: file.name.split('.').pop() || '', fileName: file.name }),
      { pick: ['data', 'code'] },
    )
    const { code, data } = result.value || {}
    if (code !== 2000)
      throw new Error('获取上传地址失败')
    action.value = typeof data === 'string' ? data : (data?.url || '')

    return true
  }
  catch (error) {
    ElMessage.error((error as Error).message || '获取上传地址失败')
    return false
  }
}

async function handleUploadDrop(files: any, _props: any) {
  if (files && files.length > 0) {
    if (files[0].type === '') {
      ElMessage.error('禁止上传文件夹！')
      return false
    }

    // for (let index = 0; index < files.length; index++) {
    //   const file = files[index]
    //   await handleHttpRequest({ file, action: action.value })
    // }
  }
}

// async function handleHttpRequest(options: any, url: string) {
//   consola.info(1)
//   const formData = new FormData()
//   formData.append('file', options.file)
//   ElMessage.info('上传中...')

//   const res = await $fetch(url, { body: formData, method: 'POST' })

//   // setTimeout(() => {
//   //   const res = {
//   //     message: '文件上传成功',
//   //     fileName: options.file.name,
//   //     uid: options.file.uid,
//   //     fileSize: options.file.size,
//   //     imgFile: options.file,
//   //   }
//   files.value.push({ id: files.value.length, uid: res.uid, name: res.fileName, fileSize: res.fileSize, imgFile: res.imgFile, showDelIcon: true, imgVariant: 'square' })
//   ElMessage.success('上传成功')
//   // }, 1000)
// }

function handleDeleteCard(item: SelfFilesCardProps) {
  files.value = files.value.filter((items: any) => items.id !== item.id)
  ElMessage.success('删除成功')
}
</script>

<template>
  <!-- <ClientOnly>
    <Attachments
      :http-request="handleHttpRequest"
      :auto-upload="false"
      :items="files"
      drag
      :before-upload="handleBeforeUpload"
      :hide-upload="false"
      @upload-drop="handleUploadDrop"
      @delete-card="handleDeleteCard"
    />
  </ClientOnly> -->
  <ClientOnly>
    <Attachments
      :action="action"
      :items="files"
      method="put"
      drag
      :before-upload="handleBeforeUpload"
      @upload-drop="handleUploadDrop"
      @delete-card="handleDeleteCard"
    />
  </ClientOnly>
</template>
