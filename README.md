# Clients Management Frontend

## Requirements

Before getting started, make sure you have Docker and Docker Compose installed on your machine.

- Docker: [Docker Installation](https://docs.docker.com/get-docker/)
- Docker Compose: [Docker Compose Installation](https://docs.docker.com/compose/install/)

## Settings

1. Clone the repository to your local machine.
2. Create a `.env` file in the project's root directory with the necessary variables. An example can be found in the `.env.example` file.

## Initialization

To start the application, follow these steps:

1. Open a terminal in the project's root directory.
2. Execute the following command to start the Docker containers:

```
docker-compose up -d
```

This will start the application, and you can access it through the browser at [http://localhost:3001](http://localhost:3001).

## Additional Notes

- Ensure that the necessary ports are available and not being used by other services.

To stop the application, use the following command:

```
docker-compose down
```
