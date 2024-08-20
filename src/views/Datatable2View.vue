<script setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

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

const selectedProduct = ref()
const selectedMultiProduct = ref()
const toast = useToast()
const onRowSelect = (event) => {
  console.log(event)
  toast.add({
    severity: 'info',
    summary: 'Product Selected',
    detail: 'Name: ' + event.data.name,
    life: 5000
  })
}
const onRowUnselect = (event) => {
  toast.add({
    severity: 'warn',
    summary: 'Product Unselected',
    detail: 'Name: ' + event.data.name,
    life: 5000
  })
}

const onRowClick = (event) => {
  toast.add({
    severity: 'info',
    summary: 'Product clicked',
    detail: 'Name: ' + event.data.name,
    life: 5000
  })
}
</script>

<template>
  <main class="p-6">
    <div class="mb-6">
      <DataTable
        :value="products"
        removableSort
        tableStyle="min-width: 50rem"
        paginator
        :rows="5"
        :rowsPerPageOptions="[5, 10, 20, 50]"
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput"
        currentPageReportTemplate="第 {first} 筆到第 {last} 筆，共 {totalRecords} 筆"
      >
        <Column header="代碼" field="code" sortable></Column>
        <Column header="名稱" field="name" sortable></Column>
        <Column header="種類" field="category" sortable></Column>
        <Column header="數量" field="quantity" sortable>
          <template #body="slotProps"> {{ slotProps.data.quantity }} 件 </template>
        </Column>
      </DataTable>
    </div>
    <div class="mb-6">
      {{ selectedProduct }}
      <DataTable
        v-model:selection="selectedProduct"
        :value="products"
        dataKey="code"
        tableStyle="min-width: 50rem"
      >
        <Column selectionMode="single" headerStyle="width: 3rem"></Column>
        <Column field="code" header="代碼"></Column>
        <Column field="name" header="名稱"></Column>
        <Column field="category" header="種類"></Column>
        <Column field="quantity" header="數量"></Column>
      </DataTable>
    </div>
    <div class="mb-6">
      {{ selectedMultiProduct }}
      <DataTable
        v-model:selection="selectedMultiProduct"
        :value="products"
        dataKey="code"
        tableStyle="min-width: 50rem"
      >
        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        <Column field="code" header="代碼"></Column>
        <Column field="name" header="名稱"></Column>
        <Column field="category" header="種類"></Column>
        <Column field="quantity" header="數量"></Column>
      </DataTable>
    </div>
    <div class="mb-6">
      <DataTable
        v-model:selection="selectedProduct"
        :value="products"
        selectionMode="single"
        dataKey="code"
        :metaKeySelection="false"
        @rowSelect="onRowSelect"
        @rowUnselect="onRowUnselect"
        tableStyle="min-width: 50rem"
      >
        <Column field="code" header="代碼"></Column>
        <Column field="name" header="名稱"></Column>
        <Column field="category" header="種類"></Column>
        <Column field="quantity" header="數量"></Column>
      </DataTable>
    </div>
    <div class="mb-6">
      <DataTable :value="products" tableStyle="min-width: 50rem" @row-click="onRowClick">
        <Column field="code" header="代碼"></Column>
        <Column field="name" header="名稱"></Column>
        <Column field="category" header="種類"></Column>
        <Column field="quantity" header="數量"></Column>
      </DataTable>
    </div>
  </main>
</template>
