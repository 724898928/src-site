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
        >
          <el-image :src="site.icon" class="site-icon" />
          <span>{{ site.name }}</span>
        </el-link>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts" >
import { ref } from 'vue'
import {commonSites} from '../utils/data'

const activeName = ref()
const activeSwitch = ref()

const handleClick = (tab, event) => {
  console.log(tab, event);
};

</script>

<style scoped>
.block {
  background: #fff;
  margin: 16px;
  padding: 16px;
}
h3 {
  margin-bottom: 12px;
  color: #409eff;
}
.links {
  display: flex;
  flex-wrap: wrap;
}
.link {
  width: 120px;
  line-height: 28px;
  font-size: 13px;
  cursor: pointer;
}
.link:hover {
  color: #409eff;
}
.quick-links {
  display: flex;
  gap: 15px;
}
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

.common-sites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 15px;
}

.site-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  transition: all 0.3s;
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
</style>
