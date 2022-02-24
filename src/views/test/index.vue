<template>
  <div class="h-full flex flex-col aa">
    <div class="h-100 bg-gray-300 inline-flex">
      <div class="font-inter text-10 antialiased">
        <el-button @click="handlerOpenDialog">{{ t("点击我") }}</el-button>
        <el-button @click="handlerInternationalization"
          >{{ t("国际化") }}|| {{ t("中文") }}</el-button
        >
        <el-button @click="handlerInternationalizationEN"
          >{{ t("国际化") }}|| {{ t("英文") }}</el-button
        >
      </div>
    </div>
    <div class="h-300 bg-red-400 overflow-y-auto antialiased">
      {{ t("你好table") }}
      <el-upload
        action=""
        multiple
        :auto-upload="false"
        :on-change="beforeUpload"
        :thumbnail-mode="false"
        :show-file-list="false"
        >点击上传读取</el-upload
      >
    </div>
    <div class="bg-yellow-400 flex-1 overflow-auto">
      <Table>
        <template #table>
          <el-table :data="tableData" style="height: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </template>
      </Table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import messages from "@/locales/views/test/index";
import { useI18n } from "vue-i18n";
import { setLang, getLang } from "@/lib/storage";
import Table from "@/components/Table/index.vue";
export default defineComponent({
  name: "Test",
  components: {
    Table,
  },
  setup() {
    const tableData = Array(30).fill({
      date: "2016-05-03",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    });
    const { t } = useI18n({
      messages,
      missingWarn: false,
      fallbackWarn: false,
    });
    const datas = reactive({});
    const methd = {
      async handlerInternationalization() {
        setLang("zh-CN");
        window.location.reload();
      },
      handlerInternationalizationEN() {
        setLang("en");
        window.location.reload();
      },
    };
    function handlerOpenDialog() {
      console.log("点击我哦");
    }
    function beforeUpload(file: any) {
      const reader = new FileReader();
      reader.readAsText(file.raw);
      reader.onload = function (e: any) {
        try {
          const txtData: any = this.result;
          const a = eval("(function() { " + txtData + "  \n return Task})()");
        } catch (error) {}
      };
    }
    return {
      t,
      tableData,
      ...toRefs(datas),
      ...methd,
      handlerOpenDialog,
      beforeUpload,
    };
  },
});
</script>