<template>
  <div class="topbar">
    <div class="logo">🌻 导航</div>

    <input
        class="search"
        placeholder="百度一下，你就知道"
    />

    <button class="btn">搜索</button>
  </div>
</template>

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
