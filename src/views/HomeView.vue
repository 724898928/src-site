<script setup lang="ts">
import * as XLSX from 'xlsx';
import { ref, onMounted } from 'vue';
import SearchView from "@/views/SearchView.vue";
import SearchBar from "@/components/SearchBar.vue";
import IconGrid from "@/components/IconGrid.vue";
import CategoryPanel from "@/components/CategoryPanel.vue";
import { icons, categories } from '../utils/data'
import HotPanel from "@/components/HotPanel.vue";
const tableData = ref([]);
const tableHeader = ref([]);
const loadExcel = async () => {
  // 1. 获取文件(放在 public 目录下的文件可以直接 fetch)
  const res = await fetch('source.xlsx');
  const arrayBuffer = await res.arrayBuffer();

  // 2. 解析数据
  const workBook = await XLSX.read(arrayBuffer);
  const firstSheetName = workBook.SheetNames[0];
  const worksheet = workBook.Sheets[firstSheetName];

  // 3. 转为 json
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  // 4. 分离表头和行数据

  if (jsonData.length > 0) {
    tableHeader.value = jsonData[0];
    tableData.value = jsonData.slice(1);
  }
}
</script>

<template>
  <div style="padding-left: 100px;padding-right: 100px">
    <SearchBar/>
    <HotPanel />
    <CategoryPanel
        v-for="(item, index) in categories"
        :key="index"
        :title="item.title"
        :links="item.links"
    />
  </div>

<!--  <h1>Excel 数据展示</h1>
  <div class="container">
    <table v-if="tableData.length">
      <thead>
      <tr>
        <th v-for="header in tableHeader" :key="header">{{ header }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, index) in tableData" :key="index">
        <td v-for="(cell, i) in row" :key="i">{{ cell }}</td>
      </tr>
      </tbody>
    </table>
    <p v-else>正在加载数据...</p>
  </div>-->
</template>

<style scoped>
/* 简单的表格样式 */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>