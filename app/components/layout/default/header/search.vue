<script setup lang="ts">
// const LayoutDefaultSearchAndUploadRef = useTemplateRef('LayoutDefaultSearchAndUploadRef')
const searchTerm = ref('')

const { data: users, status } = await useFetch('https://jsonplaceholder.typicode.com/users', {
  key: 'command-palette-users',
  params: { q: searchTerm },
  transform: (data: { id: number, name: string, email: string }[]) => {
    return data?.map(user => ({ id: user.id, label: user.name, suffix: user.email, avatar: { src: `https://i.pravatar.cc/120?img=${user.id}` } })) || []
  },
  lazy: true,
})

const groups = computed(() => [{
  id: 'users',
  label: searchTerm.value ? `Users matching “${searchTerm.value}”...` : 'Users',
  items: users.value || [],
  ignoreFilter: true,
}])
</script>

<template>
  <UModal>
    <UButton color="neutral" variant="subtle" icon="i-lucide-search" w="lg" shadow="none">
      Search images, albums, tags...
    </UButton>

    <template #content>
      <UCommandPalette
        v-model:search-term="searchTerm"
        :loading="status === 'pending'"
        :groups="groups"
        class="flex-1 h-80 w-full"
      />
    </template>
  </UModal>
</template>
