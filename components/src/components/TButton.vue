<template>
  <div class="btn">{{ msg }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  msg?: string;
}>();
</script>

<style scoped>
.btn {
  background-color: green;
}
</style>
