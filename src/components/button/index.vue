<template>
  <div
    class="
      min-w-60
      h-28
      flex
      items-center
      rounded
      hover:cursor-pointer hover:bg-gray-100
      justify-center
    "
    :class="buttonClass"
    @click="handlerClickButton"
  >
    <AppSvgIcon class="w-20 h-20 translate-y-2" :iconName="iconName" />
    <span class="ml-5">{{ title }}</span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  name: "Button",
  props: {
    iconName: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    buttonClass: {
      type: String,
      default: "",
    },
  },
  emits: ["clickButton"],
  setup(props, { emit }) {
    function handlerClickButton() {
      emit("clickButton");
    }
    return {
      handlerClickButton,
    };
  },
});
</script>