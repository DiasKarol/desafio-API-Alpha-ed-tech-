import createUser from "./createUser.mjs"
import getUser from "./getUser.mjs"
import getUsers from "./getUsers.mjs"

export default (btn) => {
    const btnCad = document.getElementById('btn')
    const id = btn.dataset.id
    getUser(id)

    const update = () => {
        const name = document.getElementById('name')
        const email = document.getElementById('email')

        const body = { name: name.value, email: email.value }
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }

        fetch('http://localhost:8000/api/'+id, options)
        .then(response => {
            if (response.status == 200) {
                return response.json()
            } else {
                return `Tente novamente!`
            }
        })
        .then(() => {
            name.value = ""
            email.value = ""
            btnCad.innerHTML = 'Cadastrar'
            btnCad.removeEventListener('click', update)
            btnCad.addEventListener('click', createUser)
            getUsers()
        })
    }

    btnCad.innerHTML = 'Atualizar'
    btnCad.removeEventListener('click', createUser)
    btnCad.addEventListener('click', update)
}