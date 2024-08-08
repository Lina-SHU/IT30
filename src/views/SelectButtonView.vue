<script setup>
import { ref } from 'vue';

const value = ref('male');
const options = ref(['male', 'female']);

const multipleValue = ref(null);
const multipleOptions = ref([
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3 }
]);

const fontValue = ref(16);
const fontOptions = ref([
    { name: '小', value: 14 },
    { name: '中', value: 16 },
    { name: '大', value: 18 }
]);
const changeScale = ($event) => {
    console.log($event); // 取得 fontValue
    document.documentElement.style.fontSize = $event + 'px';
};
</script>

<template>
    <main class="p-6">
        <div class="card flex mb-3">
            <SelectButton v-model="value" :options="options" />
        </div>
        <div class="card flex mb-3">
            <SelectButton v-model="multipleValue" :options="multipleOptions" optionLabel="name" optionValue="value" multiple />
        </div>

        <div class="card flex mb-3">
            <SelectButton v-model="fontValue" :options="fontOptions" optionLabel="name" optionValue="value" @update:modelValue="changeScale" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse quidem vero doloremque quibusdam iste! Adipisci, autem? Labore, nam illo.</p>
    </main>
</template>