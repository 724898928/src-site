<script setup>
defineProps({ list: Array })
</script>

<template>
  <el-card shadow="never"  class="panel">
    <div class="items">
      <div
          v-for="i in list"
          :key="i.name"
          class="item"
      >
        <div class="icon">{{ i.icon }}</div>
        <div class="name">{{ i.name }}</div>
      </div>
    </div>
  </el-card>
</template>

<style scoped>
.grid {
  margin: 12px;
}
.items {
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  gap: 16px;
}
.item {
  text-align: center;
  cursor: pointer;
}
.icon {
  width: 48px;
  height: 48px;
  margin: auto;
  background: #f2f2f2;
  border-radius: 10px;
  line-height: 48px;
  font-weight: bold;
}
.name {
  font-size: 12px;
  margin-top: 6px;
}
</style>
