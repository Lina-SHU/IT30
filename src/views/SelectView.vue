<script setup>
import { onMounted, ref } from "vue";

const loading = ref(true);

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

onMounted(() => {
    setTimeout(() => {
        loading.value = false;
    }, 1000)
});

const setLabel = (data) => {
    return `${data.name}(${data.code})`;
}

const setValue = (data) => {
    return `city-${data.code}`;
}
</script>
<template>
    <main class="p-6">
        <div class="grid grid-cols-4 gap-4">
            <div class="mb-4">
                {{ selectedCity }} <br />
                <label for="city" class="inline-block mb-1">City</label>
                <Select inputId="city" v-model="selectedCity" filter showClear :loading="loading" :options="cities" optionLabel="name" optionValue="code" placeholder="Select a City" fluid />
            </div>
            <div>
                {{ selectedCity }} <br />
                <label for="city" class="inline-block mb-1">City</label>
                <Select inputId="city" v-model="selectedCity" filter showClear :loading="loading" :options="cities" :optionLabel="setLabel" :optionValue="setValue" placeholder="Select a City" fluid />
            </div>
        </div>
    </main>
</template>
