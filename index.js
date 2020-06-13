const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('novo em aws com docker-compose ola mundo!'));

app.listen(3000);
