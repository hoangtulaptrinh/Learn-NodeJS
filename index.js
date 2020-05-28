import express from 'express';
import bodyParser from 'body-parser';
import find from 'lodash/find';
import mongoose from 'mongoose';

import useRoutes from './routes/user';

import UserModel from './models/user.model';
import FamilyModel from './models/family.model';

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost/Express_Demo', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/users', useRoutes);

app.use(express.static('public')); //thông báo rằng lưu trữ các file static đc lưu ở trong public
//http://localhost:5000/images/anime.png  truy cập vào url này sẽ thấy ảnh

//

UserModel.find()
  .then((users) =>
    app.get('/test_user_model', (req, res) => {
      res.send(users);
    }),
  )
  .catch((err) => console.log(err));

FamilyModel.find()
  .then((users) =>
    app.get('/test_family_model', (req, res) => {
      res.send(users);
    }),
  )
  .catch((err) => console.log(err));

// UserModel.create({ name: 'huan' }, function (err, small) {
//   if (err) return console.log(err);
//   // saved!
// });
// UserModel.deleteOne({ _id: '5ecf88337807794973d47688' }, function (err) {
//   if (err) return console.log(err);
//   // deleted at most one UserModel document
// });
// UserModel.updateOne({ _id: '5ecf8acbfbc2184d6010bc5b' }, { name: 'T-90' }, function (err, res) {
//   // Updated at most one doc, `res.modifiedCount` contains the number
//   // of docs that MongoDB updated
// });

// FamilyModel.create(
//   {
//     name: 'Family 1',
//     member: {
//       name: 'duong',
//       role: 'son',
//     },
//   },
//   function (err, small) {
//     if (err) return console.log(err);
//     // saved!
//   },
// );
// FamilyModel.deleteOne({ _id: '5ecfa18cd18d4a194da693fa' }, function (err) {
//   if (err) return console.log(err);
//   // deleted at most one FamilyModel document
// });
// FamilyModel.updateOne({ _id: '5ecf8acbfbc2184d6010bc5b' }, { name: 'T-90' }, function (err, res) {
//   // Updated at most one doc, `res.modifiedCount` contains the number
//   // of docs that MongoDB updated
// });

//
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
