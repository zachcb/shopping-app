"""
Define the Product schema
"""

from models import Product
from marshmallow import fields
from marshmallow_sqlalchemy import ModelSchema

class ProductSchema(ModelSchema):

    class Meta:
        model = Product