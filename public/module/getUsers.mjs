import updateUser from "./updateUser.mjs";
import deleteUser from "./deleteUser.mjs";

export default () => {
    const secRegis = document.getElementById('registration')
    const secList = document.getElementById('list')
    const name = document.getElementById('name')
    const email = document.getElementById('email')

    const tableSec = document.getElementById('table')

    fetch('http://localhost:8000/api', {method: 'GET'})
        .then(response => {
            if (response.status == 200) {
                return response.json()
            } else {
                return `Tente novamente!`
            }
        })
        .then(data => {
            tableSec.innerHTML = ""
            data.forEach(user => {
                if (!user.delete){
                    const tr = document.createElement('tr')
                    const tdId = document.createElement('td')
                    const tdName = document.createElement('td')
                    const tdEmail = document.createElement('td')
                    const tdEdit = document.createElement('td')
                    const tdDel = document.createElement('td')

                    tdId.innerHTML = user.id
                    tdName.innerHTML = user.name
                    tdEmail.innerHTML = user.email
                    tdEdit.innerHTML = `<img src="../imagens/edit.png" class="edit" data-id=${user.id}>`
                    tdDel.innerHTML = `<img src="../imagens/del.png" class="del" data-id=${user.id}>`
                    tr.appendChild(tdId)
                    tr.appendChild(tdName)
                    tr.appendChild(tdEmail)
                    tr.appendChild(tdEdit)
                    tr.appendChild(tdDel)
                    
                    tableSec.appendChild(tr)
                }
            });

            const btnEdits  = document.querySelectorAll('.edit');
            const btnDels  = document.querySelectorAll('.del');
            btnEdits.forEach(btnEdit => btnEdit.addEventListener('click', () => updateUser(btnEdit)));
            btnDels.forEach(btnDel => btnDel.addEventListener('click', () => deleteUser(btnDel)));
        })
}