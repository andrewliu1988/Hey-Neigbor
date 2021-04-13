from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from models.db import db
from flask_cors import CORS
from models.business import Business
from models.event import Event
from models.user import User
from resources.business import Businesses, SingleBusiness, ZipcodeBusiness
from resources.event import Events, SingleEvent, ZipCodeEvent
from resources.user import Users, UserBusinessEvent, SingleUser
from sqlalchemy.orm import joinedload
from resources.auth import Login, Register

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
api.add_resource(ZipcodeBusiness, '/businesses/<string:zipcode>')

api.add_resource(Events, '/events')
api.add_resource(SingleEvent, '/events/<int:id>')
api.add_resource(ZipCodeEvent, '/events/<string:zipcode>')


api.add_resource(Users, '/users')
api.add_resource(SingleUser, '/users/<int:id>')
api.add_resource(UserBusinessEvent, '/users/businessevent/<int:id>')

api.add_resource(Login, '/auth/login')
api.add_resource(Register, '/auth/register')


if __name__ == '__main__':
    app.run(debug=True)
