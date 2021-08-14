<template>
    <form class="card" @submit.prevent="submitHandler()">
        <h1>Создать новую задачу</h1>
        <div class="form-control">
            <label for="title">Название</label>
            <input type="text" id="title" v-model="title">
            <small v-if="errors.name">{{errors.name}}</small>
        </div>

        <div class="form-control">
            <label for="date">Дата дэдлайна</label>
            <input type="date" id="date" v-model="date">
            <small v-if="errors.date">{{errors.date}}</small>
        </div>

        <div class="form-control">
            <label for="description">Описание</label>
            <textarea id="description" v-model="text"></textarea>
        </div>

        <button class="btn primary">Создать</button>
    </form>
</template>

<script>
    import {addTask} from "../helpers/api";
    import {mapActions} from 'vuex'
    import router from "../router";

    export default {
        data() {
            return {
                title: '',
                text: '',
                date: '',
                errors: {
                    name: null,
                    date: null,
                    text: null
                }
            }
        },
        methods: {
            submitHandler() {
                if (this.formIsValidation()) {
                    const newTask = {
                        title: this.title,
                        text: this.text,
                        date: this.date,
                        status: 'Выполняется'
                    };

                    addTask(newTask, this.$store.state.tasks.list);
                    router.push('/');
                    console.log(this.$store.state.tasks.list);
                }
            },
            ...mapActions('tasks', ['getTasks']),
            formIsValidation() {
                let isValid = true;

                if (this.title.length === 0) {
                    this.errors.name = 'Введите ваше имя!';
                    isValid = false
                }

                if (this.date.length === 0) {
                    this.errors.date = 'Укажите дату';
                    isValid = false
                }

                return isValid;
            }
        },
    }
</script>