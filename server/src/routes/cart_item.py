"""
Defines the blueprint for the carts
"""
from flask import Blueprint
from flask_restful import Api

from resources import CartItemResource

CART_ITEM_BLUEPRINT = Blueprint("cart_items", __name__)
Api(CART_ITEM_BLUEPRINT).add_resource(
    CartItemResource, "/cart-items"
)
