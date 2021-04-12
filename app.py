from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from models.db import db
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost:5432/hey_neighbor_db'
app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app, db)


if __name__ == '__main__':
    app.run(debug=True)
