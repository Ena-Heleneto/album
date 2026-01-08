<script lang="ts" setup>
// import type { UploadProps } from 'element-plus'
// import { Plus } from '@element-plus/icons-vue'
// import { ElMessage } from 'element-plus'

// import { ref } from 'vue'

// const imageUrl = ref('')

// const handleAvatarSuccess: UploadProps['onSuccess'] = (
//   response,
//   uploadFile,
// ) => {
//   imageUrl.value = URL.createObjectURL(uploadFile.raw!)
// }

// const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
//   if (rawFile.type !== 'image/jpeg') {
//     ElMessage.error('Avatar picture must be JPG format!')
//     return false
//   }
//   else if (rawFile.size / 1024 / 1024 > 2) {
//     ElMessage.error('Avatar picture size can not exceed 2MB!')
//     return false
//   }
//   return true
// }

import type { FilesCardProps } from 'vue-element-plus-x/types/FilesCard'

import { Attachments } from 'vue-element-plus-x'

type SelfFilesCardProps = FilesCardProps & {
  id?: number
}

const files = ref<SelfFilesCardProps[]>([])

function handleBeforUpload(file: any) {
  consola.log('befor', file)
  if (file.size > 1024 * 1024 * 2) {
    ElMessage.error('文件大小不能超过 2MB!')
    return false
  }
}

async function handleUploadDrop(files: any, props: any) {
  consola.log('drop', files)
  consola.log('props', props)

  if (files && files.length > 0) {
    if (files[0].type === '') {
      ElMessage.error('禁止上传文件夹！')
      return false
    }

    for (let index = 0; index < files.length; index++) {
      const file = files[index]
      await handleHttpRequest({ file })
    }
  }
}

async function handleHttpRequest(options: any) {
  const formData = new FormData()
  formData.append('file', options.file)
  ElMessage.info('上传中...')

  setTimeout(() => {
    const res = {
      message: '文件上传成功',
      fileName: options.file.name,
      uid: options.file.uid,
      fileSize: options.file.size,
      imgFile: options.file,
    }
    files.value.push({
      id: files.value.length,
      uid: res.uid,
      name: res.fileName,
      fileSize: res.fileSize,
      imgFile: res.imgFile,
      showDelIcon: true,
      imgVariant: 'square',
    })
    ElMessage.success('上传成功')
  }, 1000)
}

function handleDeleteCard(item: SelfFilesCardProps) {
  files.value = files.value.filter((items: any) => items.id !== item.id)
  consola.log('delete', item)
  ElMessage.success('删除成功')
}
</script>

<template>
  <ClientOnly>
    <Attachments
      :http-request="handleHttpRequest"
      :items="files"
      drag
      :before-upload="handleBeforUpload"
      :hide-upload="false"
      @upload-drop="handleUploadDrop"
      @delete-card="handleDeleteCard"
    />
  </ClientOnly>
</template>
