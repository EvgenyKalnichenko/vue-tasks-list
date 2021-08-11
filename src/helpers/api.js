const url =  'https://vue-with-http-694ff-default-rtdb.firebaseio.com/tasks.json';

const addTask = async (task) => {
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...task
        })
    })
};

// async function loadTask() {
//     await fetch(url)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             return data;
//         });
// };

export {
    addTask
}