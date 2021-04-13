from datetime import datetime
from models.db import db
from sqlalchemy.orm import joinedload


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    password_digest = db.Column(db.String(100), nullable=False)
    zipcode = db.Column(db.String(15))
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                           nullable=False, onupdate=datetime.now())
    businesses = db.relationship(
        "Business", cascade='all', backref=db.backref('businesses', lazy=True))
    events = db.relationship("Event", cascade='all',
                             backref=db.backref("events", lazy=True))

    def __init__(self, username, email, password_digest, zipcode):
        self.username = username
        self.email = email
        self.password_digest = password_digest
        self.zipcode = zipcode

    def json(self):
        return {"id": self.id,
                "username": self.username,
                "email": self.email,
                "password_digest": self.password_digest,
                "zipcode": self.zipcode,
                "created_at": str(self.created_at),
                "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_all(cls):
        users = User.query.all()
        return [user.json() for user in users]

    @classmethod
    def find_by_username(cls, username):
        return User.query.filter_by(username=username).first()

    @classmethod
    def find_by_id(cls, id):
        return User.query.filter_by(id=id).first()

    @classmethod
    def delete(cls, id):
        user = User.find_by_id(id)
        db.session.delete(user)
        db.session.commit()
        return user.json()

    @classmethod
    def include_event_business(self, user_id):
        user = User.query.options(joinedload('user_business'), joinedload(
            'user_event')).filter_by(id=user_id).first()
        businesses = [b.json() for b in user.businesses]
        events = [e.json() for e in user.events]
        return {**user.json(), 'businesses': businesses, 'events': events}
