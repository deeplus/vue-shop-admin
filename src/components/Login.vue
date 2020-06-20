<template>
    <div class="login-container">
        <div class="login-box">
            <div class="avatar-box">
                <img src="../assets/images/user.jpg" alt="">
            </div>
            <el-form class="login-form" label-width="0">
                <el-form-item>
                    <el-input prefix-icon="iconfont icon-mimaicon" placeholder="admin"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input prefix-icon="iconfont icon-yonghu" placeholder="123456"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button class="login-btn" type="primary">登陆</el-button>
                    <el-button type="info">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login.vue'
    }
</script>

<style lang="less" scoped>
    .login-container {
        height: 100%;
        background-color: #2b4b6b;

        .login-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 450px;
            height: 300px;
            background-color: #fff;
            border-radius: 10px;

            .avatar-box {
                position: absolute;
                top: calc(-120px/2);
                left: calc(50% - 120px/2);
                width: 120px;
                height: 120px;
                border: 1px solid #ccc;
                border-radius: 50%;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }

            .login-form {
                position: absolute;
                bottom: 0;
                width: 100%;
                padding: 5px 12%;
                box-sizing: border-box;

                .btns {
                    display: flex;
                    justify-content: space-around;

                    .login-btn {
                        margin-right: 60px;
                    }
                }
            }
        }
    }
</style>
