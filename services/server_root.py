from flask import render_template
import connexion
from flask_cors import CORS

app = connexion.App(__name__, specification_dir='./server_spec', options={'swagger_ui': False})

app.add_api('specification.yml')
CORS(app.app)

@app.route('/')
def home():
    """
    Static kartavys-backend page, responds to the "/" route
    :return:    Static welcome template 'home.html'
    """
    return "Hello, world!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
