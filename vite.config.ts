import pages from '@hono/vite-cloudflare-pages'
import adapter from '@hono/vite-dev-server/cloudflare'
import honox from 'honox/vite'
import client from 'honox/vite/client'
import { defineConfig } from 'vite'
import {Mode, plugin as md} from 'vite-plugin-markdown';

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [client(),md()]
    }
  } else {
    return {
      plugins: [
        md({
          mode: [Mode.MARKDOWN]
      }),
        honox({
          devServer: {
            adapter
          }
        }),
        pages()
      ]
    }
  }
})
