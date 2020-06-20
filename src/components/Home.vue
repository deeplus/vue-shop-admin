<template>
    <el-container class="home-container">
        <!-- 侧边栏 -->
        <el-aside width="256px">Aside</el-aside>
        <el-container>
            <!-- 页面头部 -->
            <el-header height="64px">Header</el-header>
            <!-- 页面主体 -->
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: 'Home.vue'
    }
</script>

<style lang="less" scoped>
    @import '../assets/less/variable.less';

    .home-container {
        height: 100%;
        user-select: none;

        .el-aside {
            background-color: @color-background-d;
            color: #fff;
        }

        .el-header {
            background-color: @color-background-l;
        }

        .el-main {
            background-color: @color-background;
        }
    }
</style>
