const url =  'https://vue-with-http-694ff-default-rtdb.firebaseio.com/tasks.json';

const addTask = async (task) => {
    const response = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...task
        })
    })

    const firebaseData = await response.json()

    console.log(firebaseData);
}

const loadTasks = async () => {
    await fetch(url)
        .then((response) => {
            return  response.json();
        })
        .then((data) => {
            console.log(data);
        });
};


export {
    loadTasks,
    addTask
}