<template>
  <!-- 常用站点 -->
  <div class="common-sites">
    <el-card shadow="never">
      <div class="common-sites-header">
        <h3>常用站点</h3>
        <div class="quick-links">
          <el-link href="https://www.meijiecao.top/bizhi/" target="_blank">电脑壁纸</el-link>
          <el-link href="https://172.lot-ml.com/Product/Index/475972" target="_blank" style="color: #e0760c;">流量卡</el-link>
          <el-link href="https://www.meijiecao.top/" target="_blank">在线工具</el-link>
          <el-link href="https://wnl.cc/" target="_blank">万年历</el-link>
          <el-link href="https://www.qweather.com/" target="_blank">天气预报</el-link>
          <el-link href="https://www.kuaidi100.com/" target="_blank">查快递</el-link>
          <el-link href="./more/people.html" target="_blank">生活服务</el-link>
        </div>
      </div>

      <div class="common-sites-grid">
        <el-link
            v-for="site in commonSites"
            :key="site.name"
            :href="site.url"
            target="_blank"
            class="site-item"
            underline="never"
        >
          <el-image :src="site.icon" class="site-icon" />
          <span>{{ site.name }}</span>
        </el-link>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { commonSites } from '../utils/data'

const activeName = ref()
const activeSwitch = ref()

const handleClick = (tab, event) => {
  console.log(tab, event);
};

</script>

<style scoped>
.common-sites {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.common-sites-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.quick-links {
  display: flex;
  gap: 15px;
}

.common-sites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
}

.site-item {
  display: flex;
  flex-direction: column;   /* 关键：设置为垂直排列 */
  align-items: center;
  text-align: center;
  border-radius: 8px;
  transition: all 0.3s;
  width: 60px;
  height: 85px;
  justify-content: center;
  margin: 0 auto; 
}

.site-item:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
}

.site-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 5px;
}

::v-deep(.el-link__inner) {
    flex-direction: column !important;
}

.el-image {
    display: flex;
    overflow: hidden;
    position: relative;
}
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 10px;
  }

  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .quick-links {
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
