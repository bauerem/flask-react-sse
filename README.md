# Flask React Server Sent Events

## Description

This is a method for streaming data from Flask to React without using Flask-SSE which uses Redis.

## Screenshot

<img title="a title" alt="Alt text" src="screenshot.png">

## Setup
Download code:

        git clone git@github.com:bauerem/flask-upload-download.git

Start API:

        cd flask-upload-download/api
        python3 -m venv venv
        . venv/bin/activate
        pip install -r requirements.txt
        flask run

Start the client:

        cd flask-upload-download
        npm i
        npm run start