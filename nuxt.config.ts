// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
    modules: ['nuxt-icon', "@nuxtjs/google-fonts", '@pinia/nuxt', async (options, nuxt) => {
        // @ts-ignore
        nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
            vuetify({
                // styles: { configFile: "settings.scss" },
            })
        ))
    }],
    css: ["vuetify/styles"],
    build: { transpile: ["vuetify"] },
    vite: { ssr: { noExternal: ['vuetify'] } },
    plugins: ["~/plugins/vuetify.ts"],
    googleFonts: { families: { Roboto: true, "Material+Icons": true }, download: false, useStylesheet: true },
    imports: {
        dirs: ['./stores']
    }
})
