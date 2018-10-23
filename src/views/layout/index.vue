<template>
  <div>
    <el-row>
      <el-col :span="4">
        <Aside></Aside>
      </el-col>
      <el-col :span="20">
        <HeaderWrap></HeaderWrap>
        <router-view></router-view>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Aside from '../../components/side'
  import HeaderWrap from '../../components/header'
  import Footer from '@/components/footer'

  export default {
    name: "index",
    components: {
      Aside,
      HeaderWrap,
      Footer
    }
  }
</script>

<style scoped lang="scss">
/deep/ el-col{
  min-height: 100vh;
}
</style>
