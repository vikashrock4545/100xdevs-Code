const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())


app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const response = a + b
    res.send(response.toString())
});
app.get('/interest', (req, res) => {
    const p = parseFloat(req.query.p)
    const r = parseFloat(req.query.r)
    const t = parseFloat(req.query.t)
    const interest = (p*r*t)/100
    const total = p + interest
    res.json({
        total,
        interest,
    })
})
app.listen(3000)
