import type { NavigationMenuItem } from '@nuxt/ui'

export const useMenuStore = defineStore(
  'menu',
  () => {
    const menuList = ref<NavigationMenuItem[]>([
      {
        label: 'Progress',
        icon: 'i-lucide-file-text',
        description: 'Show a horizontal bar to indicate task progression.',
        to: '/docs/components/progress',
      },
      {
        label: 'Upload',
        icon: 'i-hugeicons:upload-01',
        description: 'Show a horizontal bar to indicate task progression.',
        to: '/uploads',
      },
    ])

    return { menuList }
  },
  // { persist: { storage: piniaPluginPersistedstate.localStorage() } },
  { persist: { storage: piniaPluginPersistedstate.cookies() } },
)
