<template>
  <h1 v-if="$store.state.tasks.length === 0" class="text-white center">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{allTasks}}</h3>
    <div class="card" v-for="task in $store.state.tasks" :key="task.id">
      <h2 class="card-title">
        {{task.title}}
        <AppStatus :type="'done'" />
      </h2>
      <p>
        <strong>
          <small>
            {{new Date().toLocaleDateString()}}
          </small>
        </strong>
      </p>
      <p>{{task.text}}</p>
      <button class="btn primary">Посмотреть</button>
    </div>
  </template>
</template>

<script>
  import {mapGetters} from 'vuex'
  import AppStatus from '../components/AppStatus'

  export default {
    computed: {
      ...mapGetters('tasks', ['allTasks'])
    },
    components: {
      AppStatus
    }
  }
</script>
