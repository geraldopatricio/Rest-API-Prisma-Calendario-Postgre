-- CreateTable
CREATE TABLE "Pessoa" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "email" TEXT NOT NULL,
    "celular" VARCHAR(11) NOT NULL,
    "endereco" VARCHAR(50) NOT NULL,
    "numero" VARCHAR(10) NOT NULL,
    "bairro" VARCHAR(30) NOT NULL,
    "cidade" VARCHAR(30) NOT NULL,
    "uf" CHAR(2) NOT NULL,
    "cep" VARCHAR(8) NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(150) NOT NULL,
    "tipo" VARCHAR(30) NOT NULL,
    "conviteId" INTEGER,
    "dthrIni" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dthrFim" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diaTodo" BOOLEAN NOT NULL DEFAULT false,
    "eventoUrl" TEXT,
    "local" VARCHAR(150) NOT NULL,
    "detalhes" TEXT,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pessoa_email_key" ON "Pessoa"("email");

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_conviteId_fkey" FOREIGN KEY ("conviteId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
