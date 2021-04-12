from datetime import datetime
from models.db import db


class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    date = db.Column(db.String(50), nullable=False)
    zipcode = db.Column(db.String(15), nullable=False)
    website = db.Column(db.String(255), nullable=False)
    longitude = db.Column(db.String(50), nullable=False)
    langitude = db.Column(db.String(50), nullable=False)
    attendees = db.Column(db.Ineger(10), nullable=False)
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                           nullable=False, onupdate=datetime.now())

    def __init__(self, name, address, description, date, zipcode, website, longitude, langitude, attendees):
        self.name = name
        self.adddress = address
        self.description = description
        self.date = date
        self.zipcode = zipcode
        self.website = website
        self.longitude = longitude
        self.langitude = langitude
        self.attendees = attendees

    def json(self):
        return {"id": self.id,
                "name": self.name,
                "description": self.description,
                "date": self.date,
                "zipcode": self.zipcode,
                "website": self.website,
                "longitude": self.longitude,
                "langitude": self.langitude,
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
      def delete(cls, id): 
        event = Event.find_by_id(id)
        db.session.delete(event)
        db.session.commit()
        return event.json()
