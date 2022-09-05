import home from "./module/home.mjs";
import createUser from "./module/createUser.mjs";
import getUsers from "./module/getUsers.mjs";
/* import updateUser from "./module/updateUser.mjs";
import deleteUser from "./module/deleteUser.mjs"; */


const main = document.getElementById('root');

window.addEventListener('load', () => {
    main.appendChild(home());
    const btn = document.getElementById('btn');
    btn.addEventListener('click', createUser);
    getUsers();
    /* const btnEdits  = document.querySelectorAll('.edit');
    const btnDels  = document.querySelectorAll('.del');
    btnEdits.forEach(btnEdit => btnEdit.addEventListener('click', updateUser));
    btnDels.forEach(btnDel => btnDel.addEventListener('click', () => deleteUser(btnDel))); */
});


