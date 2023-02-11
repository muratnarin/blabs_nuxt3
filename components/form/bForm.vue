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


</script>

<style scoped>

</style>