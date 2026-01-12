<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const people = [
  { id: 1, name: 'Leslie Alexander', url: '#' },

]

const open = ref(false)
const query = ref('')
const filteredPeople = computed(() =>
  query.value === ''
    ? []
    : people.filter((person) => {
        return person.name.toLowerCase().includes(query.value.toLowerCase())
      }),
)

function onSelect(person: { id: number, name: string, url: string & Location }) {
  if (person) {
    window.location = person.url
  }
}

defineExpose({ open })
</script>

<template>
  <HeadlessTransitionRoot :show="open" as="template" appear @after-leave="query = ''">
    <HeadlessDialog class="relative z-10" @close="open = false">
      <HeadlessTransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="" leave="ease-in duration-200" leave-from="" leave-to="opacity-0">
        <div class="bg-gray-500/25 transition-opacity inset-0 fixed dark:bg-gray-900/50" />
      </HeadlessTransitionChild>

      <div class="p-4 w-screen inset-0 fixed z-10 overflow-y-auto md:p-20 sm:p-6">
        <HeadlessTransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95" enter-to=" scale-100" leave="ease-in duration-200" leave-from=" scale-100" leave-to="opacity-0 scale-95">
          <HeadlessDialogPanel class="mx-auto outline-1 outline-black/5 rounded-xl bg-white max-w-xl shadow-2xl transform transition-all overflow-hidden divide-gray-100 divide-y dark:outline-white/10 dark:bg-gray-900 dark:divide-white/10 dark:-outline-offset-1">
            <HeadlessCombobox @update:model-value="onSelect">
              <div class="grid grid-cols-1">
                <HeadlessComboboxInput class="text-base text-gray-900 pl-11 pr-4 outline-hidden col-start-1 row-start-1 h-12 w-full sm:text-sm dark:text-white placeholder:text-gray-400 dark:bg-gray-900 dark:placeholder:text-gray-500" placeholder="Search..." @change="query = $event.target.value" @blur="query = ''" />
                <MagnifyingGlassIcon class="text-gray-400 ml-4 col-start-1 row-start-1 size-5 pointer-events-none self-center dark:text-gray-500" aria-hidden="true" />
              </div>

              <HeadlessComboboxOptions v-if="filteredPeople.length > 0" static class="text-sm text-gray-800 py-2 max-h-72 overflow-y-auto scroll-py-2 dark:text-gray-200">
                <HeadlessComboboxOption v-for="person in filteredPeople" :key="person.id" v-slot="{ active }" :value="person" as="template">
                  <li class="px-4 py-2 cursor-default select-none" :class="[active && 'bg-indigo-600 text-white outline-hidden dark:bg-indigo-500']">
                    {{ person.name }}
                  </li>
                </HeadlessComboboxOption>
              </HeadlessComboboxOptions>

              <p v-if="query !== '' && filteredPeople.length === 0" class="text-sm text-gray-500 p-4 dark:text-gray-400">
                No people found.
              </p>
            </HeadlessCombobox>
          </HeadlessDialogPanel>
        </HeadlessTransitionChild>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
