"""
Define the REST verbs relative to the carts
"""

import json 
from flasgger import swag_from
from flask import request
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import CartRepository
from schemas import CartSchema
from util import parse_params

CartSerializer = CartSchema()

class CartResource(Resource):
    """ Verbs relative to the carts """

    @staticmethod
    @parse_params(
        Argument("id", location="args", required=True, help="Returns cart by ID")
    )
    @swag_from("../swagger/cart/GET.yml")
    def get(id):
        """ Return an cart information based its ID """
        cart = CartRepository.get(id=id)
        return CartSerializer.dump(cart)

    @staticmethod
    @swag_from("../swagger/cart/POST.yml")
    def post():
        """ Create an cart based on the sent information """
        cart = CartRepository.create()
        return jsonify({"cart": cart.json})

    @staticmethod
    @parse_params(
        Argument("id", location="args", required=True, help="ID to update cart."),
        Argument("is-complete", location="args", dest="is_complete", type=bool, required=True, help="Sets the cart as being ready for archiving.")
    )
    @swag_from("../swagger/cart/PUT.yml")
    def put(id, is_complete):
        """ Update an cart based on the sent information """
        repository = CartRepository()

        cart = repository.update(
            id=id,
            is_complete=is_complete
        )
        return jsonify({"cart": cart.json})
