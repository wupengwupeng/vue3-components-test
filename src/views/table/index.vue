<template>
  <div class="content-table">
    <div class="h-200 bg-red-300">
      <ta-button type="danger" size="small" v-waves>small</ta-button>
      <ta-button type="primary" v-waves>default</ta-button>
      <ta-button type="warning" size="large" v-waves>large</ta-button>
      <el-button class="border-none" v-waves size="mini">水波纹效果</el-button>
      <div class="w-180 h-30 flex items-center">
        <InputNumber :maxLength="3" disabled v-model="inputValue" @change="handlerChange" size="mini" placeholder="请输入数字"> </InputNumber>
        <el-button v-clipboard:copy="inputValue" v-clipboard:success="handlerSuccessCopy">copy</el-button>
      </div>
    </div>
    <div class="table-last">
      <Table>
        <template #form>
          <div>
            <el-input></el-input>
          </div>
        </template>
        <template #table>
          <el-table :data="tableData" height="100%">
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
import { defineComponent, reactive, toRefs, ref, watch } from 'vue'
import Table from '@/components/Table/index.vue'
import InputNumber from '@/components/inputNumber/index.vue'
import { succesElNotification } from '@/components/Dialog/BoxDialog'
export default defineComponent({
  name: 'Tables',
  components: {
    Table,
    InputNumber,
  },
  setup() {
    const tableData = Array(30).fill({
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    })
    const state = reactive({
      inputValue: 'nihao',
    })

    function handlerChange(val: string) {
      console.log(state.inputValue)
    }
    function handlerSuccessCopy() {
      succesElNotification('复制成功')
    }

    watch(
      () => state.inputValue,
      () => {
        console.log(state.inputValue)
      },
      { immediate: true }
    )

    return {
      tableData,
      ...toRefs(state),
      handlerChange,
      handlerSuccessCopy,
    }
  },
})
</script>


<style lang="scss" scoped>
.content-table {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .table-last {
    height: calc(100vh - 200px);
    width: 100%;
  }
}
</style>
