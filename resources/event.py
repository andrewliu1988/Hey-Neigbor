from flask_restful import Resource
from flask import request
from models.event import Event
from models.db import db


class Events(Resource):
    def get(self):
        event = Business.find_all()
        return event

    def post(self):
        event = Event(**request.get_json())
        event.create()
        return event.json(), 201


class SingleEvent(Resource):
    def get(self, id):
        event = Event.find_by_id(id)
        return event.json()

    def delete(self, id):
        event = Event.delete(id)
        return {'msg': "Event Deleted", 'payload': event['id']}

    def put(self, id):
        event = Event.find_by_id(id)
        data = request.get_json()
        for key in data:
            setattr(event, key data[key])
        return event.json()
