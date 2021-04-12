from flask_restful import Resource
from flask import request
from models.user import User
from models.db import db


class Users(Resource):
    def get(self):
        user = User.find_all()
        return user

    def post(self):
        user = User(**request.get_json())
        user.create()
        return user.json(), 201


class SingleUser(Resource):
    def get(self, id):
        user = User.find_by_id(id)
        return user.json()

    def delete(self, id):
        user = User.delete(id)
        return {'msg': 'User Deleted', 'payload': user['id']}

    def put(self, id):
        user = User.find_by_id(id)
        data = request.get_json()
        for key in data:
            setattr(user, key, data[key])
        return user.json()


class UserBusinessEvent(Resource):
    def get(self, id):
        user = User.include_event_business(id)
        return user
