<template>
    <div>
        <table>
            <tr>
                <td>id</td>
                <td>名字</td>
            </tr>
            <tr v-for="item in books">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
            </tr>
        </table>
        {{msg}}
    </div>
</template>

<script>
    export default {
        name: "Book",
        data(){
            return{
                msg:'hello vue',
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
            axios.get('http://localhost:8181/book/findAll').then(function(resp) {
                _this.books = resp.data
            })
        }
    }
</script>

<style scoped>

</style>