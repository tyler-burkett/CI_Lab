var express = require('express')
var app = express()

// The code below will display 'Hello World!' to the browser when you go to http://localhost:3000
app.get('/', (req, res) => {
    // the .status(200) isn't necessary since it is the default return status
    res.status(200).send('Hello World!')
})

// The code below will display 'Hello World 2!' to the browser when you go to http://localhost:3000/2
app.get('/2', (req, res) => {
    // the .status(200) isn't necessary since it is the default return status
    res.status(200).send('Hello World 2!')
})

app.listen(3000, () => {
    console.log('Example app listening on http://localhost:3000')
})

module.exports = app;