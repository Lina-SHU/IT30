<script setup>
import { ref, computed } from 'vue'
const value = ref(null)

const filter = ref(0)
const filterValues = ref([100, 100, 0])
const filterOptions = ref([
  { label: '對比度', value: 0 },
  { label: '亮度', value: 1 },
  { label: '棕褐色系', value: 2 }
])
const filterStyle = computed(() => {
  return {
    filter: `contrast(${filterValues.value[0]}%) brightness(${filterValues.value[1]}%) sepia(${filterValues.value[2]}%)`
  }
})

const imageRef = ref(null)
const imageSrc = ref(null)
const canvasImage = ref(null)

const onCustomUpload = ($event) => {
  const file = $event.files[0]
  imageSrc.value = window.URL.createObjectURL(file)
}

const downloadImg = async () => {
  const ctx = canvasImage.value.getContext('2d')
  ctx.filter = filterStyle.value.filter
  ctx.drawImage(imageRef.value, 0, 0, imageRef.value.clientWidth, imageRef.value.clientHeight)
  const dt = canvasImage.value.toDataURL('image/jpeg')

  const link = document.createElement('a')
  link.href = dt
  link.download = 'downloadImg'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <main class="p-6">
    <div class="mb-6">
      <InputText v-model.number="value" class="mb-6" />
      <Slider v-model="value" class="w-56" />
    </div>
    <div class="mb-6">
      <InputText v-model.number="value" class="mb-6" />
      <Slider v-model="value" :step="25" class="w-56" />
    </div>
    <div class="mb-6">
      <div class="flex flex-col items-center">
        <img
          alt="user header"
          class="w-full md:w-80 rounded mb-6"
          src="https://images.unsplash.com/photo-1723984834599-5357b87f727c?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          :style="filterStyle"
        />
        <SelectButton
          v-model="filter"
          :options="filterOptions"
          optionLabel="label"
          optionValue="value"
          class="mb-4"
        />
        <Slider v-model="filterValues[filter]" class="w-56" :min="0" :max="200" />
      </div>
    </div>
    <div class="card flex justify-center">
      <div class="flex flex-col items-center">
        <div class="mb-3">
          <div class="flex mb-3">
            <FileUpload
              name="demo[]"
              mode="basic"
              accept="image/*"
              @uploader="onCustomUpload($event)"
              :customUpload="true"
              :maxFileSize="1000000"
              :auto="true"
            />
            <Button label="下載圖片" severity="info" @click="downloadImg" class="ms-5" />
          </div>
          <img v-if="imageSrc" ref="imageRef" :src="imageSrc" alt="image" :style="filterStyle" />
          <canvas ref="canvasImage" class="hidden" width="1000" height="1000"></canvas>
        </div>
        <SelectButton
          v-model="filter"
          :options="filterOptions"
          optionLabel="label"
          optionValue="value"
          class="mb-4"
        />
        <Slider v-model="filterValues[filter]" class="w-56" :min="0" :max="200" />
      </div>
    </div>
  </main>
</template>
