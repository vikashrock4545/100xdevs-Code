// // let  x: number = 1
// // console.log(x)

// function greet(greet: string) {
//     console.log("Hello " + greet)
// }

// greet("Vikash")

// function sum(a: number, b: number): number {
//     return a + b
// }

// console.log(sum(1, 2))
// console.log(sum(1, 3))

// function isLegal(age: number): boolean {
//     return age >= 18
// }

// console.log(isLegal(12))
// console.log(isLegal(19))

// function runAfter1s(fn: () => void) {
//     setTimeout(fn, 1000)
// }

// runAfter1s(() => {
//     console.log("Hello afer 1 seconds!")
// })

// // This is hello function.
// const hello = () => {
//     console.log("Hello")
// }

// interface User {
//     firstName: string,
//     lastName: string,
//     age: number
//     email?: string // this is optional.
// }

// function isLegal(user: User) {
//     return user.age > 18
// }

// console.log(isLegal({
//     firstName: "Vikash",
//     lastName: "Rock",
//     age: 11
// }))

// interface Person {
//     name: string,
//     age: number,
//     greet(phrase: string): void
// }

// class Employee implements Person {
//     name: string
//     age: number

//     constructor(n: string, a:number) {
//         this.name = n
//         this.age = a
//     }
//     greet(phrase: string): void {
//         console.log(`${phrase} ${this.name}`)
//     }
// }

// const e = new Employee("vikash", 22)
// console.log(e.age)
// console.log(e.name)
// e.greet("heloooooo")

// type User = {
//     firstName: string,
//     lastName: string,
//     age: number
// }

// type Employee = {
//     name: string,
//     startDate: Date
// }

// type Manager = {
//     name: string,
//     department: string
// }


// type TeamLead = Employee & Manager

// const teamLead: TeamLead =  {
//     name: "Vikash",
//     startDate: new Date(),
//     department: "Tech",
// }


// type stringOrNumber = string | number

// function Id(id: stringOrNumber) {
//     console.log(`${id}`)
// }

// Id(101)
// Id("101")

// function Maxm(num: number[]) {
//     let maxm = 0
//     for (let i = 0; i < num.length; i++) {
//         maxm = Math.max(maxm, num[i])
//     }
//     return maxm
// }

// console.log(Maxm([1, 3, 5, 2, 8]))

// interface User {
//     firstName: string,
//     lastName: string,
//     age: number
// }

// function filterUser(users: User[]) {
//     return users.filter(user => user.age > 18)
// }


// console.log(filterUser([{
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 23
// }, {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 21
// }]))

type keyPressed = "up" | "down" | "left" | "right"

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

function doSomething(key: Direction) {
    console.log("Key pressed: " + key)
}

doSomething(Direction.Down)
doSomething(Direction.Left)


