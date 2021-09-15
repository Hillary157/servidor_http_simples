const http = require ('http')
const express = require ('express')
//constrói um objeto express
const app= express()

//importa o body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

let id = 3
let alunos = [
    {
        id: 1,
        nome: "João",
        fone:"11223344",
        email:"joao@email.com"

    },
    {
        id: 2,
        nome: "Maria",
        fone:"55221133",
        email:"maria@email.com"
    }
];

//configura a porta do servidor e o coloca em execução
const porta = 3000
app.set('port', porta)
const server = http.createServer(app);
server.listen(3000)



//tratamento de requisições POST
app.post("/alunos",(req,res)=>{
    id = id + 1
    const aluno = {
        id: id,
        nome: req.body.nome,
        fone: req.body.fone,
        email: req.body.email
    }
    alunos.push(aluno)
    res.status(201).json(aluno)
});

//tratamento de requisições GET
app.get("/alunos",(req,res) =>{
    res.status(200).json(alunos);
})

//tratamento de requisições PUT
app.put("/alunos",(req,res,next) => {
    alunos.forEach((aluno) =>{
        if(aluno.id === req.body.id){
            aluno.fone = req.body.fone
        }
    })
    res.status(204).end();


});