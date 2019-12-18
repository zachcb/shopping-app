""" Defines the Cart repository """

from models import Cart


class CartRepository:
    """ The repository for the cart model """

    @staticmethod
    def get(id):
        """ Query a cart by the id """
        return Cart.query.filter_by(id=id).one()

    def update(self, id, is_complete):
        """ Update a cart's item_ids and quantities """
        cart = self.get(id)

        cart.is_complete = is_complete

        return cart.save()

    @staticmethod
    def create():
        """ Create a new cart """
        cart = Cart()

        return cart.save()
