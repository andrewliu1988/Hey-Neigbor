from flask_restful import Resource
from flask import request
from models.business import Business
from models.db import db


class Businesses(Resource):
    def get(self):
        business = Business.find_all()
        return business

    def post(self):
        business = Business(**request.get_json())
        business.create()
        return business.json(), 201


class SingleBusiness(Resource):
    def get(self, id):
        business = Business.find_by_id(id)
        return business.json()

    def delete(self, id):
        business = Business.delete(id)
        return {'msg': 'Business Deleted', 'payload': business['id']}

    def put(self, id):
        business = Business.find_by_id(id)
        data = request.get_json()
        for key in data:
            setattr(business, key, data[key])
        return business.json()


class ZipcodeBusiness(Resource):
    def get(self, zipcode):
        business = Business.find_by_zipcode(zipcode)
        return business
