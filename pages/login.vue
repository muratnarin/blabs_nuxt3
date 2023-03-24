<template>
  <v-row
    class="fill-height"
    justify="center"
  >
    <v-col
      align-self="center"
      md="6"
      lg="4"
    >
      <v-card>
        <v-card-item>
          <v-card-title class="text-center">
            Login
          </v-card-title>
          <v-card-subtitle class="text-center">
            Subtitle
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <b-form
            ref="bForm"
            :schema="schema"
          >
            <b-text-field
              v-model="email"
              label="Email"
              type="email"
              name="email"
            />
            <b-text-field
              v-model="password"
              label="Password"
              type="password"
              name="password"
            />
            <b-checkbox
              v-model="checkbox"
              :label="checkbox ? 'I agree to terms and conditions' : 'You must agree to terms and conditions'"
              name="agree"
              :value="true"
            />
            <v-btn
              block
              type="submit"
            >
              Submit
            </v-btn>
          </b-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>

import BForm from "~/components/form/bForm.vue";
import BTextField from "~/components/form/bTextField.vue";
import * as yup from 'yup';
import BCheckbox from "~/components/form/bCheckbox.vue";

definePageMeta({
  layout: "default",
})

const schema = {
  email: 'required|email',
  password: 'required|minLength:8',
  agree: 'required',
};

const email = ref('');
const password = ref('');
const checkbox = ref(true);


const onSubmit = () => {
  console.log('submit', email);
}


</script>

<style scoped>

</style>