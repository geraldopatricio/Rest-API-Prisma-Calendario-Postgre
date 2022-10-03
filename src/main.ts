import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const newPessoas = await prisma.pessoa.create({
    data: {
      nome: 'Geraldo Patrício Melo',
      email: 'geraldo@gpsoft.com.br',
      celular: '85997635122',
      endereco: 'Rua Neusa de Freitas Sá',
      numero: '54B',
      bairro: 'Timbu',
      cidade: 'Eusébio',
      uf: 'CE',
      cep: '61777460',
      eventos: {
        create: {
          titulo: 'Reunião com a 2RPNet',
          tipo: 'Reunião',
          dthrIni: '2022-10-03T14:00:00Z',
          dthrFim: '2022-10-03T15:00:00Z',
          diaTodo: false,
          eventoUrl: 'https://meet.google.com/iov-sdnv-ope',
          local: 'Google Meeting',
          detalhes: 'Reunião sobre a entrega da User Story 20, Sprint 90, Epic 9',
        },
      },
    },
  })
  console.log('Criando pessoa: ', newPessoas)

  const allPessoas = await prisma.pessoa.findMany({
    include: { eventos: true },
  })
  console.log('Todos Eventos: ')
  console.dir(allPessoas, { depth: null })

}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())
