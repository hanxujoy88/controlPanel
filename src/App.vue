<template>
  <div id="app">
    <el-row :gutter="20">
    <el-col :span="4">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
      <el-menu-item index="proprietor"><i class="el-icon-menu"></i>版权方</el-menu-item>
      <el-menu-item index="second"><i class="el-icon-menu"></i>作品</el-menu-item>
      <el-menu-item index="10"><i class="el-icon-menu"></i>样本</el-menu-item>
      <el-menu-item index="11"><i class="el-icon-menu"></i>副本</el-menu-item>
      <el-menu-item index="12"><i class="el-icon-menu"></i>策略包管理</el-menu-item>
      <el-submenu index="13">
        <template slot="title"><i class="el-icon-menu"></i>视频检索</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">优酷视频</el-menu-item>
          <el-menu-item index="1-2">土豆视频</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="15">
        <template slot="title"><i class="el-icon-menu"></i>日志</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">版权日志查询</el-menu-item>
          <el-menu-item index="1-2">土豆视频状态变更查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="16">
        <template slot="title"><i class="el-icon-menu"></i>工具</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">视频查询</el-menu-item>
          <el-menu-item index="1-2">URL转IDS</el-menu-item>
          <el-menu-item index="1-2">用户信息查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
     </el-col>
    <el-col :span="20"><router-view class="view"></router-view></el-col>
    </el-row>    
  </div>
</template>

<script>
export default {
  data() {
      return {
      };
    },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
   }
};

</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
