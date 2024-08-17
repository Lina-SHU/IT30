<script setup>
import { ref } from 'vue'

const value = ref(null)
const value1 = ref(123123)
const value2 = ref(234234)
const value3 = ref(2351.35234)
const value4 = ref(24)
</script>

<template>
  <main class="p-6">
    <InputText type="text" v-model="value" class="mb-6" />

    <div class="mb-6">
      <FloatLabel>
        <InputText id="username" v-model="value" />
        <label for="username">Username</label>
      </FloatLabel>
    </div>

    <div class="mb-6">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText v-model="value1" placeholder="Search" />
      </IconField>
    </div>

    <div class="mb-6">
      <FloatLabel>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText id="username" v-model="value" />
        </IconField>
        <label for="username" class="ms-6">Username</label>
      </FloatLabel>
    </div>

    <div class="mb-6">
      <InputText v-model="value1" type="text" size="small" placeholder="Small" fluid class="mb-6" />
      <InputText v-model="value2" type="text" placeholder="Normal" fluid class="mb-6" />
      <InputText v-model="value3" type="text" size="large" placeholder="Large" fluid />
    </div>

    <div class="card flex flex-wrap gap-4 mb-6">
      <div class="flex-auto">
        <label for="integeronly" class="font-bold block mb-2"> Integer Only </label>
        <InputNumber
          v-model="value1"
          inputId="integeronly"
          fluid
          showButtons
          buttonLayout="horizontal"
        />
      </div>
      <div class="flex-auto">
        <label for="withoutgrouping" class="font-bold block mb-2"> Without Grouping </label>
        <InputNumber
          v-model="value2"
          inputId="withoutgrouping"
          showButtons
          :useGrouping="false"
          fluid
        />
      </div>
      <div class="flex-auto">
        <label for="minmaxfraction" class="font-bold block mb-2"> Min-Max Fraction Digits </label>
        <InputNumber
          v-model="value3"
          inputId="minmaxfraction"
          :minFractionDigits="2"
          :maxFractionDigits="5"
          fluid
        />
      </div>
      <div class="flex-auto">
        <label for="minmax" class="font-bold block mb-2"> Min-Max Boundaries </label>
        <InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" fluid />
      </div>
    </div>

    <div class="mb-6">
      <!-- 手機載具 -->
      <InputMask
        id="basic"
        v-model="value"
        mask="/aaaaaaa"
        placeholder="/xxxxxxx"
        class="mb-6"
        fluid
      />
      <InputMask
        id="basic"
        v-model="value"
        placeholder="99/99/9999"
        mask="99/99/9999"
        slotChar="mm/dd/yyyy"
        fluid
      />
    </div>
    <div class="mb-6">
      <InputOtp v-model="value" />
    </div>
    <div class="mb-6">
      <InputOtp v-model="value" mask />
    </div>
  </main>
</template>
