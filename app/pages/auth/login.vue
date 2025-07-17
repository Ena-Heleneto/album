<script lang="ts" setup>
definePageMeta({ layout: 'auth' })

const form = ref({ name: '', password: '', remember: false })

const rules = ref({
  name: [
    { required: true, message: '请输入用户名、手机号或邮箱', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符之间', trigger: 'blur' },
  ],
})
</script>

<template>
  <div class="max-w-md w-full">
    <div class="mb-8 text-center lg:hidden">
      <div class="mb-4 flex gap-3 items-center justify-center">
        <div class="rounded-lg flex h-10 w-10 items-center justify-center from-blue-600 to-purple-700 bg-linear-to-br dark:from-blue-700 dark:to-purple-800">
          <div i-arcticons:aena class="bg-#ffffff h-6 w-6" />
        </div>
        <h1 class="text-2xl text-gray-900 font-bold dark:text-#ffffff">
          Ena Heleneto
        </h1>
      </div>
    </div>

    <el-card class="overflow-hidden border-none! shadow-xl! [&_.el-card\_\_body]:bg-#fafaf9! [&_.el-card\_\_body]:transition! [&_.el-card\_\_body]:duration-[300ms]! dark:[&_.el-card\_\_body]:bg-#1f2937!">
      <div class="pb-6 space-y-1">
        <div class="text-2xl text-gray-900 font-semibold dark:text-#ffffff">
          登录您的账户
        </div>
        <div class="text-sm dark:text-gray-400">
          输入您的凭证以访问仪表板
        </div>
      </div>

      <el-form :rules="rules" :model="form" label-width="auto">
        <el-form-item label="凭证" prop="name">
          <el-input v-model.trim="form.name" placeholder="请输入用户名、手机号、邮箱" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="form.password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <div class="flex w-full items-center justify-between">
            <el-checkbox v-model="form.remember" label="30天内免登录" />

            <nuxt-link href="/forgot-password" class="text-sm text-blue-600 hover:text-blue-700 hover:underline">
              忘记密码
            </nuxt-link>
          </div>
        </el-form-item>
      </el-form>

      <el-button
        class="from-blue-600 to-purple-600 bg-linear-to-r border-none! h-11! w-full! dark:from-blue-700 dark:to-purple-700 hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-800 dark:hover:to-purple-800"
        type="primary"
      >
        登录
      </el-button>

      <el-divider class="[&_.el-divider\_\_text]:bg-#fafaf9 [&_.el-divider\_\_text]:p-0! dark:[&_.el-divider\_\_text]:bg-transparent">
        <span class="text-muted-foreground px-2 dark:text-gray-400 dark:bg-gray-800">或使用以下方式登录</span>
      </el-divider>

      <div class="gap-3 grid grid-cols-2 [&_.el-button]:h-11">
        <el-button class="dark:border-gray-600 dark:bg-gray-700 [&_span]:flex [&_span]:gap-4 [&_span]:items-center [&_span]:justify-center dark:hover:bg-gray-600">
          <div i-arcticons:google class="dark:text-gray-200" />
          <div class="bg-transparent dark:text-gray-200">
            Google
          </div>
        </el-button>
        <el-button class="dark:border-gray-600 dark:bg-gray-700 [&_span]:flex [&_span]:gap-4 [&_span]:items-center [&_span]:justify-center dark:hover:bg-gray-600">
          <div i-arcticons:github class="dark:text-gray-200" />
          <div class="bg-transparent dark:text-gray-200">
            GitHub
          </div>
        </el-button>
      </div>

      <div class="pt-6 flex flex-col space-y-4">
        <div class="text-muted-foreground text-sm text-center dark:text-gray-400">
          还没有账户?
          <nuxt-link href="/signup" class="text-blue-600 font-medium dark:text-blue-400 hover:text-blue-700 hover:underline dark:hover:text-blue-300">
            点击注册
          </nuxt-link>
        </div>
      </div>

      <div class="text-muted-foreground text-xs mt-3 flex gap-4 items-center justify-center dark:text-gray-500">
        <nuxt-link href="/privacy" class="hover:text-foreground hover:underline dark:hover:text-gray-300">
          隐私协议
        </nuxt-link>
        <span>•</span>
        <nuxt-link href="/terms" class="hover:text-foreground hover:underline dark:hover:text-gray-300">
          条款
        </nuxt-link>
        <span>•</span>
        <nuxt-link href="/support" class="hover:text-foreground hover:underline dark:hover:text-gray-300">
          支持
        </nuxt-link>
      </div>
    </el-card>

    <div class="mt-6 text-center">
      <div class="text-muted-foreground text-sm flex gap-2 items-center justify-center dark:text-gray-400">
        <div i-arcticons:aena class="bg-#333 h-4 w-4" />
        <span>受企业级安全保护</span>
      </div>
    </div>
  </div>
</template>
