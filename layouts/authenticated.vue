<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Authenticated</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-main>
        <v-container fluid>
          <slot />
        </v-container>
      </v-main>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>