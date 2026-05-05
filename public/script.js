document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('/api/greeting');
    const data = await response.json();
    
    document.getElementById('greeting').textContent = data.message;
    document.getElementById('timestamp').textContent = 
      new Date(data.timestamp).toLocaleString('ru-RU');
  } catch (err) {
    document.getElementById('greeting').textContent = 'Привет! 👋';
    document.getElementById('timestamp').textContent = 
      new Date().toLocaleString('ru-RU');
  }
});

document.getElementById('flask-btn').addEventListener('click', async () => {
  const btn = document.getElementById('flask-btn');
  const responseText = document.getElementById('flask-response');
  
  btn.disabled = true;
  btn.textContent = '⏳ Обработка...';

  try {
    const res = await fetch('/api/flask/trigger', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Вячеслав' })
    });
    
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    
    responseText.textContent = data.message;
    responseText.style.color = '#4CAF50';
  } catch (err) {
    responseText.textContent = 'Ошибка связи с Flask';
    responseText.style.color = '#f44336';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Action';
  }
});
