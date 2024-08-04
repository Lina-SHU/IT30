<script setup>
import { ref } from 'vue'

const selectedCity = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])

const date = ref(null)
const checked = ref(false)
const toggleColorScheme = () => {
  const element = document.querySelector('html')
  element.classList.toggle('dark')
}

// 改變主題
import { usePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'
import Lara from '@primevue/themes/lara'
const themeValue = ref('Aura')
const options = ref(['Aura', 'Lara'])
const changeTheme = () => {
  usePreset(themeValue.value === 'Aura' ? Aura : Lara)
}
</script>

<template>
  <main class="p-6">
    <SelectButton
      v-model="themeValue"
      :options="options"
      aria-labelledby="basic"
      @update:modelValue="changeTheme"
      class="mb-4"
    />

    <br />

    <br />
    <ToggleSwitch v-model="checked" @update:modelValue="toggleColorScheme()" class="mb-3" />
    <br />
    <Button label="Search" icon="pi pi-search" class="mb-3" />
    <br />

    <InputText type="text" class="mb-3" variant="filled" />
    <br />

    <Select
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      placeholder="Select a City"
      class="mb-3"
    />
    <br />
    <DatePicker v-model="date" />
  </main>
</template>
