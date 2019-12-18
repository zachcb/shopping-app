"""
Define the Cart Item schema
"""

from models import CartItem
from marshmallow import fields
from marshmallow_sqlalchemy import ModelSchema

class CartItemSchema(ModelSchema):
    products = fields.Nested('ProductSchema')

    class Meta:
        model = CartItem