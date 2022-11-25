import { fileURLToPath, URL } from 'node:url'

import { build, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({command}) =>{
    const config = {
      
      plugins: [vue()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      //base: '',
      server: {
        host: true,
        //port: 8080, // port of dev mode
      },
      
    }

    if(command == "build"){
      config.base = "scan_doc.lan/dist/"
      //config.base = "dist/"
    }

    return config
  }
)
