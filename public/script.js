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