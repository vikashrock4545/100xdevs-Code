const express = require('express')
const axios = require('axios')

// async function main() {
//     const response = await fetch("http://localhost:3000/todos")
//     const json = await response.json()
//     console.log(json.todos.length)
// }

// async function main() {
//     const response = await axios.get("http://localhost:3000/todos")
//     console.log(response)
// }

// testing http using http dump.
// async function main() {
//     axios.post(
//         "https://httpdump.app/dumps/9bb4cdaf-c0e1-4db0-bd54-700b25630eef?a=b&b=c", 
//         {
//             username: "vikash",
//             password: "rock123"
//         }, 
//         {
//             headers: {
//                 authorization: "Bearer 123"
//             }
//         }
//     )
// }

// cleaner way to write the above code.

async function main() {
    await axios(
        {
            method: "POST",
            url: "https://httpdump.app/dumps/9bb4cdaf-c0e1-4db0-bd54-700b25630eef?a=b&b=c&c=t",
            headers: {
                authorization: "Bearer 12345"
            },
            data: {
                username: "vikash",
                password: "rock12345"
            }
        }
    )
}

main()