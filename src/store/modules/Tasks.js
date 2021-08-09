import {loadTasks} from "../../helpers/api";

export default {
    namespaced: true,
    state() {
        return []
    },
    mutations: {
        addTask(state, payload) {
            state.push(payload)
        },
        getTasks(state){
            const tasks = loadTasks();

            const tasksList = Object.keys(tasks).map(key => {
                return {
                    id: key,
                    ...tasks[key]
                }
            })
            state.splice(1, state.length).push([...tasksList]);
        }
    },
    getters: {
        allTasks(state){
            return state.length
        }
    }
}