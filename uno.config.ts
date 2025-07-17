import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWebFonts, presetWind4, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetScrollbarHide } from 'unocss-preset-scrollbar-hide'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 font-ubuntumono'],
    // ['primary-text', 'dark:text-white-primary/70 light:text-black-primary/70 dark:hover:text-white-primary light:hover:text-black-primary dark:active:text-white-primary light:active:text-black-primary'],
    ['primary-text', 'dark:text-white-primary/70 light:text-black-primary/70 hover:'],
    ['primary-background', 'dark:bg-black-primary light:bg-white-primary'],
    ['secondary-background', 'dark:bg-black-secondary light:bg-white-secondary'],
    ['tertiary-background', 'dark:bg-black-tertiary light:bg-white-tertiary'],
    ['e-transition', 'transition-all duration-300 ease-in-out'],

  ],
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({ scale: 1.2 }),
    presetScrollbarHide(),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      extendTheme: true,
      fonts: { lemonada: { name: 'Lemonada' }, kuaiLe: { name: 'ZCOOL KuaiLe' } },
      inlineImports: false,
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      white: { primary: '#ffffff', secondary: '#f1f2f6', tertiary: '#dfe4ea' },
      black: { primary: '#2f3542', secondary: '#747d8c', tertiary: '#57606f' },
    },
  },
})
