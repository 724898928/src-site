<template>
  <el-card shadow="never" class="panel">
    <div class="grid">
      <div class="items" v-for="n in items">
        <div
            v-for="i in n"
            :key="i.name"
            class="item"
        >
          <el-link class="icon" :href="i.url">
            <el-image :src="i.icon" :alt="i.name"/>
          </el-link>
          <div class="name">{{ i.name }}</div>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
interface IconItem {
  name: string;
  url: string;
  icon: string;
}

interface ItemGroup {
  [index: number]: IconItem[];
}

defineProps<{
  items: ItemGroup;
}>();
</script>

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
