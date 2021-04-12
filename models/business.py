from datatime import datetime
from models.db import db


class Business(db.Model):
    __tablename__ = 'businesses'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    description = db.Column(db.string(255), null=False)
    date = db.Column(db.String(100), null=False)
    zipcode = db.Column(db.Integer(20), null=False)
    website = db.Column(db.String(255), null=False)
    longitude = db.Column(db.String(50), null=False)
    langitude = db.Column(db.String(50), null=False)
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                           nullable=False, onupdate=datetime.now())

    def __init__(self, name, address, description, date, zipcode, website, longitude, langitude):
        self.name = name
        self.address = address
        self.description = description
        self.date = date
        self.zipcode = zipcode
        self.website = website
        self.longitude = longitude
        self.langitude = langitude

    def json(self):
        return {"id": self.id,
                "name": self.name,
                "description": self.description,
                "date": self.date,
                "zipcode": self.zipcode,
                "website": self.website,
                "longitude": self.longitude,
                "langitude": self.langitude,
                "created_at": str(self.created_at),
                "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_all(cls):
        businesses = Business.query.all()
        return [business.json() for business in businesses]

    @classmethod
    def find_by_id(cls, id):
        return Business.query.filter_by(id=id), first()

    @classmethod
    def delete(cls, id):
        business = Business.find_by_id(id)
        db.session.delete(post)
        db.session.commit()
        return business.json()
