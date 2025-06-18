import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

console.log('✅ Vite config loaded');


export default defineConfig({
  base: '/fusion-agency/',
  plugins: [
    tailwindcss(),
    
  ],
})