import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labs from 'vuetify/labs/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export default defineNuxtPlugin?.((app) => {
    const vuetify = createVuetify({
      theme: { defaultTheme: 'dark' },
      ssr: true,
      components: {
          ...components,
          ...labs,
      },
      directives,
          icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  });
  app.vueApp.use(vuetify);
})