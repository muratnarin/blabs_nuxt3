import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labs from 'vuetify/labs/components'

export default defineNuxtPlugin?.((app) => {
  const vuetify = createVuetify({
      ssr: true,
      components: {
          ...components,
          ...labs,
      },
      directives
  });
  app.vueApp.use(vuetify);
})