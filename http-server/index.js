// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// const port = 3000
// app.use(bodyParser.json())
// app.get('/', function(req, res) {
//   res.send('Hello World! Rock')
// })

// app.get('/api/', function(req, res) {
//   console.log(req)
//   res.json({
//     name: "rock",
//     age: 21
//   })
// })

// app.post('/conversation/', function(req, res) {
//   console.log(req.body)
//   setTimeout(function() {
//   res.status(300).send('<b>Hello World!</b>')
//   }, 5000);
// })

// app.listen(port, function() {
//   console.log(`Example app listening on port ${port}`)
// })

// const express = require('express');
// const app = express();

// function calculateSum(a, b) {
//   return parseInt(a) + parseInt(b);
// }

// app.get('/', function(req, res) {
//   const a = req.query.a;
//   const b = req.query.b;
//   const ans = calculateSum(a, b);
//   res.send(ans.toString());
// })

// app.listen(3000)

// Let's create in memory hospital http server
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const users = [{
  name: 'John',
  kidneys: [{
    healthy: false,
  }]
}]

app.get('/', (req, res) => {
  const numberOfKidney = users[0].kidneys.length;
  let numberOfUnhealthyKidney = 0;
  for(let i = 0; i < numberOfKidney; i++) {
    if(!users[0].kidneys[i].healthy) numberOfUnhealthyKidney++;
  }
  const numberOfHealthyKidney = numberOfKidney - numberOfUnhealthyKidney;
  res.json({
    numberOfKidney,
    numberOfHealthyKidney,
    numberOfUnhealthyKidney
  })
})

app.post('/', (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg: "Done"
  })
})

app.put('/', (req, res) => {
  let numberOfUnhealthyKidney = 0;
  for(let i=0; i<users[0].kidneys.length; i++){
    if(!users[0].kidneys[i].healthy) {
      numberOfUnhealthyKidney = numberOfUnhealthyKidney + 1;
    }
  }
  if(numberOfUnhealthyKidney) {
    for(let i=0; i<users[0].kidneys.length; i++){
      users[0].kidneys[i].healthy = true;
    }
    res.json({
      msg: "Done"
    })
  } else {
    res.json({
      msg: "No unhealthy kidney"
    })
  }
})

app.delete('/', (req, res) => {
  const newKidney = [];
  let toDeleteKidney = 0;
  for(let i=0; i<users[0].kidneys.length;i++) {
    if(!users[0].kidneys[i].healthy) {
      toDeleteKidney = toDeleteKidney + 1;
    }
  }

  if(toDeleteKidney) {
    for(let i=0; i<users[0].kidneys.length;i++) {
      if(users[0].kidneys[i].healthy) {
        newKidney.push({
          healthy: true,
        })
      }
    }
    users[0].kidneys = newKidney;
    res.json({
      msg: "Done"
    })
  } else {
    res.json({
      msg: "No kidney found worth deleting"
    })
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});