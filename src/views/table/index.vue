<template>
  <div class="content-table">
    <div class="h-200 bg-red-300">
      <ta-button type="danger" size="small">small</ta-button>
      <ta-button type="primary">default</ta-button>
      <ta-button type="warning" size="large">large</ta-button>
      <el-button class="border-none" v-waves size="mini">水波纹效果</el-button>
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
import { defineComponent } from 'vue'
import Table from '@/components/Table/index.vue'
export default defineComponent({
  name: 'Tables',
  components: {
    Table,
  },
  setup() {
    const tableData = Array(30).fill({
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    })
    return {
      tableData,
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
