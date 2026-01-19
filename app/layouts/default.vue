<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale, setLocale } = useI18n()
</script>

<template>
  <div size="full" flex="~" justify="between">
    <LayoutDefaultMenu />

    <div flex="1 ~ col" h="full" gap="2" min-h="0">
      <header
        flex="~" items="center" justify="between" p="4" content="after:empty" relative="~" gap="4"
        absolute="after:~" w="after:full" h="after:1px" bg="after:divider-light dark:after:divider-dark" bottom="after:0" left="after:0"
      >
        <div flex="~" items="center" gap="4">
          <LayoutDefaultHeaderSearch />

          <UButton color="neutral" variant="subtle" icon="i-lucide-search" shadow="none">
            UPLOAD
          </UButton>

          <LayoutDefaultHeaderToggle />
        </div>

        <div flex="~" items="center" gap="4">
          <UColorModeButton />

          <ULocaleSelect
            :model-value="locale"
            :locales="Object.values(locales)"
            @update:model-value="setLocale($event as 'en' | 'zh')"
          />
        </div>
      </header>

      <main w="full" p="4" flex="~ col 1" min="h-0" gap="4">
        <div>
          <h1 text="2xl" font="semibold" > 
            Upload
          </h1>
          <span>Drag and drop files or click to upload</span>
        </div>
        <div w="full" flex="1">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
