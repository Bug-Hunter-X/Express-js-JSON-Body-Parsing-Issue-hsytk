const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const newUser = req.body; 
  // ... process newUser ...
  res.status(201).send(newUser);
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});