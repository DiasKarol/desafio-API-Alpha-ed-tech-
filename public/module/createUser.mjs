import getUsers from "./getUsers.mjs"

export default () => {
    const secRegis = document.getElementById('registration')
    const secList = document.getElementById('list')
    const name = document.getElementById('name')
    const email = document.getElementById('email')

    const tableSec = document.getElementById('table')

    const body = { name: name.value, email: email.value }
    const options = {
        //mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }

    fetch('http://localhost:8000/api', options)
        .then(response => {
            if (response.status == 200) {
                return response.json()
            }
            throw new Error('Ocorreu um erro!')
        })
        .then(() => {
            name.value = ""
            email.value = ""
            getUsers()
        })
        .catch ((error) => {
            alert(error)
        })
}