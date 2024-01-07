// const express = require('express');
// const jwt = require('jsonwebtoken');
// const jwtPassword = "123456";

// const app = express();
// app.use(express.json())

// const ALL_USERS = [
//     {
//         username: "Vikash",
//         password: "123",
//         name: "Vikash Rock"
//     },
//     {
//         username: "Rohit",
//         password: "1234",
//         name: "Rohit Rock"
//     },
//     {
//         username: "Ritika",
//         password: "12345",
//         name: "Ritika"
//     }
// ]

// function userExists(username, password) {
//     for (let i = 0; i < ALL_USERS.length; i++) {
//         if (ALL_USERS[i].username === username && ALL_USERS[i].password === password) {
//             return true;
//         }
//     }
//     return false;
// }

// app.post('/signin', (req, res) => {
//     const username = req.body.username
//     const password = req.body.password
    
//     if(!userExists(username, password)) {
//         return res.status(403).json({
//             msg: "User does not exist in our DB"
//         });
//     }

//     var token = jwt.sign({ username: username}, jwtPassword)
//     return res.json({
//         token,
//     });
// });

// app.get('/users', (req, res) => {
//     const token = req.headers.authorization
//     try {
//         const token = req.headers.authorization
//         const decoded = jwt.verify(token, jwtPassword)
//         const username = decoded.username
//         res.json({
//             users: ALL_USERS.filter(function(value) {
//                 if(value.username == username) {
//                     return false
//                 }
//                 return true
//             })
//         })

//     } catch (err) {
//         return res.status(403).json({
//             msg: "Invalid Token",
//         });
//     }
// });

// app.listen(3000)

// Now with mongoDB integration

// const express = require('express');
// const jwt = require('jsonwebtoken');
// const jwtPassword = "123456";
// const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://vikashr4545:<password>@cluster0.wh0eb0p.mongodb.net/")
// const Users = mongoose.model("User", {
//     name: String,
//     username: String,
//     password: String
// })

// const app = express();
// app.use(express.json())

// function userExists(username, password) {
    
// }

// app.post('/signin', (req, res) => {
//     const username = req.body.username
//     const password = req.body.password
    
//     if(!userExists(username, password)) {
//         return res.status(403).json({
//             msg: "User does not exist in our DB"
//         });
//     }

//     var token = jwt.sign({ username: username}, jwtPassword)
//     return res.json({
//         token,
//     });
// });

// app.get('/users', (req, res) => {
//     const token = req.headers.authorization
//     try {
//         const token = req.headers.authorization
//         const decoded = jwt.verify(token, jwtPassword)
//         const username = decoded.username
//         res.json({
//             users: ALL_USERS.filter(function(value) {
//                 if(value.username == username) {
//                     return false
//                 }
//                 return true
//             })
//         })

//     } catch (err) {
//         return res.status(403).json({
//             msg: "Invalid Token",
//         });
//     }
// });

// app.listen(3000)

const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vikashr4545:<password>@cluster0.wh0eb0p.mongodb.net/newuser');

const app = express();
app.use(express.json())

const User = mongoose.model('Users', { 
    name: String,
    username: String,
    password: String
});

app.post('/signup', async function(req, res) {
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name
    
    // CRUD operation.
    // check if the user is already authenticated
    const isUsernameExist = await User.findOne({username: username});
    if(isUsernameExist) {
        res.status(400).send('Username already exists')
    }

    const user = new User({ 
        name: name,
        username: username,
        password: password
    });
    user.save()
    res.json({
        msg: 'User saved successfully'
    })
});

// const User = mongoose.model('User', { 
//     name: String,
//     email: String,
//     password: String
//  });

// const user = new User({ 
//     name: 'Zildjian',
//     email: 'zildjian@gmail',
//     password: 'zildjian@gmail.com'
// });

// user.save()
app.listen(3000)
