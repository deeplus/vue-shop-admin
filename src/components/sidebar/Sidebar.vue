<template>
    <el-menu
        background-color="#333744"
        text-color="#fff"
        active-text-color="#449eff"
        unique-opened
        :collapse="iscollapse"
        :collapse-transition="false"
        :default-active="activePath"
        router
    >
        <!-- 一级菜单 -->
        <el-submenu
            :index="item.id + ''"
            v-for="item in menulist"
            :key="item.id"
        >
            <!-- 一级菜单模版区域 -->
            <template slot="title">
                <!-- 图标 -->
                <i :class="icons[item.id]"></i>
                <!-- 文字 -->
                <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
                :index="'/' + subItem.path"
                v-for="subItem in item.children"
                :key="subItem.id"
                @click="saveNavState('/' + subItem.path)"
            >
                <!-- 二级菜单模版区域 -->
                <template slot="title">
                    <!-- 图标 -->
                    <i class="el-icon-menu"></i>
                    <!-- 文字 -->
                    <span>{{subItem.authName}}</span>
                </template>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: 'Sidebar.vue',
        props: ['iscollapse'],
        data() {
            return {
                // 左侧菜单数据
                menulist: [],
                // 左侧菜单图标
                icons: {
                    125: 'iconfont icon-yonghu1',
                    103: 'iconfont icon-tianchongxing-',
                    101: 'iconfont icon-shangpin',
                    102: 'iconfont icon-wo-de-ding-dan',
                    145: 'iconfont icon-shuju'
                },
                // 当前激活的链接
                activePath: ''
            }
        },
        created() {
            this.getMenuList()
            this.activePath = window.sessionStorage.getItem('activePath')
        },
        methods: {
            // 获取所有的菜单
            async getMenuList() {
                const { data: res } = await this.$http.get('menus')
                // console.log(res)
                if (res.meta.status !== 200) {
                    this.$message.error(res.meta.msg)
                } else {
                    this.menulist = res.data
                }
            },
            // 保存链接的激活状态
            saveNavState(activePath) {
                window.sessionStorage.setItem('activePath', activePath)
                this.activePath = activePath
            }
        }
    }
</script>

<style lang="less" scoped>
    .iconfont {
        margin-left: 12px;
        margin-right: 10px;
        font-size: 14px;
    }
</style>
