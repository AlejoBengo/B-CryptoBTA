require('dotenv').config();
const server = require('./app');
const { PORT } = process.env;

server.listen(PORT, () => {
   console.log(`Server raised successfully in port ${PORT}.`);
});
