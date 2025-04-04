# Dockerfile custom para Dangeo Mystic (Next.js)

# Etapa 1: imagem base com Node.js
FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia arquivos do projeto
COPY . .

# Instala as dependências do projeto
RUN npm install

# Executa o build com Next.js (usando npx para evitar erros de permissão)
RUN npx next build

# Expõe a porta padrão da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npx", "next", "start"]
