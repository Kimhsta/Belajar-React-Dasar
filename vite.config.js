import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import HelloWorld from './src/HelloWorld/hello-world'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        //Penadahan index
        index: "index.html",
        hello_world: "hello-world.html"
      }
    }
  },
})
