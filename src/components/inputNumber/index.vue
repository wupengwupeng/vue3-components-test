<template>
  <div class="w-full h-full">
    <el-input v-onlyNumber:[maxLength] v-bind="$attrs" v-model="inputValue" @input="handlerInput" clearable> </el-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref, reactive } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    maxLength: {
      type: Number,
      default: 30,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit, attrs, slots }) {
    const { modelValue, maxLength } = toRefs(props)
    const state = reactive({
      inputValue: modelValue.value,
    })
    function handlerInput(val: string) {
      emit('update:modelValue', val)
    }

    return {
      modelValue,
      maxLength,
      slots,
      ...toRefs(state),
      handlerInput,
    }
  },
})
</script>


