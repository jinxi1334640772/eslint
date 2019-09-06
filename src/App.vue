<template>
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
        <button @click="displaythis('wangtianyun')">跳转到message/wangtianyun</button>
        <button @click="isLogin">登录</button>
        <button @click="existLogin">退出登录</button>
        <button @click="getData">axios请求数据</button>
        <router-view name="other"></router-view>
        <div v-for="(item,index) in lists" :key="item.id">
            {{index+1}}: {{ item.name }}
        </div>
    </div>
</template>

<script>
import { comments } from './utils/axios/api'
import navbar from './components/nav/nav.vue'
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
    data() {
        return {
            lists: []
        }
    },
    components: { navbar },
    computed: {
        ...mapState({ name1: 'name' }),
        ...mapGetters('moduleA', ['moduleGetter'])
    },
    methods: {
        ...mapMutations('moduleA', ['moduleMutation']),
        ...mapMutations(['isLogin', 'existLogin']),
        getData() {
            comments({}).then(data => {
                console.log(data, '111111111');
                this.lists = data.data
            })
        },
        displaythis(id) {
            console.log(this, id, 'this');
            //方法一，没有参数，用path加不加斜杠都可以通过
            // this.$router.push('login');
            //方法二
            // this.$router.push({name:'login'});
            //方法三
            // this.$router.push({path:'login'})
            //方法一，带参数
            // this.$router.push(`/message/${id}`)
            //方法二
            // this.$router.push({path:`message/${id}`})
            //三
            this.$router.push({ name: 'messageSub', params: { id } })

        },
        nameAction() {
            this.$store.dispatch('nameAction');
        }
    }
}
</script>

<style>
</style>
