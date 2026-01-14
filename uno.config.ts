import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['text', 'color-primary-light bg-primary-dark'],
  ],
  presets: [
    presetWind4({ preflights: { reset: false } }),
    presetAttributify(),
    presetIcons({ scale: 1.2 }),
    presetTypography(),
    presetWebFonts({
      fonts: { sans: 'DM Sans', serif: 'DM Serif Display', mono: 'DM Mono' },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: { light: '#1e3a8a', dark: '#030303' },
      secondary: { light: '#121214', dark: '#CFCFCF' },
      accent: { light: '#7D7B04', dark: '#EDEDED' },
      base: { light: '#020203', dark: '#EDEDED' },
      card: { light: '#08080A', dark: '#EDEDED' },
      popover: { light: '#08080A', dark: '#EDEDED' },
      muted: { light: '#121214', dark: '#808080' },

      divider: { light: '#737373', dark: '#57534e' },
    },
  },
})
