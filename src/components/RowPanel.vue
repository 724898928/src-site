<template>
  <div v-for="j in items" :key="j.url">
    <el-link class="icon" :href="j.url">
      <el-image :src="j.icon" style="width: 50px; height: 50px;"/>
      <div class="name">{{ j.name }}</div>
    </el-link>
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    <el-link
        v-for="v in j.items"
        :key="v"
        class="items"
        style="align-content: center ;"
    >
        {{ v.title }}
      </el-link>
    <el-link class="more" >更多 >></el-link>
  </div>
</template>


<script setup lang="ts">
import {ref} from 'vue'

interface videoItem {
  title: string;
  url: string;
}

interface IconItem {
  icon: string;
  name: string;
  url: string;
  items: videoItem[];
}

interface ItemGroup {
  [index: number]: IconItem[];
}

defineProps<{ items: ItemGroup }>();

</script>


<style scoped>

.item {
  text-align: center;
  cursor: pointer;
}
.el-link {

}
.name {
  font-size: 12px;
  margin-top: 6px;
}
.more {
  margin-right: 0px;
}
</style>