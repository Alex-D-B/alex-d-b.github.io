import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import postcss from 'postcss'

let preprocess = vitePreprocess()
preprocess.style = async ({ content }) => {
  return {
    code: (await postcss().process(content, { from: undefined })).css,
  }
}

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess,
}
