const express = require('express');
const cors = require('cors');
const sequelize =require('./util/database');
const userRouter = require('./routes/userRouter');
const companyRouter = require('./routes/companyRouter');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
  next();
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/company', companyRouter);

(async () => {
  try {
    await sequelize.sync({ force: true });
    app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}/`));
  } catch (error) {
    console.log(error);
  }
})();