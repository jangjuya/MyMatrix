const compression = require('compression');
const cors = require("cors");
const { indexRouter } = require("./src/router/indexRouter");
const { userRouter } = require("./src/router/userRouter");

const express = require('express');
const app = express();
const port = 3000;

// 정적파일 제공
app.use(express.static(front));

app.use(cors());

app.use(express.json());

app.use(compression());

indexRouter(app);
userRouter(app);

app.listen(port, () => {
    console.log(`Express app listening at port: ${port}`)
})