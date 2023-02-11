<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Default</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container
        fluid
        class="fill-height"
      >
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Default"
}
</script>

<style scoped>

</style>