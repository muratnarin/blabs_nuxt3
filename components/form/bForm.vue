<template>
  <vee-form
    as="v-form"
    :validation-schema="schema"
    @submit="onSubmit"
  >
    <slot />
    <v-btn
      block
      type="submit"
    >
      Submit
    </v-btn>
  </vee-form>
</template>

<script setup>

const emit = defineEmits(['submit']);

const onSubmit = (values) => {
    console.log('inner with', values);
    emit('submit', values);
};

defineProps({
  schema: {
    type: Object,
    required: true,
  },
});


</script>

<style scoped>

</style>