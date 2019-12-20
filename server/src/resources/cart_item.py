"""
Define the REST verbs relative to the items
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import CartItemRepository
from schemas import CartItemSchema
from util import parse_params

CartItemSerializer = CartItemSchema()

class CartItemResource(Resource):
    """ Verbs relative to the items """

    @staticmethod
    @parse_params(
        Argument("id", location="args", required=True, help="Returns cart item by ID")
    )
    @swag_from("../swagger/cart_item/GET.yml")
    def get(id):
        """ Return an cart item key information based on his name """
        cart_item = CartItemRepository.get(id=id)
        return CartItemSerializer.dump(cart_item)

    @staticmethod
    @parse_params(
        Argument("cart-id", location="args", dest="cart_id", required=True, help="Updates cart item quantity by cart ID"),
        Argument("product-id", location="args", dest="product_id", required=True, help="Updates cart item quantity by product ID"),
        Argument("quantity", location="args", required=False, help="Updates cart item quantity by ID")
    )
    @swag_from("../swagger/cart_item/POST.yml")
    def post(cart_id, product_id, quantity):
        """ Create an cart item based on the sent information """
        cart_item = CartItemRepository.create(
            cart_id=cart_id,
            product_id=product_id,
            quantity=quantity
        )
        return CartItemSerializer.dump(cart_item)

    @staticmethod
    @parse_params(
        Argument("id", location="args", required=True, help="Updates cart item by ID"),
        Argument("quantity", location="args", required=True, help="Updates cart item quantity by ID"),
    )
    @swag_from("../swagger/cart_item/PUT.yml")
    def put(id, quantity):
        """ Update an cart item based on the sent information """
        repository = CartItemRepository()
        cart_item = None

        if quantity:
            cart_item = repository.update(id=id, quantity=quantity)
        else:
            cart_item = repository.delete(id=id)

        return CartItemSerializer.dump(cart_item)
