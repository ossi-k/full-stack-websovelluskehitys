const express = require('express')
const { response } = require('express')
const app = express()

let notes = [ {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
},
{
    name: "Ada Lovelace",
    number: "39-44-532523",
    id: 4
},
{
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
},
{
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
},
{
    name: "Päivittyykö?",
    number: "57817",
    id: 5
}
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.send(notes)
})

app.get('/api/info', (req, res) => {
    const pvm = new Date
    res.send(`Phonebook has info for ${notes.length} people <br/><br/> ${pvm}`)   
  })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})