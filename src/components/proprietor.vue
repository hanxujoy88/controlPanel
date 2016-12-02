<template>
  <div id="proprietor_searchbar">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-breadcrumb separator=">" id="proprietorBreadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>版权方管理</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row>
        <el-col :span="3">
          <el-form-item>
              <el-select v-model="formInline.proprietorFrom" placeholder="版权方来源">
                <el-option label="土豆导入" value="1"></el-option>
                <el-option label="后台创建" value="2"></el-option>
                <el-option label="前台申请" value="3"></el-option>
              </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
              <el-select v-model="formInline.region" placeholder="版权方类型">
                <el-option label="版权方" value="1"></el-option>
                <el-option label="代理商" value="2"></el-option>
              </el-select>
          </el-form-item>
        </el-col>
      <el-col :span="3">
          <el-form-item>
              <el-select v-model="formInline.state" placeholder="版权方状态">
                <el-option label="待审" value="1"></el-option>
                <el-option label="已审" value="2"></el-option>
              </el-select>
          </el-form-item> 
      </el-col>
      <el-col :span="3">
          <el-form-item>
              <el-select v-model="formInline.option" placeholder="查询选择">
                <el-option label="版权方名称" value="1"></el-option>
                <el-option label="版权方ID" value="2"></el-option>
                <el-option label="优酷用户ID" value="3"></el-option>
              </el-select>
          </el-form-item>
      </el-col>
      <el-form-item><el-input v-model="formInline.keyword" placeholder=""></el-input></el-form-item>   
      <el-form-item><el-button type="primary" @click="onSubmit">查询</el-button></el-form-item>
      </el-row>
    </el-form>
     <el-table :data="formInline.tableData" border style="width: 100%" v-loading="loading2" element-loading-text="拼命加载中">
          <el-table-column prop="collect_count" label="版权方ID" width="180"></el-table-column>
          <el-table-column prop="id" label="版权方名称" width="180"></el-table-column>
          <el-table-column prop="subtype" label="所属地区"></el-table-column>
          <el-table-column prop="title" label="申请人"></el-table-column>
          <el-table-column prop="year" label="来源"></el-table-column>
          <el-table-column prop="alt" label="类型"></el-table-column>
          <el-table-column prop="collect_count" label="级别"></el-table-column>
          <el-table-column prop="collect_count" label="状态"></el-table-column>
          <el-table-column prop="collect_count" label="操作"></el-table-column>
      </el-table>
  </div>
  </template>

  <script>
    export default {
      data() {
        return {
            formInline: {
                keyword: '',
                region: '',
                state: '',
                option: '',
                proprietorFrom: '',
                tableData: [],                 
            },
             loading2: false       
          }
      },
      methods: {
          onSubmit() {
                if(this.formInline.keyword ==''){
                  this.$message({
                       showClose: true,
                       message: '请输入查询条件',
                       type: 'error'
                  });
                } else {
                    this.loading2 = true
                    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                          headers: {

                          },
                          emulateJSON: true
                      }).then(function(response) {
                        // 这里是处理正确的回调     
                          this.formInline.tableData = response.data.subjects
                          this.loading2 = false
                      }, function(response) {
                          // 这里是处理错误的回调
                          console.log(response)
                  });
              }   
           }
        }
  }
  </script>

  <style>
    #proprietorBreadcrumb {margin-bottom: 20px;font-size:22px;}

  </style>