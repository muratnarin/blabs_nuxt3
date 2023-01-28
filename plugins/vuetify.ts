import {createVuetify} from "vuetify";
import { VDataTable } from 'vuetify/labs/VDataTable'

export default defineNuxtPlugin?.((app) => {
  const vuetify = createVuetify({
      ssr: true,
      components: {
          VDataTable
      }
  });
  app.vueApp.use(vuetify);
})