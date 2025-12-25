<script setup>
defineProps({ sites: Array })
</script>

<template>
  <div class="grid">
    <div
        v-for="item in sites"
        :key="item.name"
        class="grid-item"
    >
      <div class="icon">{{ item.icon }}</div>
      <div class="text">{{ item.name }}</div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 90px);
  gap: 16px;
  padding: 20px;
  background: #fff;
}
.grid-item {
  text-align: center;
  cursor: pointer;
}
.icon {
  font-size: 32px;
}
.text {
  font-size: 13px;
}
</style>
