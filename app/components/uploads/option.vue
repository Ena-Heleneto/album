<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const state = reactive({
  email: undefined,
  password: undefined,
})

type Schema = typeof state

function validate(state: Partial<Schema>): FormError[] {
  const errors = []
  if (!state.email)
    errors.push({ name: 'email', message: 'Required' })
  if (!state.password)
    errors.push({ name: 'password', message: 'Required' })
  return errors
}

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  consola.log(event.data)
}
</script>

<template>
  <div p="4" flex="~ col" bg="#d6d3d1" rounded="2xl">
    <span>Upload Options</span>

    <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormField orientation="horizontal" label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormField>

      <UFormField orientation="horizontal" label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormField>

      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </div>
</template>
