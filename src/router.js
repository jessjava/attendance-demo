import Main from './views/main.vue'

const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: Main,
    children:[{
            path:'index',
            title:'',
            name:'index',
            component: (resolve) => require(['./views/index.vue'], resolve)
        }
    ]
}];
export default routers;