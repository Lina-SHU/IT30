<script setup>
import { ref } from 'vue'

const visible = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
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
    <Button label="新增商品" @click="visible = true" />

    <DataTable :value="products" removableSort tableStyle="min-width: 50rem">
      <Column header="代碼" field="code" sortable></Column>
      <Column header="名稱" field="name" sortable></Column>
      <Column header="種類" field="category" sortable></Column>
      <Column header="數量" field="quantity" sortable>
        <template #body="slotProps"> {{ slotProps.data.quantity }} 瓶 </template>
      </Column>
      <Column header="" field="quantity">
        <template #body>
          <Button label="編輯" @click="visible = true" size="small" />
        </template>
      </Column>
    </DataTable>

    <Dialog v-model:visible="visible" modal header="新增商品" :style="{ width: '25rem' }">
      <div class="flex items-center gap-4 mb-4">
        <label for="prdName" class="font-semibold w-24">商品名稱</label>
        <InputText id="prdName" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="quantity" class="font-semibold w-24">數量</label>
        <InputNumber id="quantity" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex justify-end gap-2">
        <Button type="button" label="取消" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="新增" @click="visible = false"></Button>
      </div>
    </Dialog>

    <Button label="Maximizable" @click="visible2 = true" />
    <Dialog
      v-model:visible="visible2"
      maximizable
      modal
      header="Header"
      :style="{ width: '50rem' }"
    >
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Dialog>

    <Button label="Show" @click="visible3 = true" />

    <Dialog v-model:visible="visible3" modal header="Edit Profile" :style="{ width: '25rem' }">
      <template #header>
        <div class="inline-flex font-bold items-center text-lg justify-center gap-2">
          編輯商品
          <span class="text-sm whitespace-nowrap">手錶</span>
        </div>
      </template>
      <div class="flex items-center gap-4 mb-4">
        <label for="prdName" class="font-semibold w-24">商品名稱</label>
        <InputText id="prdName" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="quantity" class="font-semibold w-24">數量</label>
        <InputNumber id="quantity" class="flex-auto" autocomplete="off" />
      </div>
      <template #footer>
        <Button label="取消" text severity="secondary" @click="visible3 = false" autofocus />
        <Button label="儲存" outlined @click="visible3 = false" autofocus />
      </template>
    </Dialog>
  </main>
</template>
