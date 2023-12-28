// const express = require('express');
// const app = express();

// app.get('/health-checkup', (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if(username !='rock' || password != 'pass123') {
//         res.status(400).json({msg: 'Invalid username or password'});
//         return
//     }

//     if(kidneyId != 1 && kidneyId != 2) {
//         res.status(400).json({msg: 'wrong kidney input'});
//         return
//     }

//     res.json({
//         msg: "Kidney is doing fine"
//     })
// })

// app.listen(3000);

// -->> Now using the middleware perform the above logic

const express = require('express');
const app = express();
let count = 0;
let totalTime = 0;

function counter(req, res, next) {
    count++; 
    console.log("Total Number of requests: " + count);
    next();
}

function responseTime(req, res, next) {
    const start = Date.now()

    res.on('finish', function() {
        const end = Date.now()
        totalTime += end - start
        const averageTime = totalTime / count
        console.log("Request number " + count + " takes " + (end - start) + " milliseconds")
        if(!count) {
            console.log("No requests yet!")
        } else {
            console.log("Average response taken for " + count + " requests is " + averageTime.toFixed(2) +  " milliseconds")
        }
    })
    next()
}

app.use(counter);
app.use(responseTime)

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != 'rock' || password != 'pass@123') {
        res.status(403).json({
            message: "Wrong credentials"
        });
    } else {
        next();
    }
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
                message: 'wrong kidney id'
        });
    } 
    else {
        next();
    }
}

app.get('/health-checkup', userMiddleware, (req, res) => {
    res.json({
        message: 'Good health, cheers!!!'
    });
})

app.get('/kidney-checkup', userMiddleware, kidneyMiddleware, (req, res) => {
    res.json({
        message: 'Good kidney, cheers!!!',
    });
})

app.listen(3000)

// --->>>>>>>> now input validation.

// const express = require('express');
// const zod = require('zod')
// const app = express();

// const mySchema = zod.array(zod.number());
/*
If we have to create a object schema:
email, 
password,
country: IN or US
*/

// const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(5),
//     country: zod.literal("IN").or(zod.literal("US"))
// })

// app.use(express.json());

// app.post('/health-checkup', (req, res) => {
//     const kidneys = req.body.kidneys;
//     const response = mySchema.safeParse(kidneys);

//     if(response.success) {
//         res.json({
//             response: response.data
//         })
//     } else {
//         res.status(411).json({
//             msg: "wrong input"
//         })
//     }
// })

// app.post('/login-validate', (req, res) => {
//     const obj = req.body.obj;
//     console.log(obj)
//     const response = schema.safeParse(obj);
//     res.send({
//         response
//     })
// })

// global catches (if something wrong happens, we don't want to expose our error message to client)
// app.use(function(err, req, res, next) {
//     res.status(500).json({
//         msg: "Something wrong happened with server."
//     })
// })

// app.listen(3000);