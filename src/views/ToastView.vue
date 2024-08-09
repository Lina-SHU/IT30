<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showGroup1 = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000, group: 'group1' });
};

const showGroup2 = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000, closable: false, group: 'group2' });
    toast.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content', life: 3000, closable: false, group: 'group2' });
};
</script>

<template>
    <main class="p-6">
        <Button label="ShowGroup1" @click="showGroup1()" class="me-3" />
        <Button label="ShowGroup2" @click="showGroup2()" />
    </main>
</template>