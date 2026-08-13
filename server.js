const express = require("express")

const app = express()

app.use(express.json())

const produtos = [
    {
        id:1,
        nome:"Notebook",
        preco:4500
    },
    {
        id:2,
        nome:"Teclado",
        preco:80
    },
    {
        id:3,
        nome:"Mouse",
        preco:15
    }
]


app.get("/produtos",(req,res)=>{
    res.json(produtos)
})

app.get("/produtos/:id",(req,res)=>{
    const id = Number(req.params.id)

    const produto = produtos.find((produto)=>produto.id === id)

    if(!produto){
        return res.status(404).json({
            mensagem:"Produto nao encontrado"
        })
    }

    return res.json(produto)
})

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})
	