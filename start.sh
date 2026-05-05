#!/bin/sh
# Запускаем Flask в фоне на порту 5000
python3 flask_app.py 5000 &

# Запускаем Node.js на основном порту (exec делает его PID 1 для корректной работы Render)
exec node server.js