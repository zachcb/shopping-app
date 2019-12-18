"""
Define the Cart model
"""
import datetime
# from uuid import uuid4
# from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.hybrid import hybrid_property

from . import db
from .abc import BaseModel, MetaBaseModel


class Cart(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The Cart model """

    __tablename__ = "carts"

    id = db.Column("id", db.Integer, autoincrement=True, primary_key=True)
    is_complete = db.Column("is_complete", db.Boolean, default=False)
    cart_items = db.relationship("CartItem")
    # cart_id = db.Column("cart_id", UUID(as_uuid=True), primary_key=True, default=uuid4)

    def __init__(self, id=None, is_complete=None):
        """ Create a new Cart """
        self.id = id
        self.is_complete = is_complete
        # self.cart_items = cart_items