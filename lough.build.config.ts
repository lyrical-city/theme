import { defineConfig } from '@lough/build-cli';

export default defineConfig({
  external: ['colorfully'],
  globals: { colorfully: 'Colorfully' },
  style: false,
  input: 'src/index.ts'
});
