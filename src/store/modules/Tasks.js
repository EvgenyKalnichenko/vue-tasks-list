export default {
    namespaced: true,
    state() {
        return [
            {
                id:'id-1',
                title: 'Задача 1',
                text: 'Текст 1',
                status: 'done'
            },
            {
                id:'id-2',
                title: 'Задача 2',
                text: 'Текст 2'
            },
            {
                id:'id-3',
                title: 'Задача 2',
                text: 'Текст 2'
            },
            {
                id:'id-4',
                title: 'Задача 2',
                text: 'Текст 2'
            }
        ]
    },
    mutations: {
        addTask(state, payload) {
            state.push(payload)
        },
    },
    getters: {
        allTasks(state){
            return state.length
        }
    }
}