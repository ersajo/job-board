const express = require('express');
const cors = require('cors');
const sequelize =require('./util/database');
const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');

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
app.use('/api/v1/auth', authRouter);

(async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}/`));
  } catch (error) {
    console.log(error);
  }
})();