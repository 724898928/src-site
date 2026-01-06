<template>
  <div class="main-container">
  <TopStatus/>
  <el-container>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
    <Footer></Footer>
  </div>
</template>
<script setup>
import TopStatus from "@/components/TopStatus.vue";
import Footer from "@/components/Footer.vue";
</script>
<style scoped>
  .main-container {
  min-height: 100vh;
  /* background-color: #f5f5f5; */
  background-color: #f5f5f5;
  padding-bottom: 20px;
}

/* .el-main{
  padding: 0;
} */
</style>
