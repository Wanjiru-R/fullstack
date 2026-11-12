# fullstack

## Run with Docker Compose

From this directory, build and start the Django API and Vite frontend:

```sh
docker compose up --build
```

Open the frontend at <http://localhost:5173>. The Django API is available at
<http://localhost:8000>. Django migrations run automatically when the backend
starts, and its SQLite database is stored in the `sqlite_data` Docker volume.

This Compose setup is for local development: source changes are mounted into
the containers for hot reload. Set `SECRET_KEY` in your environment before
starting the stack if you want to use a value other than the local-only default.

Stop the containers with `docker compose down`. To also remove the persisted
SQLite database, run `docker compose down --volumes`.