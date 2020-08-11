<template>
    <div id="Index">
        <el-container style="height: 600px; border: 1px solid #eee">
            <!--      边上导航栏-->
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <!--&lt;!&ndash;        导航栏菜单&ndash;&gt;-->
                <!--        <el-menu :default-openeds="['1']" :default-active="'1-2'">-->
                <!--&lt;!&ndash;          一级菜单&ndash;&gt;-->
                <!--          <el-submenu index="1">-->
                <!--            <template slot="title"><i class="el-icon-message"></i>导航一</template>-->
                <!--&lt;!&ndash;            二级菜单&ndash;&gt;-->
                <!--            <el-menu-item-group>-->
                <!--              <template slot="title">分组一</template>-->
                <!--              <el-menu-item index="1-1">选项1</el-menu-item>-->
                <!--              <el-menu-item index="1-2">选项2</el-menu-item>-->
                <!--              <el-submenu index="1-3">-->
                <!--                <template slot="title"><i class="el-icon-setting"></i>选项三</template>-->
                <!--                <el-menu-item index="1-3-1">选项3-1</el-menu-item>-->
                <!--                <el-menu-item index="1-3-2">选项3-2</el-menu-item>-->
                <!--              </el-submenu>-->
                <!--            </el-menu-item-group>-->
                <!--          </el-submenu>-->
                <!--        </el-menu>-->
                <el-menu router :default-openeds="['0','1']">
                    <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''" v-if="item.show">
                        <template slot="title"><i class="el-icon-setting"></i>{{item.name}}</template>
                        <el-menu-item v-for="(item2,index2) in item.children"
                                      :index="item2.path" class="$route.path==item2.path?'is-active':''">{{item2.name}} </el-menu-item>
                    </el-submenu>
                </el-menu>

            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>

                <el-main>
                    <router-view></router-view>
                </el-main>

            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>