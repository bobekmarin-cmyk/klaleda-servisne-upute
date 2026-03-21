import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages (project site): /ime-repoa/ — u CI postavi BASE_PATH, lokalno ostaje /
const raw = process.env.BASE_PATH?.trim()
const base =
  raw && raw !== '/'
    ? raw.endsWith('/')
      ? raw
      : `${raw}/`
    : '/'

export default defineConfig({
  base,
  plugins: [react()],
})
