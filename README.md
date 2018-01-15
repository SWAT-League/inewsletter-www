# iNewsLetter



## QuickStart
Install Posgres ver: 10.1

initdb:

    pg_ctl initdb -D /path/to/pg_data/inewsletter_db

start db:

    pg_ctl -D /path/to/pg_data/inewsletter_db -l /path/to/pg_log/pg.log start


### Development

```bash
$ npm i
$ npm run dev
$ npm run migrate:up
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.
