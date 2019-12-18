"""
Define the Cart schema
"""

from models import Cart
from marshmallow import fields
from marshmallow_sqlalchemy import ModelSchema

class CartSchema(ModelSchema):
    cart_items = fields.Nested('CartItemSchema', default=None, many=True)

    class Meta:
        model = Cart