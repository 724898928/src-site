<script setup>
defineProps({ title: String, links: Array })
</script>

<template>
  <div class="block">
    <h3>{{ title }}</h3>
    <div class="links">
      <span
          v-for="item in links"
          :key="item"
          class="link"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

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
