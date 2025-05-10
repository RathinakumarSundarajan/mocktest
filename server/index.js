const app = require('./app');
require('dotenv').config({ path: './config/.env' });

// const port = 9000;

// Start the server
const port = process.env.PORT || 8000; // Use process.env.PORT or default to 8000


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

