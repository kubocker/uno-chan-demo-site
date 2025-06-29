import { defineConfig } from 'unocss';
import { unoChanPreset } from 'uno-chan';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';

export default defineConfig({
  presets: [
    unoChanPreset,
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  rules: [
    ['color-primary', { color: 'red' }],
  ],
  shortcuts: [],
});
