<script lang="ts" setup>
definePageMeta({ layout: 'auth' })

const form = ref({ name: '', password: '', email: '', repassword: '', secret: false, push: false })

const rules = ref({
  name: [
    { required: true, message: '请输入用户名、手机号或邮箱', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符之间', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email' as const, message: '请输入有效的邮箱地址', trigger: 'blur' }
  ],
  repassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    { validator: (_rule: any, value: any, callback: any) => {
      if (value !== form.value.password)
        callback(new Error('两次输入的密码不一致'))
      else
        callback()
    }, trigger: 'blur' }
  ],
})
</script>

<template>
  <div class="max-w-md w-full">
    <div class="mb-8 text-center lg:hidden">
      <div class="mb-4 flex gap-3 items-center justify-center">
        <div class="bg-gradient-to-br rounded-lg flex h-10 w-10 items-center justify-center from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800">
          <div i-arcticons:aena class="bg-#ffffff h-6 w-6" />
        </div>
        <h1 class="text-2xl text-gray-900 font-bold dark:text-#ffffff">
          Platform
        </h1>
      </div>
    </div>

    <el-card class="overflow-hidden border-none! shadow-xl! [&_.el-card\_\_body]:bg-#fafaf9! [&_.el-card\_\_body]:transition! [&_.el-card\_\_body]:duration-[300ms]! dark:[&_.el-card\_\_body]:bg-#1f2937!">
      <div class="pb-6 space-y-1">
        <div class="text-2xl text-gray-900 font-semibold dark:text-#ffffff">
          创建您的账户
        </div>
        <div class="text-sm dark:text-gray-400">
          填写以下信息开始使用我们的平台
        </div>
      </div>

      <el-form :rules="rules" :model="form" label-width="auto">
        <el-form-item label="用户名" prop="name">
          <el-input v-model.trim="form.name" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model.trim="form.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="form.password" type="password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item label="确认密码" prop="repassword">
          <el-input v-model.trim="form.repassword" type="password" placeholder="请确认密码" />
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="form.secret">
            <span class="text-sm font-normal dark:text-gray-300">我同意</span>
            <nuxt-link href="/forgot-password" class="text-sm text-blue-600 hover:text-blue-700 hover:underline">
              服务条款
            </nuxt-link>
            <span class="text-sm font-normal dark:text-gray-300">和</span>
            <nuxt-link href="/forgot-password" class="text-sm text-blue-600 hover:text-blue-700 hover:underline">
              隐私政策
            </nuxt-link>
          </el-checkbox>

          <el-checkbox v-model="form.push">
            <span class="text-sm font-normal dark:text-gray-300"> 我希望接收产品更新和营销邮件</span>
          </el-checkbox>
        </el-form-item>
      </el-form>

      <el-button
        class="from-blue-600 to-purple-600 bg-linear-to-r border-none! h-11! w-full! dark:from-blue-700 dark:to-purple-700 hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-800 dark:hover:to-purple-800"
        type="primary"
      >
        创建账户
      </el-button>

      <el-divider class="[&_.el-divider\_\_text]:bg-#fafaf9 [&_.el-divider\_\_text]:p-0! dark:[&_.el-divider\_\_text]:bg-transparent">
        <span class="text-muted-foreground px-2 dark:text-gray-400 dark:bg-gray-800">或使用以下方式注册</span>
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
          已有账户?
          <nuxt-link href="/signup" class="text-blue-600 font-medium dark:text-blue-400 hover:text-blue-700 hover:underline dark:hover:text-blue-300">
            立即登录
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
