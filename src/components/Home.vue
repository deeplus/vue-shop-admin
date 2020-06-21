<template>
    <el-container class="home-container">
        <!-- 侧边栏 -->
        <el-aside :width="isCollapse ? '80px' : '256px'">
            <!-- logo -->
            <div class="logo-box">
                <img src="../assets/images/logo.png" alt="">
                <h1>电商后台管理系统</h1>
            </div>
            <!-- 导航菜单 -->
            <sidebar :iscollapse="isCollapse"></sidebar>
        </el-aside>

        <el-container>
            <!-- 页面头部 -->
            <el-header height="64px">
                <!-- 折叠菜单 -->
                <div class="collapse-btn" @click="toggleCollapse">
                    <i class="iconfont icon-caidan-shouqi"></i>
                </div>
                <el-dropdown @command="handleCommand">
                    <!-- 将头像和用户名包括在一块，扩大鼠标选区 -->
                    <div>
                        <el-avatar
                            class="avatar"
                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        ></el-avatar>
                        <span class="user">admin</span>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="layout">
                            <i class="iconfont icon-guanji"></i>&nbsp;退出登陆
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>

            <!-- 页面主体 -->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Sidebar from './sidebar/Sidebar'

    export default {
        name: 'Home.vue',
        components: {
            Sidebar
        },
        data() {
            return {
                // 是否折叠左侧菜单
                isCollapse: false
            }
        },
        methods: {
            // 监听下拉菜单选项
            handleCommand(command) {
                // 退出登陆
                if (command === 'layout') {
                    window.sessionStorage.clear()
                    this.$router.push('/login')
                }
            },
            // 折叠左侧菜单
            toggleCollapse() {
                this.isCollapse = !this.isCollapse
            }
        }
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

            .el-menu {
                border-right: none;
            }

            .logo-box {
                display: flex;
                width: 100%;
                height: 64px;
                box-sizing: border-box;
                padding-left: 12px;
                overflow: hidden;

                img {
                    width: 56px;
                    height: 32px;
                    margin-top: 16px;
                    margin-right: 12px;
                }

                h1 {
                    font-size: 20px;
                    line-height: 20px;
                }
            }
        }

        .el-header {
            display: flex;
            justify-content: space-between;
            background-color: @color-background-l;
            padding-left: 0;
            padding-right: 50px;

            .collapse-btn {
                width: 64px;
                height: 64px;
                text-align: center;
                line-height: 64px;
                cursor: pointer;

                .iconfont {
                    font-size: 32px;
                    text-align: center;
                }
            }

            .collapse-btn:hover, .el-dropdown:hover {
                background: rgba(0, 0, 0, .02);
            }

            .el-dropdown {
                cursor: pointer;

                div {
                    height: 100%;
                    padding: 12px 20px;
                    box-sizing: border-box;

                    .avatar {
                        margin-right: 10px;
                        vertical-align: middle;
                    }

                    .user {
                        vertical-align: middle;
                    }
                }
            }
        }

        .el-main {
            background-color: @color-background;
        }
    }
</style>
