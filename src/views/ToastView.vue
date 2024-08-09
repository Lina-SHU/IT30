<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showGroup1 = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Message Content', group: 'group1' });
};

const showGroup2 = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', closable: false, group: 'group2' });
    toast.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content', closable: false, group: 'group2' });
};

const removeGroup2 = () => {
    toast.removeGroup('group2');
}

const removeAllGroup = () => {
    toast.removeAllGroups();
}
</script>

<template>
    <main class="p-6">
        <Button label="ShowGroup1" @click="showGroup1()" class="me-3" />
        <Button label="ShowGroup2" @click="showGroup2()" class="me-3" />
        
        <Button label="RemoveGroup2" @click="removeGroup2()" outlined class="me-3" />
        <Button label="RemoveGroup2" @click="removeAllGroup()" outlined />
    </main>
</template>