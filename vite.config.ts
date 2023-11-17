import { resolve } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from "vite-plugin-glsl"
// https://vitejs.dev/config/

//@ts-ignore
const root = resolve(__dirname, "src");

export default defineConfig({
  plugins: [react(), glsl()],
  resolve: {
    alias: {
      "components": resolve(root, "components"),
      "types": resolve(root, "types"),
      "shaders": resolve(root, "shaders"),
      "utils": resolve(root, "utils"),
    }
  }
})
