// interface User {
//     name: string;
//     age: number;
// }

// function sumOfAge(user1: User, user2: User): number {
//     return user1.age + user2.age;
// }

// const result = sumOfAge({
//     name: "John",
//     age: 22
// }, {
//     name: "Rahul",
//     age: 21
// })

// console.log(result)

// interface User {
//     id: string;
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// }

// type UpdateProps = Pick<User, 'name' | 'email' | 'password'>
// type UpdatePropsOptional = Partial<UpdateProps>

// function updateUser(updateProps: UpdateProps) {
//     console.log(`Name: ${updateProps.name}, Email: ${updateProps.email}`)
// }

// function updateUserOpt(updateProps: UpdatePropsOptional) {
//     console.log(`Name: ${updateProps.name}, Email: ${updateProps.email}`)
// }

// updateUser({
//     name: 'John',
//     email: 'john',
//     password: 'password'
// })

// updateUserOpt({
//     name: 'John',
//     email: 'john',
//     // password: 'password'
// })

// interface Config {
//     readonly apiEndpoint: string;
//     readonly apiKey: string;
// }

// const config: Config = {
//     apiEndpoint: 'http://localhost:3000',
//     apiKey: 'password'
// }

// config.apiEndpoint = 'http://localhost:4000'

// UGLY SYNTAX

// interface User {
//     id: string;
//     name: string;
// }

// type Users = {[key: string]: User}

// const users: Users = {
//     '1': {
//         'id': '1',
//         name: 'rock'
//     },
//     '2': {
//         'id': '2',
//         name: 'vikash'
//     }
// }
// users['1'].name = 'vik'
// console.log(users['1'])

// CLEANER SYNTAX

// interface User {
//     id: string;
//     name: string;
// }

// type Users = Record<string, User>

// const users: Users = {
//     '1': {id: '1', name: 'vikash'}
// }
// console.log(users['1'])

// USING MAPS

// interface User {
//     id: string;
//     name: string;
// }

// const userMap = new Map<string, User>()
// userMap.set('1', {id: '1', name: 'vikash'})
// console.log(userMap.get('1'))

type Eventt = 'create' | 'update' | 'delete'
type ExcludeEvent = Exclude<Eventt, 'delete'>

function check(excludeEvent: ExcludeEvent) {
    console.log(excludeEvent)
}
check('create')

