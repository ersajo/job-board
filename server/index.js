const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const sequelize =require('./util/database');
const userRouter = require('./routes/userRouter');
const companyRouter = require('./routes/companyRouter');
const jobRouter = require('./routes/jobRouter');
const applicationRouter = require('./routes/applicationRouter');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
  next();
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/company', companyRouter);
app.use('/api/v1/jobs', jobRouter);
app.use('/api/v1/applications', applicationRouter);

(async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}/`));
  } catch (error) {
    console.log(error);
  }
})();