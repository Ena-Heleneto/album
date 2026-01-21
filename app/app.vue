<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'
import { computed } from 'vue'
import { appName } from '~/constants'

const { locale } = useI18n()
const uiLocale = computed(() => locales[locale.value as keyof typeof locales] ?? locales.en)
useHead({ title: appName })
</script>

<template>
  <VitePwaManifest />
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <UApp :locale="uiLocale">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  transition:
    background-color 3s,
    background 3s,
    color 3s;
}

html.dark {
  color-scheme: dark;
}
</style>
