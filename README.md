# Shopping Cart App Example

## Preparation

Verify Docker and Docker-Compose are installed.

In the main directory.

```
    $ docker-compose up --build
```

In the server directory, migrate the database.

```
    $ make database.upgrade
```

### Notes

Everything is able to be hot-reloaded while in the Docker container. Although, if you break something in the Python container it might refresh.