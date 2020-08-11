<template>
    <div>
        <table>
            <tr>
                <td>id</td>
                <td>名字</td>
            </tr>
            <tr v-for="item in wpusers">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
            </tr>
        </table>
        {{output}}
    </div>
</template>

<script>
    export default {
        name: "Wpusers",
        data(){
            return{
                msg:'hello vue',
                output:'',
                books:[
                    {
                        id: 1,
                        name: 'java linhgjichu'
                    },
                    {
                        id: 2,
                        name:'30 years of coding'
                    }
                ]
            }
        },
        created() {
            const _this = this
            axios.get('http://localhost:9191/update?id=1&wpName=hellosteven').then(function(resp) {
                _this.output = resp.data
            })
            // axios.request('http://localhost:9191//update?'+).then(function(resp){
            //     _this.output = resp.data
            // })
        }
    }
</script>

<style scoped>

</style>