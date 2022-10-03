## etapas abaixo:

## criar o projeto vazio
npm init -y

## instalar o Typescript
npm install typescript ts-node @types/node -D

## instalar o prisma
npm install prisma -D

## criar arquivo docker-compose.yml

## subir imagem docker do banco
docker-compose up -d

## checando se subiu o continer docker do postgre
docker ps

## configurando o prisma pra rodar as migrations
npx prisma init

## altere o .env e shcema de acordo com sua base de dados e tabelas
## agora rode a migration
npx prisma migrate dev --name "init"

## instalando a cli do prisma
npm install @prisma/client

## crie o arquivo src/main.ts com a função assincrona
## execute um registro de testes usando
npx ts-node src/main.ts

## gerencie o banco através do comando
npx prisma studio

## instalando o express
npm install express

## instalando dependencias necessárias para o ts
npm install @types/express -D