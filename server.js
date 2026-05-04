const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// Статика
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.get('/api/greeting', (req, res) => {
  const hours = new Date().getHours();
  let greeting = 'Добрый день';
  
  if (hours < 6) greeting = 'Доброй ночи';
  else if (hours < 12) greeting = 'Доброе утро';
  else if (hours >= 18) greeting = 'Добрый вечер';
  
  res.json({
    message: `${greeting}, Вячеслав! 👋`,
    timestamp: new Date().toISOString()
  });
});

// Fallback для SPA-роутинга (если понадобится)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});