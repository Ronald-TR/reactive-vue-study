from flask import Flask, request, render_template
import os

app = Flask(__name__)


@app.route('/')
def index():
    with open('templates/index.html', 'r', encoding='utf-8') as fp:
        html = ''.join(fp.readlines())
    return html

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
