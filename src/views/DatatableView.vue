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
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      ></Column>
    </DataTable>
  </main>
</template>
