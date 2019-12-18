""" Defines the Cart repository """

from models import CartItem


class CartItemRepository:
    """ The repository for the cart item  model """

    @staticmethod
    def get(id):
        """ Query a cart by the id """
        return CartItem.query.filter_by(id=id).one()

    def update(self, id, quantity):
        """ Update a cart's item_ids and quantities """
        cart_item = self.get(id)

        cart_item.quantity = quantity

        return cart_item.save()

    @staticmethod
    def create(cart_id, product_id, quantity):
        """ Create a new cart """
        cart_item = CartItem(cart_id=cart_id, product_id=product_id, quantity=quantity)

        return cart_item.save()

    def delete(id):
        """ Delete a cart item by the id """
        cart_item = self.get(id)
        return cart_item.delete()
