<template>
  <el-card shadow="never" class="panel">
    <el-tabs
        v-model="activeName"
        class="demo-tabs"
        default-value="third"
        @tab-click="handleClick">
      <el-tab-pane>
        <template #label>
            <el-switch size="small">
            </el-switch>
        </template>
      </el-tab-pane>
      <el-tab-pane
          v-for="tab in tabs"
          :key="tab.name"
          :label="tab.label"
          :name="tab.name"
      >
        default-value: third
        <br/>
        active: {{ activeName }}
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script setup lang="ts" >
import { ref } from 'vue'
const tabs = ref([
  { label: '热门网址', name: 'first' },
  { label: '在线工具', name: 'second' },
  { label: '程序员工具', name: 'third' },
  { label: '天气预报', name: 'fourth' },
])

const activeName = ref()

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
</style>
