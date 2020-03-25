<template>
<!------------------------ 写左侧导航栏 ---------------------------->
<div class="aside">
    <div class="nav">
        <span v-if='collaspse'>导航栏</span>
    <!-- <i class="fa fa-address-book" aria-hidden="true"></i> -->
        <i @click="collaspseOropen" :class="{'fa fa-arrow-left':collaspse,'fa fa-arrow-right':!collaspse}" :style="{marginLeft: collaspse? '112px':'20px'}"></i>
    </div>

    <div class="inside">
    <el-menu unique-opened=true :collapse="!collaspse" :style="{width:collaspse?'200px':'50px'}" background-color="#202020" text-color="#ffffff">
    <!-- 导航组件 -->
    <el-menu-item >
        <i class="fa fa-home" aria-hidden="true"></i>
        <span>仪表盘</span>
    </el-menu-item>
    <el-submenu index="1.1">
        <!-- <i slot="title" class="el-icon-cpu"></i> -->
        <i slot="title" class="fa fa-dashboard" aria-hidden="true"></i>
        <span slot="title">系统看板</span>
        <el-menu-item>Panels</el-menu-item>
        <el-menu-item>Accordions</el-menu-item>
        <el-menu-item>Tabs</el-menu-item>
        <el-menu-item>Typography</el-menu-item>
        <el-menu-item>Bottons</el-menu-item>
        <el-menu-item>Alerts</el-menu-item>
        <el-menu-item>Modals</el-menu-item>
        <el-menu-item>Animations</el-menu-item>
    </el-submenu>
    <el-submenu index="1.2">
        <i slot="title" class="fa fa-edit (alias)" aria-hidden="true"></i>
        <span slot="title">系统管理员</span>
        <el-menu-item>用户账户管理</el-menu-item>
        <el-menu-item>组织架构管理</el-menu-item>
        <el-menu-item>角色信息管理</el-menu-item>
    </el-submenu>
    <el-submenu index="1.3">
        <i slot="title" class="fa fa-pie-chart" aria-hidden="true"></i>
        <span slot="title">生产信息管理</span>
        <el-menu-item>生产看板示例一</el-menu-item>
        <el-menu-item>生产看板示例二</el-menu-item>
        <el-menu-item>生产数据报表信息</el-menu-item>
        <el-menu-item>Validation</el-menu-item>
    </el-submenu>
    <el-submenu index="1.4">
        <i slot="title" class="fa fa-exclamation-triangle"></i>
        <span slot="title">报警信息管理</span>
        <el-menu-item>Basic</el-menu-item>
        <el-menu-item>当前报警信息</el-menu-item>
        <el-menu-item>报警数据报表信息</el-menu-item>
    </el-submenu>
        <el-submenu index="5.1">
        <i slot="title" class="fa fa-line-chart" aria-hidden="true"></i>
        <span slot="title">历史曲线记录</span>
        <el-menu-item>硫化机历史曲线</el-menu-item>
        <el-menu-item>Lock screen</el-menu-item>
        <el-menu-item>Forgot password</el-menu-item>
        <el-menu-item>Error pages</el-menu-item>
        <el-menu-item>FAQ</el-menu-item>
        <el-menu-item>User profile</el-menu-item>
    </el-submenu>
    <el-submenu index="6.1">
        <i slot="title" class="fa fa-recycle" aria-hidden="true"></i>
        <span slot="title">能耗信息管理</span>
        <el-menu-item>实时电能消耗</el-menu-item>
        <el-menu-item>电能消耗报表</el-menu-item>
        <el-menu-item>燃气消耗管理</el-menu-item>
        <el-menu-item>Timelines</el-menu-item>
    </el-submenu>
    <el-submenu index="7.1">
        <i slot="title"  class="fa fa-laptop" aria-hidden="true"></i>
        <span slot="title">设备信息管理</span>
        <el-menu-item>硫化机设备台账</el-menu-item>
        <el-menu-item>电梯设备台账</el-menu-item>
        <el-menu-item>注塑机设备台账</el-menu-item>
        <el-menu-item>Timelines</el-menu-item>
    </el-submenu>
    <el-submenu index="8.1">
        <i slot="title" class="fa fa-calendar" aria-hidden="true"></i>
        <span slot="title">项目信息管理</span>
        <el-menu-item>悬赏项目平台</el-menu-item>
        <el-menu-item>所有项目信息</el-menu-item>
        <el-menu-item>我参与的项目</el-menu-item>
        <el-menu-item>Fourth Item</el-menu-item>
    </el-submenu>
    <el-menu-item>
        <i class="fa fa-user"></i>
        <span>我的账户</span>
    </el-menu-item>
    <el-menu-item>
        <i class="fa fa-envelope"></i>
        <span>我的消息</span>
    </el-menu-item>
</el-menu>
</div>
</div>
</template>

<script>
// import 'font-awesome/css/font-awesome.css'
export default {
  props: ['collaspse'],
  methods: {
    collaspseOropen () {
      this.$emit('closeOrOpen')
    }
  }
}
</script>

<style scoped>
.aside {
    background-color:#151515;
    overflow: hidden;
    position: relative;
}
.inside {
    overflow-x: hidden;
    overflow-y: auto;
    height: 90vh;
    margin-top: 30px;
}
    ::-webkit-scrollbar {
     width: 0 !important;
   }
    ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
.el-submenu .el-menu-item {
    height: 39px;
}
.nav {
    height: 35px;
    background-color: #0f0e0e;
    position: absolute;
    z-index: 999;
    width: 200px;
}
.nav span {
    margin-left: 5px;
    /* font-size: 13px; */
    line-height: 30px;
    color: #1e79c4;
}
.el-menu i {
     color: #fff;
     margin-right: 5px;
     font-size: 20px;
 }
 .el-menu span {
     margin-left: 10px;
 }
.nav i {
    line-height: 30px;
    font-size: 20px;
    color: #fff;
}
.element {
    padding-left: 0px;
}
.el-menu-item.is-active {
    color: #fff;
}
</style>
