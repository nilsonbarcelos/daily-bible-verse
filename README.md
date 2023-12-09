# daily-bible-verse
Simple project using a cron and a queue process to send email with a Bible verse provided by an rest API.

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