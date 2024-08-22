<script setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
const toast = useToast()
const fileupload = ref()

const upload = () => {
  fileupload.value.upload()
}

const onUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 })
}

const onAdvancedUpload = ($event) => {
  console.log($event)
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 })
}

const onCustomUpload = ($event) => {
  console.log($event)
  const formData = new FormData()
  formData.append('file', $event.files[0])
}
</script>

<template>
  <main class="p-6">
    <div class="card flex gap-6 items-center justify-center mb-6">
      <Toast />
      <FileUpload
        ref="fileupload"
        mode="basic"
        name="demo[]"
        url="/api/upload"
        accept="image/*"
        :maxFileSize="1000000"
        @upload="onUpload"
      />
      <Button label="上傳" @click="upload" severity="secondary" />
    </div>
    <div class="card flex justify-center mb-6">
      <FileUpload
        mode="basic"
        name="demo[]"
        url="/api/upload"
        accept="image/*"
        :maxFileSize="1000000"
        @upload="onUpload"
        :auto="true"
        chooseLabel="選擇檔案"
      />
    </div>
    <div class="card MB-6">
      <FileUpload
        name="demo[]"
        url="/api/upload"
        @upload="onAdvancedUpload($event)"
        :multiple="true"
        accept="image/*"
        :maxFileSize="1000000"
      >
        <template #empty>
          <span>可拖曳檔案到此處</span>
        </template>
      </FileUpload>
    </div>
    <div>
      <FileUpload
        @uploader="onCustomUpload($event)"
        :customUpload="true"
        :accept="'.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'"
      >
        <template #empty>
          <span>可拖曳檔案到此處</span>
        </template>
      </FileUpload>
    </div>
  </main>
</template>
