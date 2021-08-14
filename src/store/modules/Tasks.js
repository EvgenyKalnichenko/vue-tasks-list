import axios from 'axios'

export default {
    namespaced: true,
    state() {
        return {
            loading: false,
            list: [],
            detail: {
                title: '',
                text: '',
                data: '',
                status: ''
            }
        }
    },
    mutations: {
        SET_LOADING_STATUS(state, status) {
            state.loading = status;
        },
        SET_TASKS(state, data) {
            state.list = Object.keys(data).map(key => {
                return {
                    ...data[key]
                }
            })
        },
        ADD_TASK(state, task) {
            state.list.push(task);
        },
        ADD_TASK_DETAIL(state, task) {

            state.detail = task;
            console.log(task, state.detail)
        },
        REMOVE_TASK(state, id) {
            state.list = state.list.filter(task => task.id !== id);
        },
        DETAIL_TASK(state, id) {
            state.detail = state.list.filter(task => task.id === id);
        }
    },
    actions: {
        async getTasks(context) {
            context.commit('SET_LOADING_STATUS', true);
            await fetch('https://vue-with-http-694ff-default-rtdb.firebaseio.com/tasks.json')
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    const newArray = Object.keys(data).map(key => {
                        return {
                            ...data[key],
                            id: key
                        }
                    })
                    context.commit('SET_LOADING_STATUS', 'false');
                    context.commit('SET_TASKS', newArray);
                }).catch((error) => {
                    context.commit('SET_LOADING_STATUS', 'false');
                    console.log(error);
                });
        },
        async removeTask(context, id) {
            await axios.delete(`https://vue-with-http-694ff-default-rtdb.firebaseio.com/tasks/${id}.json`);
            context.commit('REMOVE_TASK', id);
        },
        async getTaskDetail(context, id) {
            console.log('getTaskDetail', id);
            // const data = await axios(`https://vue-with-http-694ff-default-rtdb.firebaseio.com/tasks/${id}.json`);
            await fetch(`https://vue-with-http-694ff-default-rtdb.firebaseio.com/tasks/${id}.json`)
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    context.commit('ADD_TASK_DETAIL', data);
                }).catch((error) => {
                    console.log(error);
                });
        }
    },
    getters: {
        allTasks(state) {
            return state.length
        },
    }
}