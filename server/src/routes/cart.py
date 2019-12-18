"""
Defines the blueprint for the carts
"""
from flask import Blueprint
from flask_restful import Api

from resources import CartResource

CART_BLUEPRINT = Blueprint("cart", __name__)
Api(CART_BLUEPRINT).add_resource(
    CartResource, "/carts"
)
