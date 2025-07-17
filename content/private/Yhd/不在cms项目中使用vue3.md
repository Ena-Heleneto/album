# 不在cms项目中升级vue

## 问题描述

ant design vue 3+ 版本中出现了与vue3.4+版本不兼容的问题，虽然问题在vue3.5版本中修复，
但是项目受到 3.5版本新增的类型规则 限制，导致类型校验不通过无法提交代码，所以不建议在cms项目中使用vue3.4+

## 相关issue

- https://github.com/vueComponent/ant-design-vue/pull/7252
- https://github.com/vueComponent/ant-design-vue/issues/7329
- https://github.com/vueComponent/ant-design-vue/issues/7257

- https://github.com/nuxt/nuxt/pull/28285
- https://github.com/vuejs/core/blob/main/CHANGELOG.md

## 包含内容

- app.onUnmount()
- app.config.idPrefix()
- app.config.throwUnhandledErrorInProduction()
- watchEffect()
  - pause()
  - resume()
  - stop()
- defineModel()
- onWatcherCleanup()
- useTemplateRef()
- useId()
