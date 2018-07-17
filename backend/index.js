const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/api/status', (req, res) => { return res.json({status: 'ok'}) })

app.post('/api/capitalize', (req, res) => {
    if (!req.body.text || req.body.text.length === 0) {
        res.status(500);
        return res.json({ message:'We can\'t uppercase an empty statement' })
    }

    const uppercase = req.body.text.toUpperCase()
    return res.json({text: uppercase}) 
})

app.use('*', (req, res) => {
    res.status(404)
    return res.json({message: 'not found'})
})

app.listen(3000, () => { console.log('app is running on port 3000') })
