import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Projeto-MPPF/', // substitua pelo nome do seu repositório
  // outras configurações
  plugins: [react()],
})
