<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <main class="p-6">
    {{ value }}
    <Editor v-model="value" editorStyle="height: 320px" />
  </main>
</template>
