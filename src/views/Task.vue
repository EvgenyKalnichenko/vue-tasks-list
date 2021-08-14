<template>
  <div class="card" v-if="!loader">
    <h2>{{title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="'done'" /></p>
    <p><strong>Дэдлайн</strong>: {{ date }}</p>
    <p><strong>Описание</strong>: {{text}}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong> {{id}}</strong> загружается.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {mapActions} from "vuex";

export default {
  components: {AppStatus},
  props: {
    id:{
      type:String,
      default: ''
    }
  },
  data(){
    return{
      title: '',
      text: '',
      date: '',
      status: '',
      loader: false,
    }
  },
  methods:{
    ...mapActions('tasks', ['getTaskDetail']),
  },
  mounted() {
    this.loader = true;
    this.getTaskDetail(this.id).then(()=>{
      this.title = this.$store.state.tasks.detail.title;
      this.text = this.$store.state.tasks.detail.text;
      this.date = this.$store.state.tasks.detail.date;
      this.status = this.$store.state.tasks.detail.status;
      this.loader = false;
    })
    console.log();

  },
  unmounted() {
    this.$store.state.tasks.detail = [];
  }
}
</script>

<style scoped>

</style>