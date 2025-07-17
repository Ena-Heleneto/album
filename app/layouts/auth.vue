<script lang="ts" setup>
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

const isDark = computed(() => color.value === 'dark')
</script>

<template>
  <div class="flex min-h-screen transition duration-300 from-slate-50 to-gray-50 via-#ffffff bg-linear-to-br dark:from-gray-900 dark:to-slate-900 dark:via-gray-800">
    <div class="text-#ffffff p-12 flex-col hidden transition justify-between from-blue-600 to-purple-700 bg-linear-to-br lg:flex lg:w-1/2 dark:from-blue-700 dark:to-purple-800">
      <div>
        <div class="mb-8 flex gap-3 items-center">
          <div class="rounded-lg bg-#ffffff/20 flex h-10 w-10 items-center justify-center">
            <div i-arcticons:aena class="h-6 w-6" />
          </div>
          <h1 class="text-2xl font-bold">
            Platform
          </h1>
        </div>

        <div class="space-y-6">
          <h2 class="text-3xl leading-tight font-bold">
            所有工具集成在一个安全平台
          </h2>
          <p class="text-lg text-blue-100 dark:text-blue-50">
            访问您的仪表板，管理内容，安全认证等功能 - 全部集成在一个平台中。
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-blue-100 dark:text-blue-50">
          <div i-arcticons:aena class="h-5 w-5" />
          <span>高级双因素认证</span>
        </div>
        <div className="flex items-center gap-3 text-blue-100 dark:text-blue-50">
          <div i-arcticons:aena class="h-5 w-5" />
          <span>综合仪表板</span>
        </div>
        <div className="flex items-center gap-3 text-blue-100 dark:text-blue-50">
          <!-- <div i-arcticons:aena class="h-5 w-5" /> -->
          <div i-arcticons:brain-out class="h-5 w-5" />
          <span>内容管理系统</span>
        </div>
        <div className="flex items-center gap-3 text-blue-100 dark:text-blue-50">
          <div i-arcticons:aena class="h-5 w-5" />
          <span>团队协作工具</span>
        </div>
      </div>
    </div>

    <div class="p-8 flex flex-1 items-center justify-center relative">
      <client-only>
        <div
          class="p-2 border border-gray-200 rounded-lg bg-#ffffff/80 cursor-pointer right-4 top-4 absolute z-50 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80" @click="toggleDark"
        >
          <div v-if="isDark" i-arcticons:sunilpaulmathew-weather class="text-yellow h-4 w-4" />
          <div v-else i-arcticons:moon class="text-gray h-4 w-4" />
        </div>
      </client-only>
      <slot />
    </div>
  </div>
</template>
