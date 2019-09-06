import vue from 'vue';
import vuex from 'vuex';
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'
vue.use(vuex);
const store = new vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        moduleA
    }
})
export default store;
// store.replaceState({haha:'hahahha'});
// store.subscribe((mutation,state)=>{
//     console.log(mutation,state,'111111111')
// })
// store.subscribeAction((action,context)=>{
//     console.log(action,context,'2222222');
// })
// store.watch((state,getter)=>{console.log(getter);return state.name;}, ()=>{console.log('state.name已经改变了'),{name:'张进喜'}})

//热重载
if (module.hot) {
    module.hot.accept(['./mutations', './modules/moduleA'], () => {
        const newMutations = require('./mutations').default
        const newModuleA = require('./modules/moduleA').default
        store.hotUpdate({
            mutations: newMutations,
            moduleA: newModuleA,
        })
    })

}
