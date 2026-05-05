from flask import Flask, jsonify, request
import datetime

app = Flask(__name__)

@app.route('/api/flask/trigger', methods=['POST'])
def trigger_action():
    data = request.get_json(silent=True) or {}
    name = data.get('name', 'Гость')
    return jsonify({
        'message': f'✅ Кнопка нажата! Привет, {name}!',
        'timestamp': datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        'backend': 'Flask'
    })

if __name__ == '__main__':
    import sys
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5000
    app.run(host='0.0.0.0', port=port)