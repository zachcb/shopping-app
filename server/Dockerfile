# https://store.docker.com/images/python
FROM python:3.7

WORKDIR /usr/src/server

COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5500

CMD ["python", "./src/server.py"]