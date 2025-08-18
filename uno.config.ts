import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWind4, transformerDirectives, transformerVariantGroup } from 'unocss'

import { presetScrollbarHide } from 'unocss-preset-scrollbar-hide'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({ scale: 1.2 }),
    presetScrollbarHide(),
    presetTypography()

  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ],
  theme: {
    colors: {
      dark: { layout: '#333', section: '#57606f', text: '#ffffff', border: '#57534e' },
      light: { layout: '#fff', section: '#dfe4ea', text: '#2f3542', border: '#a8a29e' }
    }
  },
  rules: [],
})
