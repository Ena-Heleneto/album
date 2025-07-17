<script setup lang="ts">
const pages = ref([
  { id: 'home', name: '首页', icon: 'Home' },
  { id: 'cloud', name: '网盘管理' },
  { id: 'compress', name: '图像压缩' },
  { id: 'convert', name: '格式转换' },
  { id: 'crop', name: '图像剪裁' },
])
</script>

<template>
  <nav class="border-b bg-#ffffff bg-op-80 w-full top-0 fixed z-50 backdrop-blur-md">
    <div class="mx-auto px-4 max-w-7xl lg:px-8 sm:px-6">
      <div class="flex h-16 items-center justify-between">
        <div class="flex gap-2 items-center">
          <div class="rounded-lg flex h-8 w-8 items-center justify-center from-blue-500 to-purple-600 bg-linear-to-r">
            <Zap class-name="h-5 w-5 text-#ffffff" />
          </div>
          <span class="text-xl text-transparent font-bold from-blue-600 to-purple-600 bg-linear-to-r bg-clip-text">
            ImagePro
          </span>
        </div>
      </div>

      <div class="hidden items-center space-x-1 md:flex">
        <el-button v-for="(item, index) in pages" :key="index">
          {{ item.name }}
        </el-button>

        <el-button>
          开始使用
        </el-button>
        <!-- {pages.map((page) => (
        <Button
          key="{page.id}"
          variant="{currentPage" =="=" page.id ? "default" : "ghost"}
          on-click="{()" =
        >
          onPageChange?.(page.id)}
          className="text-sm"
          >
          {page.name}
        </Button>
        ))}
        <div className="ml-4 flex items-center gap-2">
          <ThemeToggle />
          {currentPage === "home" && onGetStarted && (
          <Button
            on-click="{onGetStarted}"
            class-name="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            开始使用
          </Button>
          )}
        </div> -->
      </div>
    </div>
  </nav>
</template>
