<template>
    <div class="login-container">
        <!-- 登陆框 -->
        <div class="login-box">
            <!-- 默认头像 -->
            <div class="avatar-box">
                <img src="../assets/images/user.jpg" alt="">
            </div>
            <!-- form 表单 -->
            <el-form
                class="login-form"
                label-width="0"
                :model="loginForm"
                :rules="loginFormRules"
                ref="loginFormRef"
            >
                <!-- 账户 -->
                <el-form-item prop="username">
                    <el-input
                        prefix-icon="iconfont icon-mimaicon"
                        placeholder="账户: admin"
                        v-model="loginForm.username"
                    ></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input
                        prefix-icon="iconfont icon-yonghu"
                        placeholder="密码：123456"
                        show-password
                        v-model="loginForm.password"
                    ></el-input>
                </el-form-item>
                <!-- 底部按钮 -->
                <el-form-item class="btns">
                    <el-button class="login-btn" type="primary" @click="login">登陆</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login.vue',
        data() {
            return {
                // 表单数据
                loginForm: {
                    username: '',
                    password: ''
                },

                // 表单校验规则
                loginFormRules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在3～10个字符之间', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 12, message: '长度在6～12个字符之间', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            // 重置登陆表单
            resetLoginForm() {
                this.$refs.loginFormRef.resetFields()
            },

            // 登陆
            login() {
                this.$refs.loginFormRef.validate(async valid => {
                    // 验证通过，valid为true；验证失败，valid为false
                    // eslint-disable-next-line no-useless-return
                    if (!valid) return

                    // 验证通过
                    const { data: res } = await this.$http.post('login', this.loginForm)
                    console.log(res)
                    if (res.meta.status !== 200) {
                        // 登陆失败
                        this.$message.error('登陆失败!')
                    } else {
                        // 登陆成功
                        this.$message.success('登陆成功！')
                        /*
                        * 1. 将登陆成功之后服务端返回的token保存到客户端到sessionStorage中
                        *   1.1 项目中除了登陆之外的其它api接口，必须在登陆之后才能访问
                        *   1.2 token 只应在当前网站打开期间生效，所以将token保存在sessionStorage中
                        */
                        window.sessionStorage.setItem('token', res.data.token)
                        /*
                        * 2. 通过编程式导航跳转到后台主页，路由地址是 /home
                        */
                        await this.$router.push('/home')
                    }
                })
            }
        }
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
