<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="图书名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button @click="test">test</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    author: '',

                },
                rules: {
                    name: [
                        { required: true, message: '图书名称不能为空', trigger: 'blur' },
                    ],
                    author: [
                        { required: true, message: '作者不能为空', trigger: 'change' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://localhost:8181/book/save',this.ruleForm).then(function(resp){
                            if(resp.data == 1){
                                // alert('添加成功')
                                // _this.$message('添加成功');
                                _this.$alert('已经添加书', '成功', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        _this.$router.push('/BookManage');
                                    }
                                });

                                // _this.$router.push('/BookManage');
                            }
                            console.log(resp);
                        });

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            test(){
                console.log(this.ruleForm);
            }
        }
    }
</script>