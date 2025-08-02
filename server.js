

const app = require('./app'); // Import from full Express app
const PORT = 3000;

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});