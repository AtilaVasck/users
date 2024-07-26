//importar o express
import  express  from "express";
const PORT = 3333

const app = express()

//TODO parte 01 - GET, POST, PUT, PATCH, DELETE
//! parte 02 - Roteamento - Receber informações
/* Formas
* 1 - QUERY PARAMS -> GET ->/users?name=Carlos&cargo=Instrutor
* 2 - ROUTE PARAMS -> GET, PATCH, DELETE -> /users/1
* 3 - BODY PARAMS -> POST -> {JSON}
*/ 


//1 - QUERY PARAMS /users?name=Carlos&cargo=Instrutor
app.get('/users', (request, response)=>{
    const {nome, cargo, idade} = request.query
    response.status(200).json({nome, cargo, idade})
})

app.post('/users', (request, response)=>{
    response.status(201).json([
        'Usuário 01',
        'Usuário 02',
        'Usuário 03',
        'Usuário 04'
    ])
})

app.put('/users/:id/:idade', (request, response)=>{
    const {id, idade} = request.params
    response.status(200).json({'user': id, 'idade':idade})
})
app.delete('/users', (request, response)=>{
    response.status(200).json([
        'Usuário 01'
    ])
})

app.listen(PORT, ()=> { 
    console.log("Servidor on PORT"+ PORT)
})