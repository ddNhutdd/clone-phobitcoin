import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
		port: 3003,
	},
  plugins: [react()],
  resolve: {
		alias: {
			src: "/src",
			imgs:"/src/assets/imgs",
			components:'/src/components',
			context:'/src/context',
			pages:'/src/pages',
			hooks:'/src/hooks',
		},
	},
})
