import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

// Listar Pessoas
app.get('/pessoas', async (req, res) => {
    const pessoas = await prisma.pessoa.findMany()
    res.json({
        success: true,
        payload: pessoas,
    })
})

// Consultar pessoa específico
app.get('/pessoa/:id', async (req, res) => {
    const { id } = req.params
    const pessoa = await prisma.pessoa.findMany({
        where: { id: Number(id) },
    })
    res.json({
        success: true,
        payload: pessoa,
    })
})

// Listar Eventos
app.get('/eventos', async (req, res) => {
    const eventos = await prisma.evento.findMany({
        where:   { diaTodo: false },
        include: { convite: true }
    })
    res.json({
        success: true,
        payload: eventos,
    })
})

// Consultar evento específico
app.get('/evento/:id', async (req, res) => {
    const { id } = req.params
    const evento = await prisma.evento.findFirst({
        where: { id: Number(id) },
    })
    res.json({
        success: true,
        payload: evento,
    })
})

// Cadastrar Pessoa
app.post('/pessoa', async (req, res) => {
    const result = await prisma.pessoa.create({
        data: { ...req.body },
    })
    res.json({
        success: true,
        payload: result,
    })
})

// Alterar Pessoa específica
app.put('/pessoa/alterar/:id', async (req, res) => {
    const { id } = req.params
    const { nome, email, celular, endereco, numero, bairro, cidade, uf, cep } = req.body
    const pessoa = await prisma.pessoa.update({
        where: { id: Number(id) },
        data: {
            nome,
            email,
            celular,
            endereco,
            numero,
            bairro,
            cidade,
            uf,
            cep,
        },
    })
    res.json({
        success: true,
        payload: pessoa,
    })
})

// Deletar Pessoa
app.delete('/pessoa/:id', async (req, res) => {
    const { id } = req.params
    const pessoa = await prisma.pessoa.delete({
        where: { id: Number(id) },
    })
    res.json({
        success: true,
        payload: pessoa,
    })
})

// Alterar a flag diaTodo 
app.put('/evento/diaTodo/:id', async (req, res) => {
    const { id } = req.params
    const evento = await prisma.evento.update({
        where: { id: Number(id) },
        data: { diaTodo: true },
    })
    res.json({
        success: true,
        payload: evento,
    })
})

// Cadastrar Evento
app.post('/evento', async (req, res) => {
    const { titulo, tipo, dthrIni, dthrFim, eventoUrl, local, detalhes, conviteId } = req.body
    const result = await prisma.evento.create({
        data: {
            titulo,
            tipo,
            dthrIni,
            dthrFim,
            diaTodo: false,
            eventoUrl,
            local,
            detalhes,
            convite: { 
                connect: { id: conviteId } 
            },
        },
    })
    res.json({
        success: true,
        payload: result,
    })
})

// Deletar Evento
app.delete('/evento/:id', async (req, res) => {
    const { id } = req.params
    const evento = await prisma.evento.delete({
        where: { id: Number(id) },
    })
    res.json({
        success: true,
        payload: evento,
    })
})

// Alterar Evento específico
app.put('/evento/alterar/:id', async (req, res) => {
    const { id } = req.params
    const { titulo, tipo, dthrIni, dthrFim, eventoUrl, local, detalhes, conviteId } = req.body
    const evento = await prisma.evento.update({
        where: { id: Number(id) },
        data: {
            titulo,
            tipo,
            dthrIni,
            dthrFim,
            diaTodo: false,
            eventoUrl,
            local,
            detalhes,
            convite: { 
                connect: { id: conviteId } 
            },
        },
    })
    res.json({
        success: true,
        payload: evento,
    })
})

// Consultar eventos de uma pessoa específica
app.get('/eventos/pessoa/:conviteId', async (req, res) => {
    const { conviteId } = req.params
    const evento = await prisma.evento.findFirst({
        where: { conviteId: Number(conviteId) },
    })
    res.json({
        success: true,
        payload: evento,
    })
})

app.use((req, res, next) => {
    res.status(404);
    return res.json({
        success: false,
        payload: null,
        message: 'API: Endpoint nao encontrado: ${req.path}',
    });
});

app.listen(3000, () =>
    console.log('REST API server funcionando em: http://localhost:3000'),
)