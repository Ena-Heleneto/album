<script setup lang="ts">
const state = ref({ visibility: 'Public', expiry: 'Never', password: undefined, watermark: false, album: 'Nature Collection' })

const visibilityItems = ref(['Public', 'Private'])
const visibilityLabels = computed(() => ({ Public: 'Anyone with the link can view', Private: 'Only you can view' }[state.value.visibility]))
const expiryItems = ref(['Never', '7 Day', '30 Day', 'Custom'])
const albumItems = ref(['Nature Collection', 'Travel Memories', 'Portraits', 'Architecture', 'Street Photography', 'Food & Lifestyle'])
</script>

<template>
  <div p="4" flex="~ col" w="1/4" bg="#d6d3d1 dark:#070709" rounded="2xl" h="lg">
    <span text="md" font="bold" mb="xl">Upload Options</span>

    <UForm :state="state" class="tw:mb-4 tw:space-y-4">
      <UFormField orientation="horizontal" name="visibility" class="tw:items-center">
        <template #label>
          <div flex="~ col" gap="1">
            <span text="sm">Visibility</span>
            <span text="xs">{{ visibilityLabels }}</span>
          </div>
        </template>

        <USelect v-model="state.visibility" arrow :items="visibilityItems" class="tw:w-30" />
      </UFormField>

      <UFormField orientation="horizontal" name="expiry" class="tw:items-center">
        <template #label>
          <div flex="~ col" gap="1">
            <span text="sm">Link Expiry</span>
            <span text="xs">When shared links expire</span>
          </div>
        </template>

        <USelect v-model="state.expiry" arrow :items="expiryItems" class="tw:w-30" />
      </UFormField>

      <UFormField orientation="horizontal" name="watermark" class="tw:items-center">
        <template #label>
          <div flex="~ col" gap="1">
            <span text="sm">Watermark</span>
            <span text="xs">Add watermark to shared images</span>
          </div>
        </template>

        <USwitch v-model="state.watermark" />
      </UFormField>

      <UFormField orientation="horizontal" name="album" class="tw:items-center">
        <template #label>
          <div flex="~ col" gap="1">
            <span text="sm">Target Album</span>
            <span text="xs">Add uploads to an album</span>
          </div>
        </template>

        <USelect v-model="state.album" arrow :items="albumItems" class="tw:w-30" />
      </UFormField>
    </UForm>
  </div>
</template>
