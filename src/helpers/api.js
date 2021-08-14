const url = 'https://vue-with-http-694ff-default-rtdb.firebaseio.com/tasks.json';

const addTask = async (task, list) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...task
        })
    });

    const firebaseData = await response.json()

    list.push({
        ...task,
        id: firebaseData.name
    })
};
export {
    addTask
}