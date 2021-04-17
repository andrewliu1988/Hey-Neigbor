from datetime import datetime
from models.db import db


class Business(db.Model):
    __tablename__ = 'businesses'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(255), default='', nullable=False)
    address = db.Column(db.String(255), default='', nullable=False)
    image = db.Column(db.String(255), default='', nullable=False)
    description = db.Column(db.String(255), default='', nullable=False)
    date = db.Column(db.String(50), default='', nullable=False)
    zipcode = db.Column(db.String(15), default='', nullable=False)
    website = db.Column(db.String(255), default='', nullable=False)
    longitude = db.Column(db.String(15), default='', nullable=False)
    latitude = db.Column(db.String(15), default='', nullable=False)
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                           nullable=False, onupdate=datetime.now())
    user = db.relationship(
        "User", backref=db.backref("user_business", lazy=True))

    def __init__(self, user_id, name, address, image, description, date, zipcode, website, longitude, latitude):
        self.user_id = user_id
        self.name = name or ''
        self.address = address or ''
        self.image = image or ''
        self.description = description or ''
        self.date = date or ''
        self.zipcode = zipcode or ''
        self.website = website or ''
        self.longitude = longitude or ''
        self.latitude = latitude or ''

    def json(self):
        return {"id": self.id,
                "user_id": self.user_id,
                "name": self.name,
                "address": self.address,
                "image": self.image,
                "description": self.description,
                "date": self.date,
                "zipcode": self.zipcode,
                "website": self.website,
                "longitude": self.longitude,
                "latitude": self.latitude,
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
        return Business.query.filter_by(id=id).first()

    @classmethod
    def find_by_zipcode(cls, zipcode):
        return Business.query.filter_by(zipcode=zipcode).all()

    @classmethod
    def delete(cls, id):
        business = Business.find_by_id(id)
        db.session.delete(business)
        db.session.commit()
        return business.json()
