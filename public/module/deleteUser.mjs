import getUsers from "./getUsers.mjs";

export default (btn) => {
    const id = btn.dataset.id

    fetch('http://localhost:8000/api/'+id, {method: 'DELETE'})
        .then(response => {
            if (response.status == 200) {
                return response.json()
            } else {
                return `Tente novamente!`
            }
        })
        .then(() => getUsers())
}