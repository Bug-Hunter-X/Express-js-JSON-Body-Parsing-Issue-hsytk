const express = require('express');
const app = express();

// MUST be placed BEFORE routes that expect JSON bodies
app.use(express.json());

app.post('/users', (req, res) => {
  // Check if the request body is valid JSON
  if (!req.body) {
    return res.status(400).send({ error: 'Invalid JSON request body' });
  }
  const newUser = req.body; 
  // Validate newUser data - Add validation here
  if(!newUser.name || !newUser.email){
    return res.status(400).send({error: 'Missing required fields'});
  }
  // ... process newUser ...
  res.status(201).send(newUser);
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});