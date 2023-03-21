from flask import Flask, Response, send_from_directory, Response
from flask_cors import CORS
import os
from datetime import datetime
import time

app = Flask(__name__)
CORS(app)

@app.route('/api/time')
def time_():
    t = time.time()
    return {"time": str(t)}

@app.route('/api/stream')
def stream():

    def get_data():
        while True:
            time.sleep(1)
            yield f'data: {datetime.now()} \n\n'

    return Response(get_data(), mimetype='text/event-stream') #'text/event-stream' for Chrome, 'text' for Firefox?