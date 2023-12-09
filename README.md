# daily-bible-verse

The main purpose of this project is to send a random Bible verse to an registered e-mail.

The project uses the concept taught on the course "Tarefas em Background
Utilizando Node.js e Redis" from DIO (https://www.dio.me/en) with bull and bull board library for queues and nodemailer library for email process.

## Getting Started

To get started, clone the project and then install the dependencies:
In order to use the app you must to be with a redis service up.

```
yarn install
```

To start the app

```
yarn start
```

The cron is defined to run every minute in order to be tested.
To start the cron:

```
yarn cron
```

If you prefer to start the queue process instead of cron you can start it using the following command:

```
yarn queuue
```

To follow up the queue messages access the link below:

```
http://localhost:8080/admin/queues
```

Add a new e-mail to receive the random Bible verse.

```
curl --location 'localhost:8080/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"User",
    "email": "email@email.com"
}'
```