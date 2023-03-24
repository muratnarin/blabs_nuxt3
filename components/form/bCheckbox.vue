<template>
  <v-checkbox
    v-model="model"
    @update:model-value="handleChange"
  />
</template>

<script setup>
import { useVModel } from '@vueuse/core'
import { useField } from 'vee-validate';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['update:modelValue'])

const model = useVModel(props, 'modelValue', emit)

const { name } = toRefs(props);

const { handleChange } = useField(name, undefined, {
  type: 'checkbox',
  checkedValue: props.value,
});

</script>

