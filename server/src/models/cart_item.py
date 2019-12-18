"""
Define the Item model
"""
import datetime
# from uuid import uuid4
from sqlalchemy import text as sa_text
# from sqlalchemy.dialects.postgresql import UUID
from . import db
from .abc import BaseModel, MetaBaseModel


class CartItem(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The Cart Item model """

    __tablename__ = "cart_items"

    id = db.Column("id", db.Integer, autoincrement=True, primary_key=True)
    cart_id = db.Column("cart_id", db.Integer, db.ForeignKey("carts.id"))
    product_id = db.Column("product_id", db.Integer, db.ForeignKey("products.id"))

    quantity = db.Column("quantity", db.Integer, nullable=True)
    products = db.relationship("Product")

    def __init__(self, id=None, cart_id=None, product_id=None, quantity=None):
        """ Create a new Cart Item """
        self.id = id
        self.cart_id = cart_id
        self.product_id = product_id
        self.quantity = quantity

