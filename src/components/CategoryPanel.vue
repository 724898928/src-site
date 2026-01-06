<template>
  <!-- 分类导航 -->
  <div class="category-tabs">
    <el-tabs v-model="activeTab" type="card">
      <el-tab-pane
          v-for="category in categories"
          :key="category.name"
          :label="category.title"
          :name="category.name"
      >
        <div class="category-grid">
          <div
              v-for="(subCategory, index) in category.subCategories"
              :key="index"
              class="sub-category"
          >
            <h4>{{ subCategory.title }}</h4>
            <div class="sub-category-items">
              <el-link
                  v-for="item in subCategory.items"
                  :key="item.name"
                  :href="item.url"
                  target="_blank"
                  class="sub-category-item"
              >
                {{ item.name }}
              </el-link>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { ref } from 'vue'
import { categories } from '../utils/data'
// 激活的标签页
const activeTab = ref('entertainment')
interface IconItem {
  title: string;
  url: string;
  icon: string;
  items: Object[];
}

interface ItemGroup {
  [index: number]: IconItem[];
}


// defineProps<{items: ItemGroup}>();
// 自定义导入功能
const userDiy = () => {
  ElMessage.info('自定义导入功能待实现')
}
</script>
<style scoped>
.category-tabs {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

.sub-category {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.sub-category h4 {
  margin: 0 0 10px 0;
  font-size: 14px;
  font-weight: bold;
}

.sub-category-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sub-category-item {
  font-size: 12px;
  padding: 2px 0;
}
</style>
