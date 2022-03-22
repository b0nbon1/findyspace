![Development workflow](https://github.com/b0nbon1/findyspace/actions/workflows/dev.workflow.yml/badge.svg)

# FindySpace - Making event spaces bookings easy and convinient.

## Vision
Revolutionize event spaces booking experience

---

## GET STARTED 🛫

#### Set up

- Navigate to the directory where you want to copy this repo,clone it by running `git clone <link of the repo>`

- Install `postgresql` into your computer

- Create two databases:
    -  for development
    -  for testing

- add connection string Urls to the `.env` file :
    - `DEV_DATABASE_URL=postgres://<username>:<password>@127.0.0.1:5432/<database for dev>` for development
    - `TEST_DATABASE_URL=postgres://<username>:<password>@127.0.0.1:5432/<database for test>` for testing

    - Make a copy of the .env.example and rename it .env, add the corresponding project variables, same as docker.env.example to docker.env

- Run migrations using `<migration script>`

- Run `<seed script>` for commit the seeds to the database

- To undo:
       - all seeders run `<undo seed script>`
       - all migrations run `<undo migration script>`

#### Run the app 🌋
- use docker instructions for running servers


## Deployment 🚀🚀

This app will be deployed on heroku, To access this app go to these link:
    - [Production URL](https://https://kencinema.herokuapp.com/.herokuapp.com/)
    - [Staging](https://https://kencinema.herokuapp.com/.herokuapp.com/)

## API 🚦

It's is using navigate to route `https://localhost:<port>`

## Docker 🐳⚓️

#### Setting Up Docker

1. Install Docker on your pc using instruction [here](https://docs.docker.com/install/). Make sure it's running well and also install `docker-compose`

2. Navigate to the directory where you want to copy this repo,clone it by running `git clone <link of the repo>`

3. Follow the `.env.example` and `.docker.env.example` file to setup your environment and populate with corresponding values


#### Run app on Docker

1. Run `docker-compose up --build` to create and start containers

2. for client app go to browser and test it on `localhost:5090`

3. for api app go to postman and test with url `localhost:3090`




