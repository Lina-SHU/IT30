<script setup>
import { ref } from 'vue'

const products1 = ref([
  // {
  //   code: '001',
  //   name: 'Watch',
  //   category: 'Accessories',
  //   quantity: 20
  // },
  {
    code: '002',
    name: 'T-Shirt',
    category: 'Clothing',
    quantity: 25
  },
  {
    code: '003',
    name: 'Skirt',
    category: 'Clothing',
    quantity: 20
  },
  {
    code: '005',
    name: 'Earrings',
    category: 'Accessories',
    quantity: 35
  }
])

const lockedCustomers = ref([
  {
    code: '001',
    name: 'T-Shirt',
    category: 'Clothing',
    quantity: 25
  }
])

const products2 = ref([
  {
    code: '001',
    name: 'Watch',
    category: 'Accessories',
    col1: '客',
    col2: '戶',
    col3: '要',
    col4: '求',
    col5: '的',
    col6: '很',
    col7: '多',
    col8: '欄',
    col9: '位',
    quantity: 20
  },
  {
    code: '002',
    name: 'T-Shirt',
    category: 'Clothing',
    col1: '客',
    col2: '戶',
    col3: '要',
    col4: '求',
    col5: '的',
    col6: '很',
    col7: '多',
    col8: '欄',
    col9: '位',
    quantity: 25
  }
])
</script>

<template>
  <main class="p-6">
    <div class="mb-6">
      <DataTable
        :value="products1"
        scrollable
        scrollHeight="180px"
        :frozenValue="lockedCustomers"
        tableStyle="min-width: 50rem"
        paginator
        :rows="5"
      >
        <Column header="代碼" field="code"></Column>
        <Column header="名稱" field="name"></Column>
        <Column header="種類" field="category"></Column>
        <Column header="數量" field="quantity">
          <template #body="slotProps"> {{ slotProps.data.quantity }} 件 </template>
        </Column>
      </DataTable>
    </div>
    <div class="mb-6">
      <DataTable :value="products2" scrollable dataKey="code">
        <Column field="code" header="代碼" style="min-width: 150px" frozen></Column>
        <Column field="name" header="名稱" style="min-width: 100px" frozen></Column>
        <Column field="category" header="種類" style="min-width: 100px"></Column>
        <Column field="col1" header="客" style="min-width: 30px"></Column>
        <Column field="col2" header="戶" style="min-width: 30px"></Column>
        <Column field="col3" header="要" style="min-width: 30px"></Column>
        <Column field="col4" header="求" style="min-width: 80px"></Column>
        <Column field="col5" header="的" style="min-width: 80px"></Column>
        <Column field="col6" header="很" style="min-width: 80px"></Column>
        <Column field="col7" header="多" style="min-width: 80px"></Column>
        <Column field="col8" header="欄" style="min-width: 80px"></Column>
        <Column field="col9" header="位" style="min-width: 80px"></Column>
        <Column field="quantity" header="數量" style="min-width: 100px"></Column>
      </DataTable>
    </div>
    <div class="mb-6">
      <DataTable :value="products2" scrollable dataKey="code">
        <Column
          field="code"
          header="代碼"
          :pt="{ columnHeaderContent: 'justify-center' }"
          style="min-width: 200px"
          frozen
        ></Column>
        <Column field="name" header="名稱" style="min-width: 100px" frozen></Column>
        <Column field="category" header="種類" style="min-width: 100px"></Column>
        <Column field="col1" header="客" style="min-width: 30px"></Column>
        <Column field="col2" header="戶" style="min-width: 30px"></Column>
        <Column field="col3" header="要" style="min-width: 30px"></Column>
        <Column header="操作" style="min-width: 100px">
          <template #body>
            <Button label="檢視" class="!static"></Button>
          </template>
        </Column>
        <Column field="col4" header="求" style="min-width: 80px"></Column>
        <Column field="col5" header="的" style="min-width: 80px"></Column>
        <Column field="col6" header="很" style="min-width: 80px"></Column>
        <Column field="col7" header="多" style="min-width: 80px"></Column>
        <Column field="col8" header="欄" style="min-width: 80px"></Column>
        <Column field="col9" header="位" style="min-width: 80px"></Column>
        <Column field="quantity" header="數量" style="min-width: 100px"></Column>
      </DataTable>
    </div>
  </main>
</template>
