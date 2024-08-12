<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <Toast group="group1" />
  <Toast group="group2" />
  <Toast />
  <ConfirmDialog
    :pt="{
      root: {
        class: 'w-80'
      }
    }"
  ></ConfirmDialog>
  <RouterView />
</template>
