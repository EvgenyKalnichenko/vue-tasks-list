import { createStore } from 'vuex'
import tasks from "./modules/Tasks";

export default createStore({
    modules: {
        tasks
    },
})