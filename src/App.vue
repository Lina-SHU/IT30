<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <Toast group="group1" />
  <Toast group="group2" />
  <ConfirmDialog :pt="{
      root: {
        class: 'w-1/3'
      }
  }"></ConfirmDialog>
  <RouterView />
</template>
