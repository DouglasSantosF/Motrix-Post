const express = require('express');

const app = express();
app.use(express.json());

const PORT = 3002;

app.listen(PORT, () => console.log(`ouvindo a porta ${PORT}`));