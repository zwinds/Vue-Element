<template>
  <div>
    <el-badge :value="12" class="item1">
      <el-button size="big">待查项目</el-button>
    </el-badge>
    <el-badge :value="3" class="item2">
      <el-button size="big">待办项目</el-button>
    </el-badge>

    <el-dropdown trigger="click" class="item3">
      <span class="el-dropdown-link">
        异常处理
        <i class="el-icon-caret-bottom el-icon--right" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="clearfix">
          请假
          <el-badge class="mark" :value="12" />
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          异常
          <el-badge class="mark" :value="3" />
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-calendar v-model="value" />
    <!-- <el-button type="primary" style="margin-left: 16px;" @click="drawer = true">
      详情
    </el-button>

    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <span>我来啦!</span>
    </el-drawer> -->
  </div>

</template>
<style>
.item1{
  margin-top: 20px;
  margin-right: 40px;
  left: 20px;
}
.item2 {
    margin-top: 20px;
  margin-right: 40px;
}
.item3{
  top: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      value: new Date(),
      drawer: false,
      direction: 'rtl'
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
