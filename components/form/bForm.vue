<template>
  <Form
    as="v-form"
    :validation-schema="schema"
    @submit="onSubmit"
  >
    <slot />
  </Form>
</template>

<script setup>
import { Form } from 'vee-validate';

const onSubmit = (values) => {
    console.log(values);
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