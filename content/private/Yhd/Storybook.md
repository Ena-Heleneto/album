# Storybook 最小使用文档

## 安装

首先，安装 Storybook：

```bash
npx sb init
```

```
 pnpm add @storybook/addon-actions@6.5.16 @storybook/addon-essentials@6.5.16 @storybook/addon-interactions@6.5.16 @storybook/addon-links@6.5.16 @storybook/builder-vite@^0.2.5 @storybook/core@6.5.16 @storybook/core-server@6.5.16 @storybook/testing-library@^0.2.2 @storybook/vue3@^6.5.16 -D
```

## 配置

在 `.storybook` 目录下创建或修改 `main.js` 文件：

```javascript
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
}
```

## 创建一个 Vue 组件

在 `src/components` 目录下创建一个 Vue 组件，例如 `MyButton.vue`：

```vue
<script>
export default {
  name: 'MyButton',
  props: {
    label: {
      type: String,
      default: 'Button',
    },
  },
  emits: ['click'],
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<template>
  <button @click="handleClick">
    {{ label }}
  </button>
</template>
```

## 创建一个 Story

在 `src/stories` 目录下创建一个 Story 文件，例如 `MyButton.stories.js`：

```javascript
import MyButton from '../components/MyButton.vue'

export default {
  title: 'Example/MyButton',
  component: MyButton,
}

function Template(args) {
  return {
    components: { MyButton },
    setup() {
      return { args }
    },
    template: '<MyButton v-bind="args" @click="onClick" />',
  }
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary Button',
}

Primary.argTypes = {
  onClick: { action: 'clicked' },
}
```

## 运行 Storybook

使用以下命令启动 Storybook：

```bash
npm run storybook
```

现在你可以在浏览器中打开 `http://localhost:6006` 查看你的组件故事。
