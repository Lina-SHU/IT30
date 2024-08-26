<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

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
let cropper = null
onMounted(() => {})

onBeforeUnmount(() => {
  cropper.destroy()
})

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
