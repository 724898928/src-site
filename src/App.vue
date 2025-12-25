<template>
  <div class="app-container">
    <SearchBar />
    <IconGrid :sites="quickSites" />

    <CategoryBlock
        v-for="c in categories"
        :key="c.title"
        :title="c.title"
        :links="c.links"
    />
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
        <CategoryNav :categories="categories"></CategoryNav>
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
  </div>
</template>
<script setup>
//import TheWelcome from './components/TheWelcome.vue'
import {ref,computed, onMounted} from "vue";
import SearchBar from '@/components/SearchBar.vue';
import CategoryNav from "@/components/CategoryNav.vue";
import Footer from "@/components/Footer.vue";
import CategoryBlock from "@/components/CategoryBlock.vue";
import IconGrid from "@/components/IconGrid.vue";
import {categories, quickSites} from "@/utils/data.js";

const showNotice = ref(false)
const isDarkMode = ref(false)

// 从本地存储获取主题设置
onMounted(() => {
  const savedTheme = localStorage.getItem('theme-preference')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
    document.documentElement.classList.toggle('dark', isDarkMode.value)
  }
})

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  localStorage.setItem('theme-preference', isDarkMode.value ? 'dark' : 'light')
}

// 格式化使用须知内容
const formattedNotice = computed(() => {
  return usageNotice
      .replace(/\n/g, '<br>')
      .replace(/### (.*)/g, '<h3>$1</h3>')
      .replace(/## (.*)/g, '<h2>$1</h2>')
      .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
})

const handleSearch = (query) => {
  if (query.trim()) {
    window.location.href = `#/search?q=${encodeURIComponent(query)}`
  }
}

</script>
<style scoped>

body {
  background: #f5f7fa;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: background-color 0.3s, color 0.3s;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--header-bg);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo-container {
  display: flex;
  flex-direction: column;
}

.logo {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
}

.tagline {
  font-size: 0.9rem;
  color: var(--secondary-text);
  margin-top: 0.25rem;
}

.header-actions {
  display: flex;
  gap: 1rem;
}

.theme-toggle, .notice-btn {
  background: var(--card-bg);
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.theme-toggle:hover, .notice-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.notice-icon {
  font-size: 1.2rem;
}

.sun-icon::before {
  content: "☀️";
}

.moon-icon::before {
  content: "🌙";
}

.main-content {
  display: flex;
  flex: 1;
  padding: 1rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.sidebar {
  width: 250px;
  flex-shrink: 0;
  margin-right: 1.5rem;
}

.content-area {
  flex: 1;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  background-color: var(--card-bg);
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 80vh;
  overflow: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.modal-header {
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--secondary-text);
  transition: color 0.2s;
}

.close-btn:hover {
  color: var(--primary-color);
}

.modal-body {
  padding: 1.5rem;
  line-height: 1.6;
  overflow-y: auto;
  max-height: 60vh;
}

.modal-body h2 {
  color: var(--primary-color);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.modal-body h3 {
  color: var(--secondary-color);
  margin-top: 0.8rem;
  margin-bottom: 0.4rem;
}

.modal-footer {
  padding: 1rem;
  border-top: 1px solid var(--border-color);
  text-align: right;
}

.confirm-btn {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.confirm-btn:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(37, 117, 252, 0.3);
}

@media (max-width: 992px) {
  .main-content {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
