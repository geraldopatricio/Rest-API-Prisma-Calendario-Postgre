const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Documentação',
    description: 'Tabelas de Pessoas e Eventos',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './src/swagger-output.json';
const endpointsFiles = ['./src/index.ts', './src/main.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc);