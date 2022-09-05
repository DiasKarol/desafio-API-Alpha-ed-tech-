export default (id) => {

    const name = document.getElementById('name')
    const email = document.getElementById('email')

    fetch('http://localhost:8000/api/'+id, {method: 'GET'})
        .then(response => {
            if (response.status == 200) {
                return response.json()
            } else {
                return `Tente novamente!`
            }
        })
        .then(user => {
            name.value = user.name
            email.value = user.email
        })
}