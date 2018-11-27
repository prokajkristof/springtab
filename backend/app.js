const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/helloworld', (req, res) => {
    res.send(
        {message: 'ezigen'}
    );
});

app.get('/secondroute', (req, res) => {
    res.send(
        {message: 'success'}
    )
});

app.listen(port, () => console.log(`App listening on port ${port}!`))