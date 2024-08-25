# Quiz app backend


### Run locally

To run application locally you should run mongo locally in a separate terminal

```shell
  brew services start mongodb-community@7.0
```

**Don't forget to stop process:**

```shell
  brew services stop mongodb-community@7.0
```

After running you should create quiz-app database locally and then run backend in development mode:

```shell
npm run dev
```
