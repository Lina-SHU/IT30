<script setup>
import { ref } from 'vue'

// 改變主題
import { usePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'
import Lara from '@primevue/themes/lara'
const themeValue = ref('Aura')
const options = ref(['Aura', 'Lara'])
const changeTheme = () => {
  usePreset(themeValue.value === 'Aura' ? Aura : Lara)
}

// 改變色彩
import { updatePreset } from '@primevue/themes'
const knobValue = ref(60)
const changePrimaryColor = (color) => {
  updatePreset({
    semantic: {
      primary: {
        50: `{${color}.50}`,
        100: `{${color}.100}`,
        200: `{${color}.200}`,
        300: `{${color}.300}`,
        400: `{${color}.400}`,
        500: `{${color}.500}`,
        600: `{${color}.600}`,
        700: `{${color}.700}`,
        800: `{${color}.800}`,
        900: `{${color}.900}`,
        950: `{${color}.950}`
      }
    }
  })
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
    <Button
      label="primary"
      class="bg-primary-500 border-0 me-2"
      rounded
      @click="changePrimaryColor('emerald')"
    />
    <Button
      label="indigo"
      class="bg-indigo-500 border-0 me-2"
      rounded
      @click="changePrimaryColor('indigo')"
    />
    <Button
      label="rose"
      class="bg-rose-500 border-0 me-2"
      rounded
      @click="changePrimaryColor('rose')"
    />
    <Button label="cyan" class="bg-cyan-500 border-0" rounded @click="changePrimaryColor('cyan')" />

    <Knob v-model="knobValue" class="mt-2" />
  </main>
</template>
