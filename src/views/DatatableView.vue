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
const columns = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' }
]
</script>

<template>
  <main class="p-6">
    <DataTable :value="products" tableStyle="min-width: 50rem" class="mb-3">
      <Column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      ></Column>
    </DataTable>

    <DataTable
      :value="products"
      removableSort
      sortField="quantity"
      :sortOrder="1"
      tableStyle="min-width: 50rem"
    >
      <Column header="代碼" field="code" sortable></Column>
      <Column header="名稱" field="name" sortable></Column>
      <Column header="種類" field="category" sortable></Column>
      <Column header="數量" field="quantity" :sortable="true">
        <template #body="slotProps"> {{ slotProps.data.quantity }} 瓶 </template>
      </Column>
    </DataTable>

    <div class="mb-6">
      <DataTable :value="products" removableSort sortMode="multiple" tableStyle="min-width: 50rem">
        <Column header="代碼" field="code" sortable></Column>
        <Column header="名稱" field="name" sortable></Column>
        <Column header="種類" field="category" sortable></Column>
        <Column header="數量" field="quantity" :sortable="true">
          <template #body="slotProps"> {{ slotProps.data.quantity }} 瓶 </template>
        </Column>
      </DataTable>
    </div>
  </main>
</template>
