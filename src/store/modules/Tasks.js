export default {
    namespaced: true,
    state() {
        return {
            loading: false,
            list: []
        }
    },
    mutations: {
        SET_LOADING_STATUS(state, status){
            state.loading = status;
        },
        SET_TASKS(state, tasks){
            state.list = tasks;
        },
        ADD_TASK(state, task){
            state.list.push(task);
        },
    },
    actions: {
        async getTasks(context) {
            context.commit('SET_LOADING_STATUS', true);
            await fetch('https://vue-with-http-694ff-default-rtdb.firebaseio.com/tasks.json')
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    context.commit('SET_LOADING_STATUS', 'false');
                    context.commit('SET_TASKS', data)
                }).catch((error) => {
                    context.commit('SET_LOADING_STATUS', 'false');
                    console.log(error);
                });
        }
    },
    getters: {
        allTasks(state) {
            return state.length
        }
    }
}