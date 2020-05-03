import express from 'express';
import bodyParser from 'body-parser';
import find from 'lodash/find';

import useRoutes from './routes/user';

const app = express();
const port = 8080;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/users', useRoutes);

app.use(express.static('public')); //thông báo rằng lưu trữ các file static đc lưu ở trong public
//http://localhost:8080/images/anime.png  truy cập vào url này sẽ thấy ảnh

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
