async function createPerson(payload) {
    console.log(payload);
    await fetch('https://tasks-vue-projects-default-rtdb.firebaseio.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: payload
        })
    })
}

export {
    createPerson
}