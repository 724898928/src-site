<script setup>
defineProps({
  title: String,
  items: Array
})
</script>

<template>
  <el-card shadow="never" class="panel">
    <template #header>
      <span class="title">{{ title }}</span>
    </template>

    <div class="list">
      <span
          v-for="i in items"
          :key="i"
          class="item"
      >
        {{ i }}
      </span>
    </div>
  </el-card>
</template>

<style scoped>
.panel {
  margin: 12px;
}
.title {
  font-weight: bold;
  color: #67c23a;
}
.list {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 120px;
  line-height: 28px;
  font-size: 13px;
  cursor: pointer;
}
.item:hover {
  color: #409eff;
}
</style>
