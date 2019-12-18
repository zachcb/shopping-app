"""
Defines the blueprint for the Prodcuts
"""
from flask import Blueprint
from flask_restful import Api

from resources import ProductResource

PRODUCT_BLUEPRINT = Blueprint("product", __name__)
Api(PRODUCT_BLUEPRINT).add_resource(
    ProductResource, "/products"
)
