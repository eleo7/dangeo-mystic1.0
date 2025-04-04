# Usa uma imagem base oficial com Node.js
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala as dependências do projeto
RUN npm install

# Corrige permissão do binário do Next.js
RUN chmod +x node_modules/.bin/next

# Executa o build do Next.js
RUN npm run build

# Expõe a porta usada pela aplicação
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "start"]
