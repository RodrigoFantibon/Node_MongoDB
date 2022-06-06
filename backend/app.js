const express = require ('express')
const cors = require ('cors')
const app = express()
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
app.use(cors())
//req.body pode ser tratado como um objeto JSON
app.use(express.json())
app.use(bodyParser.json());

const Livro = require('./models/livro')
mongoose.connect('mongodb+srv://rodrigoFantibon:<SENHA>@cluster0.adxl4.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
  console.log ("Conexão OK")
}).catch(() => {
  console.log("Conexão NOK")
});;

//localhost:3000/api/livros
app.get('/api/livros', (req, res) => {
  Livro.find().then(documents => {
    res.status(200).json({
        mensagem: "Tudo OK",
        livros: documents
    })
  })
})

//localhost:3000/api/livros
app.post('/api/livros', (req, res) => {
    const livro = new Livro({
      id: req.body.id,
      titulo: req.body.titulo,
      autor: req.body.autor,
      numero_paginas: req.body.numero_paginas
    })
    livro.save();
    console.log(livro)
    res.status(201).json({mensagem: 'Livro inserido'})
})

// NOVA FUNCAO INSERIDA
app.delete("/api/livros/:id", (req, res) => {
  Livro.deleteOne({_id: req.params.id})
  .then((resultado) => {
      console.log(resultado)
      res.status(200).json({mensagem: 'Livro deletado'})
  })
})


module.exports = app
