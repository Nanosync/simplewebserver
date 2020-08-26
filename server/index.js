const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors())
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send("Hello from the server!");
});

app.listen(port, () => console.log(`Server listening on ${port}`));