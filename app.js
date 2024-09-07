

const express = require('express');
const morgan = require('morgan');
const app = express();


const requestLogger = (req, res, next) => {
  const { method, url, ip } = req;
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);
  

  next();
};

app.use(requestLogger);


app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.send('Hello, world!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
