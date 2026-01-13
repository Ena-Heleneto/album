<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { ref } from 'vue'

const isCollapse = ref(true)
function handleOpen(key: string, keyPath: string[]) {
  consola.log(key, keyPath)
}
function handleClose(key: string, keyPath: string[]) {
  consola.log(key, keyPath)
}
</script>

<template>
  <div flex="~ col" w="100px" h="full">
    <LayoutDefaultLogo />
    <div flex="1">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :value="false">
          expand
        </el-radio-button>
        <el-radio-button :value="true">
          collapse
        </el-radio-button>
      </el-radio-group>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title>
              <span>Group One</span>
            </template>
            <el-menu-item index="1-1">
              item one
            </el-menu-item>
            <el-menu-item index="1-2">
              item two
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">
              item three
            </el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>
              <span>item four</span>
            </template>
            <el-menu-item index="1-4-1">
              item one
            </el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><IconMenu /></el-icon>
          <template #title>
            Navigator Two
          </template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><Document /></el-icon>
          <template #title>
            Navigator Three
          </template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><Setting /></el-icon>
          <template #title>
            Navigator Four
          </template>
        </el-menu-item>
      </el-menu>
    </div>
    <LayoutDefaultStorageGuard />
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
