<template>
  <div class="topbar">
    <div class="logo">🌻</div>
    <el-input
        :placeholder="placeholder"
        v-model="query"
        @keydown="handleKeyDown"

    >
      <template #prepend>
        <el-select  v-model="engine" @change="change" default-first-option size="small" style="width: 80px">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </template>
    </el-input>
    <el-button class="btn" @click="search">搜索</el-button>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";

const query = ref('');
const placeholder = ref('请输入查询内容');
const options = [
  {label:'Bing', value:'https://www.bing.com/search?q='},
  {label:'Google',value:'https://www.google.com/search?q='},
  {label:'DuckDuckGo',value:'https://duckduckgo.com/?q='},
  {label:'Yahoo',value:'https://www.yahoo.com/search?p='},
  {label:'yandex',value:'https://yandex.com/search?text='},
  {label:'百度',value:'https://www.baidu.com/s?wd='},
  {label:'搜狗',value:'https://www.sogou.com/web?query='},
  {label:'360',value:'https://www.so.com/s?q='}
]
const engine = ref(options[0].value);
const search = () => {
  window.open(`${engine.value}${encodeURIComponent(query.value)}`)
  console.log(engine.value, query.value)
}
const change = () => {
  console.log(engine.value, query.value)
}
const clear = () => {
  query.value = ''
}
const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    search()
  }
}
onMounted(()=>{

})
</script>
<style scoped>
.topbar {
  display: flex;
  align-items: center;
  padding: 16px;
  background: #fff;
}
.logo {
  font-size: 22px;
  margin-right: 20px;
}
.search {
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
}
.btn {
  margin-left: 10px;
  padding: 10px 20px;
  background: #409eff;
  color: #fff;
  border: none;
  border-radius: 6px;
}
</style>
