import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import pageRoutes from './routes';
import sequelize from './utils/database';
import './models';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('', pageRoutes);

// sequelize.sync({ force: true }).then(() => {
//   console.log('sync db success');
// });
sequelize
  .authenticate()
  .then(() => {
    console.log('connection success');
    app.listen(3000, () => console.log('server is running on port: ', 3000));
  })
  .catch((e) => {
    console.log(e);
  });
