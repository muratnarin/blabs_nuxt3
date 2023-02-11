<template>
  <v-navigation-drawer
    app
    permanent
    :expand-on-hover="mini"
    :mini-variant="mini"
    width="220"
  >
    <template #prepend>
      <v-row justify="center">
        <v-col class="d-flex justify-center">
          <v-img
            src="/bunguo-logo.png"
            contain
            max-height="48"
            max-width="100"
            class="mr-5"
          />
        </v-col>
      </v-row>
    </template>

    <v-divider />
    <c-menu />
  </v-navigation-drawer>
</template>

<script>
import CMenu from "~/components/layout/admin/CMenu";
export default {
  name: "CAside",
  components: { CMenu },
  data: () => ({
    profile: false,
  }),
  computed: {
    mini: {
      get() {
        return this.$store.state.mini;
      },
      set() {
        this.$store.commit("setMini");
      },
    },
  },
};
</script>
