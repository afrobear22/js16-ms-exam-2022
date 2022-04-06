const config = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const poc = require('./handlers/poc');

const api = express();

api.use(express.json());

api.get('/api/portable-computer', poc.getAll);
api.post('/api/portable-computer', poc.create);
api.get('/api/portable-computer/:id', poc.getOne);
api.put('/api/portable-computer/:id', poc.update);
api.patch('/api/portable-computer/:id', poc.updatePartial);
api.delete('/api/portable-computer/:id', poc.remove);

api.listen(config.get('service').port, err => {
    if (err) return console.log(err);
    return console.log(`Server started on port ${config.get('service').port}`)
})