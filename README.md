![Development workflow](https://github.com/b0nbon1/findyspace/actions/workflows/dev.workflow.yml/badge.svg)

# FindySpace - Making event spaces bookings easy and convinient.

## Vision
Revolutionize event spaces booking experience

---

## GET STARTED 🛫

### Set up
**prerequisites**
- Nodejs
- Postgresql

#### Run app 🌋

1. Navigate to the directory where you want to copy this repo,clone it by running `git clone <link of the repo>`

2. open the folder in terminal

3. To run client app;
    - `cd client`
    - `cp .env.example .env` to copy environment variables to .env and fill them
    - create database in your psql and add the name of db in .env
    - run `yarn install` to install the packages
    - run `yarn start:dev` to start the server

4. To run client app;
    - `cd client`
    - `cp .env.example .env` to copy environment variables to .env and fill them
    - run `yarn install` to install the packages
    - run `yarn dev` to start the server

5. for client app go to browser and test it on `localhost:5090`

6. for api app go to postman and test with url `localhost:3090`


## Deployment 🚀🚀

This app will be deployed on heroku, To access this app go to these link:
    - [Production URL]()
    - [Staging]()

## API 🚦

It's is using navigate to route `https://localhost:<port>`

## Docker 🐳⚓️

#### Setting Up Docker

1. Install Docker on your pc using instruction [here](https://docs.docker.com/install/). Make sure it's running well and also install `docker-compose`

2. Navigate to the directory where you want to copy this repo,clone it by running `git clone <link of the repo>`

3. Follow the `.env.example` and `.docker.env.example` file to setup your environment and populate with corresponding values

#### Run app on Docker 🌋

1. Run `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build` to create and start apps

2. for client app go to browser and test it on `localhost:5090`

3. for api app go to postman and test with url `localhost:3090`





