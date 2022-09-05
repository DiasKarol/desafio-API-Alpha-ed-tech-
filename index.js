import express from 'express';
import { router } from './routes/routes.mjs';
//import { users } from './routes/routes.mjs';

var app = express();
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use((req, res, next) => {
    console.log('Usuario criado/modificado')
    next()
})

app.use(router)

app.listen(8000, function() {
    console.log('Executando na porta 8000!');
});