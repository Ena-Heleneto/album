<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const state = reactive({ visibility: 'Public', password: undefined })

type Schema = typeof state

function validate(state: Partial<Schema>): FormError[] {
  const errors = []
  if (!state.visibility)
    errors.push({ name: 'visibility', message: 'Required' })
  if (!state.password)
    errors.push({ name: 'password', message: 'Required' })
  return errors
}

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  consola.log(event.data)
}

const items = ref(['Public', 'Private'])
</script>

<template>
  <div p="4" flex="~ col" min="w-1/5" bg="#d6d3d1 dark:#070709" rounded="2xl">
    <span text="lg" font="bold">Upload Options</span>

    <UForm :validate="validate" :state="state" class="tw:mb-4 tw:space-y-4" @submit="onSubmit">
      <UFormField orientation="horizontal" name="visibility" class="tw:items-center">
        <template #label>
          <div flex="~ col" gap="1">
            <span text="lg">Visibility</span>
            <span text="sm">Only you can view</span>
          </div>
        </template>

        <USelect v-model="state.visibility" arrow :items="items" class="tw:w-30" />
      </UFormField>

      <UFormField orientation="horizontal" label="Password" name="password" class="tw:items-center">
        <template #label />
      </UFormField>

      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </div>
</template>
