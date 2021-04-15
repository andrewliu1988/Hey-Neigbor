from flask_restful import Resource
from flask import request
from models.user import User
from middleware import create_token, gen_password, strip_token, read_token, compare_password


class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.find_by_username(data['username'])
        if user and compare_password(data['password'], user.password_digest):
            payload = {
                'id': user.id,
                'username': user.username
            }
            token = create_token(payload)
            return{'token': token, 'payload': payload}
        return {'msg': 'Unauthorized'}, 401

    def get(self):
        token = strip_token(request)
        if token:
            payload = read_token(token)
            return payload
        return 'Unauthorized', 401


class Register(Resource):
    def post(self):
        data = request.get_json()
        params = {
            "username": data['username'],
            "email": data['email'],
            "password_digest": gen_password(data['password']),
            "zipcode": data['zipcode']
        }
        user = User(**params)
        user.create()
        return user.json(), 201
