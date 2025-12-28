<template>
  <el-footer class="footer">
    <div class="footer-content">

      <!-- 左侧：网站信息 -->
      <div class="footer-section brand">
        <div class="logo">🌻 导航门户</div>
        <div class="desc">
          聚合优质资源，提升效率<br />
          打造中国人最顺手的导航站
        </div>
      </div>

      <!-- 中间：功能链接 -->
      <div class="footer-section">
        <div class="title">网站功能</div>
        <a href="#">资源导航</a>
        <a href="#">分类浏览</a>
        <a href="#">站内搜索</a>
        <a href="#">收藏夹</a>
      </div>

      <!-- 中间：帮助支持 -->
      <div class="footer-section">
        <div class="title">帮助支持</div>
        <a href="#">使用指南</a>
        <a href="#">常见问题</a>
        <a href="#">意见反馈</a>
        <a href="#">联系我们</a>
      </div>

      <!-- 右侧：关于我们 -->
      <div class="footer-section">
        <div class="title">关于我们</div>
        <a href="#">关于本站</a>
        <a href="#">免责声明</a>
        <a href="#">隐私政策</a>
        <a href="#">用户协议</a>
      </div>

    </div>

    <!-- 底部备案信息 -->
    <div class="footer-bottom">
      <span>© 2025 导航门户</span>
      <span class="divider">|</span>
      <span>京ICP备 XXXXXXXX 号</span>
      <span class="divider">|</span>
      <span>仅供学习与资源导航使用</span>
    </div>
  </el-footer>
</template>

<style scoped>
.footer {
  background: #ffffff;
  border-top: 1px solid #e4e7ed;
  padding: 30px 40px 16px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  min-width: 160px;
  margin-bottom: 20px;
  font-size: 13px;
  color: #606266;
}

.footer-section a {
  display: block;
  line-height: 28px;
  color: #606266;
  text-decoration: none;
}

.footer-section a:hover {
  color: #409eff;
}

.title {
  font-weight: bold;
  margin-bottom: 8px;
  color: #303133;
}

.brand .logo {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.brand .desc {
  font-size: 13px;
  line-height: 20px;
  color: #909399;
}

.footer-bottom {
  border-top: 1px solid #ebeef5;
  margin-top: 16px;
  padding-top: 12px;
  font-size: 12px;
  color: #909399;
  text-align: center;
}

.divider {
  margin: 0 6px;
}
</style>
