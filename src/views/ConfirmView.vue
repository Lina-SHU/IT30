<script setup>
import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();

const confirm1 = () => {
    confirm.require({
        message: '確認是否刪除此筆資料？',
        header: '刪除',
        icon: 'pi pi-exclamation-triangle',
        rejectProps: {
            label: '取消',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: '刪除',
            severity: 'danger',
        }
    });
};
</script>

<template>
    <main class="p-6">
        <Button @click="confirm1()" label="Delete" severity="danger" outlined></Button>
    </main>
</template>