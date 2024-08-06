<script setup>
import { ref } from 'vue';
import { PrimeIcons } from '@primevue/core/api';

const items = ref([
    {
        label: 'File',
        items: [
            { label: 'New', icon: PrimeIcons.PLUS },
            { label: 'Open', icon: PrimeIcons.DOWNLOAD }
        ]
    }
])
</script>

<template>
  <main class="p-6">
    <div class="mb-5">
        <i class="pi pi-check me-3"></i>
        <i class="pi pi-bell me-3"></i>
        <span class="pi pi-eye me-3"></span>
        <span class="pi pi-user"></span>
    </div>

    <div class="mb-5">
        <i class="pi pi-check me-3" style="font-size: 1rem"></i>
        <i class="pi pi-bell me-3" style="font-size: 1.5rem"></i>
        <i class="pi pi-eye me-3 text-5xl"></i>
        <i class="pi pi-user" style="font-size: 2.5rem"></i>
    </div>

    <div class="mb-5">
        <i class="pi pi-check me-3 text-orange-400"></i>
        <i class="pi pi-bell me-3" style="color: green"></i>
        <i class="pi pi-eye me-3 text-surface-300"></i>
        <i class="pi pi-user" style="color: #ff0000"></i>
    </div>

    <div class="mb-5">
        <i class="pi pi-spin pi-spinner me-3" style="font-size: 2rem"></i>
        <i class="pi pi-spin pi-cog" style="font-size: 2rem"></i>
    </div>

    <div class="card flex justify-start">
        <Menu :model="items" />
    </div>
  </main>
</template>