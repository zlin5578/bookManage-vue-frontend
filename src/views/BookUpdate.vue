<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="图书编号" >
            <el-input v-model="ruleForm.id" readonly></el-input>
        </el-form-item>
        <el-form-item label="图书名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
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
                    id:'',
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
                        axios.put('http://localhost:8181/book/update',this.ruleForm).then(function(resp){
                            if(resp.data === 1){
                                // alert('添加成功')
                                // _this.$message('修改成功');
                                _this.$alert('《'+_this.ruleForm.name+'》 修改成功', '图书已修改', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        _this.$router.push('/BookManage');
                                    }
                                });

                                // _this.$router.push('/BookManage');
                            }
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
            },
        },
        created(){
            const _this=this
            axios.get('http://localhost:8181/book/findById/'+this.$route.query.id).then(function(resp){
                _this.ruleForm=resp.data
            })
        },
    }
</script>