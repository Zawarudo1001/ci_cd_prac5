FROM node:18-alpine

WORKDIR /app

# Копируем package.json для кеширования зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --omit=dev
RUN npm ci --only=production

# Копируем исходный код
COPY . .

# Открываем порт (Render использует PORT из env)
EXPOSE 10000

# Запускаем приложение
CMD ["npm", "start"]