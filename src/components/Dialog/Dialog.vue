<template>
  <div v-elDraggableDialog>
    <el-dialog
      v-model="visible"
      :title="title"
      destroy-on-close
      v-bind="$attrs"
      @close="handlerClose"
    >
      <slot />
      <template #footer>
        <el-button size="small" @click="handlerCansole">取消</el-button>
        <el-button size="small" type="primary" @click="handlerSave"
          >保存</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref } from "vue";
import { useVModels } from "@vueuse/core";
export default defineComponent({
  name: "Dialog",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
  emits: ["handlerSave", "close"],
  setup(props, { emit, attrs }) {
    const { visible, title } = useVModels(props, emit);

    function handlerClose() {
      visible.value = false;
      emit("close");
    }
    function handlerCansole() {
      handlerClose();
      emit("close");
    }
    function handlerSave() {
      emit("handlerSave");
    }
    return {
      visible,
      title,
      ...toRefs(attrs),
      handlerClose,
      handlerCansole,
      handlerSave,
    };
  },
});
</script>