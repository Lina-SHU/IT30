<script setup>
import { ref } from 'vue'

const products = ref([
  {
    code: '001',
    name: 'Watch',
    category: 'Accessories',
    quantity: 20
  },
  {
    code: '002',
    name: 'T-Shirt',
    category: 'Clothing',
    quantity: 25
  }
])
</script>

<template>
  <main class="p-6">
    <DataTable
      :value="products"
      removableSort
      tableStyle="min-width: 50rem"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="第 {first} 筆到第 {last} 筆，共 {totalRecords} 筆"
    >
      <Column header="代碼" field="code" sortable></Column>
      <Column header="名稱" field="name" sortable></Column>
      <Column header="種類" field="category" sortable></Column>
      <Column header="數量" field="quantity" sortable>
        <template #body="slotProps"> {{ slotProps.data.quantity }} 件 </template>
      </Column>
    </DataTable>
  </main>
</template>
