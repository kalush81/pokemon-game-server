const express = require('express');
// const corsMiddleware =  require('cors');

const playerRouter = require('./player/router');
// const imageRouter = require('./image/router');
// const authRouter = require('./auth/router');

// const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json()

const port = process.env.PORT || 4000

const app = express();

// app.use(corsMiddleware());
// app.use(jsonParser);
app.use(playerRouter);
// app.use(authRouter);
// app.use(imageRouter);

app.listen(port, () => console.log(`i am working on ${port}`))