<template>
    <template v-if="$store.state.tasks.list.length === 0 ">
        <h1 class="text-white center">Задач пока нет</h1>
    </template>
    <template v-else>
        <h3 class="text-white">Всего активных задач: {{allTasks}}</h3>
        <div class="card" v-for="task in $store.state.tasks.list" :key="task.id" :id="task.id">
            <h2 class="card-title">
                {{task.title}}
                <AppStatus :type="task.status"/>
            </h2>
            <p>
                <strong>
                    <small>
                        {{new Date().toLocaleDateString()}}
                    </small>
                </strong>
            </p>
            <p>{{task.text}}</p>
            <button class="btn primary" @click="openTask(task.id)">Посмотреть</button>
            <button class="btn danger" @click="removeTask(task.id)">Удалить</button>
        </div>
    </template>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import AppStatus from '../components/AppStatus'
    import router from "../router";

    export default {
        computed: {
            ...mapGetters('tasks', ['allTasks']),
        },
        components: {
            AppStatus
        },
        methods: {
            ...mapActions('tasks', ['getTasks']),
            ...mapActions('tasks', ['removeTask']),
            // ...mapMutations('tasks', ['REMOVE_TASK']),
            openTask(id){
                router.push(`/task/${id}`);
            }
        },
        mounted() {
            if(!this.$store.state.tasks.list.length){
                this.getTasks();
            }
        },
    }
</script>
