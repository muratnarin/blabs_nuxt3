<template>
  <v-row justify="center">
    <v-col cols="6">
      <v-card>
        <v-card-title>
          <h1>Index</h1>
        </v-card-title>
        <v-card-text>
          <b-form
            :schema="schema"
            @submit="onSubmit"
          >
            <b-text-field
              label="Email"
              name="email"
              type="text"
            />
            <b-text-field
              label="Password"
              type="password"
              name="password"
            />
            <!--        <b-checkbox-->
            <!--          v-model="checkbox"-->
            <!--          :label="checkbox ? 'I agree to terms and conditions' : 'You must agree to terms and conditions'"-->
            <!--          name="agree"-->
            <!--          :value="true"-->
            <!--        />-->
          </b-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import BForm from "~/components/form/bForm.vue";
import BTextField from "~/components/form/bTextField.vue";

import {string, object} from 'yup';


const schema = object({
    email: string().email().required().label('E-mail'),
    password: string().min(6).required(),
});

function onSubmit(values) {
    console.log('Submitted with', values);
}



</script>

<style scoped>

</style>