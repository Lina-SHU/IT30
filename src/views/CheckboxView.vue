<script setup>
import { ref } from 'vue';

const agree = ref('N');
</script>
<template>
    <main class="p-6">
        {{ agree }}
        <div class="grid grid-cols-4 gap-4">
            <div class="flex items-center">
                <Checkbox v-model="agree" inputId="agree" binary name="agree" trueValue="Y" falseValue="N" />
                <label for="agree" class="ml-2">是否同意</label>
            </div>
        </div>
    </main>
</template>
