FROM node:18-alpine

RUN apk add --no-cache python3 py3-pip
WORKDIR /app

# Копируем package.json для кеширования зависимостей
COPY package*.json ./
COPY requirements.txt ./

# Устанавливаем зависимости
RUN npm install --omit=dev
RUN npm ci --only=production
RUN pip3 install --no-cache-dir --break-system-packages -r requirements.txt

# Копируем исходный код
COPY . .

RUN chmod +x start.sh

# Открываем порт (Render использует PORT из env)
EXPOSE 10000

# Запускаем приложение
CMD ["./start.sh"]