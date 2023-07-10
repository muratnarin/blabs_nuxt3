// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";
import eslintPlugin from "vite-plugin-eslint";

// @ts-ignore
export default defineNuxtConfig({
    modules: ['nuxt-icon', "@nuxtjs/google-fonts", '@vueuse/nuxt', '@vee-validate/nuxt', ['@pinia/nuxt',{
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore'],
        ],
      }], async (options, nuxt) => {
        // @ts-ignore
        nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
            vuetify({
                // styles: { configFile: "settings.scss" },
            })
        ))
    }],
    // @ts-ignore
    css: ["vuetify/styles"],
    build: { transpile: ["vuetify"] },
    vite: { ssr: { noExternal: ['vuetify'] } , plugins: [eslintPlugin()]},
    plugins: ["~/plugins/vuetify.ts"],
    googleFonts: { families: { Roboto: true, "Material+Icons": true }, download: false, useStylesheet: true },
    imports: {
        dirs: ['./stores']
    },
    veeValidate: {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
            Form: 'VeeForm',
            Field: 'VeeField',
            FieldArray: 'VeeFieldArray',
            ErrorMessage: 'VeeErrorMessage',
        },
    },
})
