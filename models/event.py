from datetime import datetime
from models.db import db


class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(255), default='', nullable=False)
    address = db.Column(db.String(255),  default='', nullable=False)
    image = db.Column(db.String(255), default='', nullable=False)
    description = db.Column(db.String(255),  default='', nullable=False)
    date = db.Column(db.String(50),  default='', nullable=False)
    zipcode = db.Column(db.String(30),  default='', nullable=False)
    website = db.Column(db.String(255),  default='', nullable=False)
    longitude = db.Column(db.String(15),  nullable=False)
    latitude = db.Column(db.String(15),   nullable=False)
    attendees = db.Column(db.String(30),  default='')
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                           nullable=False, onupdate=datetime.now())
    user = db.relationship("User", backref=db.backref("user_event", lazy=True))

    def __init__(self, user_id,  name, address, image, description, date, zipcode, website, longitude, latitude, attendees):
        self.user_id = user_id
        self.name = name or ''
        self.address = address or ''
        self.image = image or ''
        self.description = description or ''
        self.date = date or ''
        self.zipcode = zipcode or ''
        self.website = website or ''
        self.longitude = longitude
        self.latitude = latitude
        self.attendees = attendees or ''

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
                "attendees": self.attendees,
                "created_at": str(self.created_at),
                "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_all(cls):
        events = Event.query.all()
        return [event.json() for event in events]

    @classmethod
    def find_by_id(cls, id):
        return Event.query.filter_by(id=id).first()

    @classmethod
    def find_by_zipcode(cls, zipcode):
        return Event.query.filter_by(zipcode=zipcode).all()

    @classmethod
    def delete(cls, id):
        event = Event.find_by_id(id)
        db.session.delete(event)
        db.session.commit()
        return event.json()
