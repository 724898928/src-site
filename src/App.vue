<template>
  <el-container>
    <el-header>
      <TopStatus/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
     <el-footer>
      <Footer/>
    </el-footer>
  </el-container>
<!--    <header class="app-header">
      <div class="logo-container">
        <router-link to="/">
          <h1 class="logo">【虚创源】资源库</h1>
        </router-link>
        <span class="tagline">全网最全资源库·持续更新收集</span>
      </div>
      <SearchBar @search="handleSearch" />
      <div class="header-actions">
        <button @click="toggleTheme" class="theme-toggle">
          <i :class="isDarkMode ? 'sun-icon' : 'moon-icon'"></i>
        </button>
        <button @click="showNotice = true" class="notice-btn">
          <i class="notice-icon">ℹ️</i>使用须知
        </button>
      </div>
    </header>
    <main class="main-content">
      <div class="sidebar">
        <CategoryPanel :categories="categories"></CategoryPanel>
      </div>
      <div class="content-area">
        <router-view></router-view>
      </div>
    </main>
    <Footer/>-->
<!--    <div v-if="showNotice" class="modal-overlay" @click="showNotice = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2>使用须知</h2>
          <button class="close-btn" @click="showNotice = false">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
            </svg>
          </button>
          <div class="modal-body" v-html="formattedNotice"></div>
          <div class="modal-footer">
            <button class="confirm-btn" @click="showNotice = false">我已经了解</button>
          </div>
        </div>
      </div>
    </div>-->
</template>
<script setup>
import {ref,computed, onMounted} from "vue";
import TopStatus from "@/components/TopStatus.vue";

</script>
<style scoped>
.el-main{
  padding: 0;
}
</style>
