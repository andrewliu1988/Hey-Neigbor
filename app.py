from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from models.db import db
from flask_cors import CORS
from models.business import Business
from models.event import Event
from models.user import User
from resources.post import Businesses, SingleBusiness
from resources.event import Events, SingleEvent

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost:5432/hey_neighbor_db'
app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app, db)


api.add_resource(Businesses, '/businesses')
api.add_resource(SingleBusiness, '/businesses/<int:id>')

api.add_resource(Events, '/events')
api.add_resource(SingleEvent, '/events/<int:id>')


if __name__ == '__main__':
    app.run(debug=True)
