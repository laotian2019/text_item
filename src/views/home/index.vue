<template>
<div class="layout">
  <el-container>
<el-header height="45px" class="header-top">
  <!-- -------------------------------------- -->
<el-row>
<!--  -->
  <el-col :span="8"><div class="grid-content bg-purple">
      <div class="picture" style="line-height:70px;">
  <img  src="../../assets/img/avicit_logo.png" alt="">
      </div>
  </div></el-col>
<!--  -->
  <el-col :span="4"><div class="grid-content bg-purple-light">
    <!-- <span>22222</span> -->
    </div></el-col>
<!--  -->
  <el-col :span="16"><div style="float:right">
    <div class="bgclor">
      <img src="../../assets/img/nav_prcture.png" alt="">
    </div>
  </div></el-col>
<!--  -->
</el-row>

<!-- ------------------------------------------------------- -->
  </el-header>
  <el-container>
    <el-aside :style="{width:collaspse? '200px':'50px'}" height="100vh" style="transition:all 0.3s"><!--设置导航栏宽度 -->
      <!-- 放置组件 -->
      <layout-aside :collaspse='collaspse' @closeOrOpen='iscollaspse'></layout-aside>
    </el-aside>
    <el-main>
      <layout-main></layout-main>
    </el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
import layoutAside from '../../components/home/layout-aside' // 引入
import layoutMain from '../../components/home/layout-main' // 引入
export default {
  data () {
    return {
      collaspse: true// 是否折叠
    }
  },
  components: {
    'layout-aside': layoutAside,
    'layout-main': layoutMain
  },
  methods: {
    iscollaspse () {
      this.collaspse = !this.collaspse
    }
  }
}
</script>

<style scoped>
  .header-top{
    background-color:#004e90;
    height: 50px;
  }
 .layout .picture{
    text-align: center;
    width: 120px;
    height: 30px;
    padding-left: -15px;
  }
  .bgclor {
    padding-left:1500px;
  }
  .bgclor img {
    height: 45px;
  }
</style>
