import { user } from '../data/user.mjs'
//import userList from '../data/users.json' assert {type: 'json'}
//const users = userList;

import fs from 'fs/promises'

async function read() {
    let users = await fs.readFile('./data/users.json', 'utf-8')
    users = JSON.parse(users)
    return users
}

async function createUser(req, res) {
    const users = await read();
    const { name, email } = req.body;
    console.log(req.body)  
    const newUser = new user(name, email, users.length+1)
    users.push(newUser)

    const newUsers = JSON.stringify(users)

    await fs.writeFile('./data/users.json', newUsers)
    return res.json(newUser)
}

async function getUsers(req, res) {
    const users = await read();
    let activeUsers = users.filter(user => user.delete == false);

    return res.json(activeUsers);
}

async function getUser(req, res) {
    const users = await read();
    const userid = parseInt(req.params.id)
    const selectUser = users.find(user => user.id == userid);
    return res.json(selectUser);
}

async function updateUser(req, res) {
    const users = await read();
    const userInput = req.body
    const userListId = parseInt(req.params.id)

    users[userListId-1].name = userInput.name
    users[userListId-1].email = userInput.email

    const listUsers = JSON.stringify(users)
    
    await fs.writeFile('./data/users.json', listUsers)
    
    return res.json(users);
}

async function delUser(req, res) {
    const users = await read();
    const userDel = parseInt(req.params.id)

    users[userDel-1].delete = true

    const listUsers = JSON.stringify(users)

    await fs.writeFile('./data/users.json', listUsers)
    getUsers(req, res);
}

export { createUser }
//export { users }
export { getUsers }
export { getUser }
export { updateUser }
export { delUser }