""" Defines the Product repository """

from models import Product


class ProductRepository:
    """ The repository for the product model """

    @staticmethod
    def get(id):
        """ Query a product by the id """

        if id:
            return Product.query.filter_by(id=id).one()
        else:
            return Product.query.all()

    def update(self, id, title, description, price, image_url):
        """ Update a product's products and quantities """
        product = self.get(id)

        product.title = title
        product.description = description
        product.price = product
        product.image_url = image_url

        return product.save()

    @staticmethod
    def create(title, description, price, image_url):
        """ Create a new product """
        product = Product(
            title=title,
            description=description,
            price=price,
            image_url=image_url
        )

        return product.save()
