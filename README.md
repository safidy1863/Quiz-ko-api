## Requirements 

- Node.js : Install the latest LTS Version of Node.js from [https://nodejs.org/](https://nodejs.org/).

## Installations

1. Clone the repository : `https://github.com/safidy1863/Quiz-ko-api`
2. Navigate into the directory : `cd Quiz-ko-api`
3. Install the dependencies : `npm install`


## Prepare the development environment

- Remove the existing Docker container if it exists. This ensures you start with a fresh container each time

```
docker rm -f quiz-ko-api-db-1
```

- Launch the docker compose located on our project.

```
docker compose -f docker-compose.yaml up -d
```

- Laucnh our database.

```
docker exec -ti quiz-ko-api-db-1 psql -U quiz-ko -d quiz-ko
```


## Launch our app

- Run this command : `npm run start:dev`