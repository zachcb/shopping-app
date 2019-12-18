from faker import Faker
from flask_script import Command

from repositories import ProductRepository

fake = Faker()

class AddFake(Command):
    """ Adds Fake Data """

    def run(self):
        for i in range(10):
            job = fake.job()
            image_url = "https://via.placeholder.com/150/" + fake.safe_hex_color().replace("#", "") + "/000000?Text=" + job

            ProductRepository.create(
                title=job,
                description=fake.paragraph(nb_sentences=3, variable_nb_sentences=True, ext_word_list=None),
                price=fake.pydecimal(left_digits=2, right_digits=5, positive=True),
                image_url=image_url
            )
