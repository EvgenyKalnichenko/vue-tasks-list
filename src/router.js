import { createRouter, createWebHistory } from 'vue-router'
import New from './views/New'
import Task from './views/Task'
import Tasks from './views/Tasks'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Tasks, alias: '/' },
        { path: '/new', component: New},
        { path: '/task', component: Task},
    ],
})

export default router