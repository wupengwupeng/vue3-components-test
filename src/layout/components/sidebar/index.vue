<template>
  <div class="w-240">
    <el-menu :default-active="activeMenu" router>
      <el-menu-item index="/table">
        <span>table组件</span>
      </el-menu-item>
      <el-menu-item index="/test">
        <span>测试</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const activeMenu = ref("/putTask");
    const route: any = useRoute();
    const router = useRouter();
    watch(
      route.path,
      () => {
        activeMenu.value = route.path;
      },
      { immediate: true, deep: true }
    );
    return {
      activeMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
::v-deep(.is-active) {
  background: #ede9fe;
}
::v-deep(.el-menu-item:hover) {
  background: #ede9fe;
}
::v-deep(.el-menu-item:active) {
  background: #ede9fe;
}
::v-deep(.el-menu-item:focus) {
  background: #ede9fe;
}
</style>