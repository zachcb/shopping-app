"""
Define the Item model
"""
import datetime
from uuid import uuid4
from sqlalchemy import text as sa_text
from sqlalchemy.dialects.postgresql import UUID

from . import db
from .abc import BaseModel, MetaBaseModel


class Product(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The Item model """

    __tablename__ = "products"

    id = db.Column("id", db.Integer, autoincrement=True, primary_key=True)
    
    title = db.Column("title", db.String(300))
    description = db.Column("description", db.Text, nullable=True)
    price = db.Column("price", db.Float, nullable=True)
    image_url = db.Column("image_url", db.Text, nullable=True)

    def __init__(self, id=None, title=None, description=None, price=None, image_url=None):
        """ Create a new Item """
        self.id = id
        self.title = title
        self.description = description
        self.price = price
        self.image_url = image_url
