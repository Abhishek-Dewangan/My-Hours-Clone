const express = require('express');
const fs = require('fs');
const mongodb = require('mongodb');
const cors = require('cors');
const Team = require('./project/route/teamRoute.js');
const app = express();
const clientRouter = require('./project/route/clientsRoute');
const authRouter = require('./Routes/auth.routes');
require('dotenv').config();
const PORT = process.env.PORT || 4040;
const UserModel = require('./Models/User.auth');
const {connection} = require('./project/database/teamMember');
const {application} = require('express');
const user = require('./Routes/user.js');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
//  app.use("/users",user)
app.use('/', authRouter);
app.use('/client', clientRouter);
app.use('/teamMember', Team);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log('connection to db');
  } catch {
    console.log('failled');
  }
  console.log('server starting');
});
