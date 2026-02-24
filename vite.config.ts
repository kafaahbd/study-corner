import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/study-corner/', // GitHub রিপোজিটরি নাম
});