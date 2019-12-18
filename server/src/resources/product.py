"""
Define the REST verbs relative to the products
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import ProductRepository
from util import parse_params


class ProductResource(Resource):
    """ Verbs relative to the products """

    @staticmethod
    @parse_params(
        Argument("id", location="args", required=True, help="Returns cart product by ID")
    )
    @swag_from("../swagger/product/GET.yml")
    def get(id):
        """ Return an product key information based on his name """
        cart_product = ProductRepository.get(id=id)
        return jsonify({"cart_product": cart_product.json})

    @staticmethod
    @parse_params(
        Argument("title", location="args", required=True, help="The title of the product."),
        Argument("description", location="args", required=False, help="The description of the product."),
        Argument("price", location="args", required=False, help="The price of the product."),
        Argument("image_url", location="args", required=False, help="The image url of the product.")
    )
    @swag_from("../swagger/product/POST.yml")
    def post(title, description, price, image_url):
        """ Create an product based on the sent information """
        cart_product = ProductRepository.create(
            title=title, description=description, price=price, image_url=image_url
        )
        return jsonify({"cart_product": cart_product.json})

    @staticmethod
    @parse_params(
        Argument("id", location="args", required=True, help="Returns cart product by ID"),
        Argument("title", location="args", required=True, help="The title of the product."),
        Argument("description", location="args", required=False, help="The description of the product."),
        Argument("price", location="args", required=False, help="The price of the product."),
        Argument("image-url", location="args", dest="image_url", required=False, help="The image url of the product.")
    )
    @swag_from("../swagger/product/PUT.yml")
    def put(id, title, description, price, image_url):
        """ Update an prdouct based on the sent information """
        repository = ProductRepository()
        product = repository.update(id=id, title=title, description=description, price=price, image_url=image_url)
        return jsonify({"product": product.json})
