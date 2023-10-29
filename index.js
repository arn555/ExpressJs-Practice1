// (JSON-Database-Practice1)
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const { loadUser } = require('./models/userModels');

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`Node API app is running on port ${port}`);
});

app.get('/users', (request, response) => {
  response.send(loadUser());
});

app.get('/users/:id', (request, response) => {
  response.send(findUserById(request.params.id));
});

const findUserById = (id) => {
  const users = loadUser();
  const foundUser = users.find((user) => user.id === parseInt(id));
  
  if (foundUser) {
    return foundUser;
  } else {
    return 'User not found';
  }
};

