<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">
        <img src="/dinosaur.png" alt="logo">
      </div>
      <div class="weather">
        <iframe scrolling="no" src="https://widget.tianqiapi.com/?style=tg&skin=sogou&column=3&align=left&paddingtop=10"
          frameborder="0" width="700" height="60" allowtransparency="true"></iframe>
      </div>
      <div class="time">
        <span id="time">{{ formattedTime }}</span>
      </div>
      <div class="header-actions">
        <el-link href="https://news.topurl.cn/" target="_blank" underline='never'>
          <el-image src="/img/new2.png" class="icon" />
        </el-link>
        <el-link href="/more/moyu.html" target="_blank" underline='never'>
          <el-image src="/img/moyu.png" class="icon" />
        </el-link>
        <el-link href="./posts/#/faq" target="_blank" underline='never'>
          <el-image src="/img/feedback.png" class="icon" />
        </el-link>
        <el-link href="http://test.ustc.edu.cn/" target="_blank" underline='never'>
          <el-image src="/img/speed.png" class="icon" />
        </el-link>
        <el-link @click="userDiy" underline='never'>
          <el-image src="/img/set.png" class="icon" />
        </el-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

import { ElMessage } from "element-plus";
import { computed, onMounted, onUnmounted, ref } from "vue";

// 当前时间  dinosaur
const currentTime = ref(new Date());

// 更新时间的方法
const updateTime = () => {
  currentTime.value = new Date();
}

// 挂载后每秒更新时间
onMounted(()=>{
  const timer = setInterval(updateTime,1000)
  onUnmounted(() => clearInterval(timer))       // 组件卸载时清理  
})
// 格式化时间
const formattedTime = computed(() => {
  return currentTime.value.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
})
// 自定义导入功能
const userDiy = () => {
  ElMessage.info('自定义导入功能待实现')
}
</script>
<style scoped>
.header-actions {
  gap: 15px;
  align-content: end;
}

.header {
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}


.logo img {
  height: 50px;
}

.weather {
  flex: 1;
  margin: 0 20px;
}

.header-actions {
  display: flex;
  gap: 15px;
}

.icon {
  width: 24px;
  height: 24px;
}
</style>
