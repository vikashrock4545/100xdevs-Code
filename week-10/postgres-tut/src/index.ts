import { Client } from 'pg'

async function createUsersTable() {
    const client = new Client({
        connectionString: "postgresql://neondb_owner:jHKgQ4fbzL6n@ep-wandering-shape-a5fj9x1g.us-east-2.aws.neon.tech/neondb?sslmode=require"
    })
    try {
        await client.connect()
        const result = await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `)
        console.log("Table users created successfully:", result)
    } catch(err) {
        console.log("Error creating table users:", err)
    } finally {
        await client.end()
    }
}

async function createAdressesTable() {
    const client = new Client({
        connectionString: "postgresql://neondb_owner:jHKgQ4fbzL6n@ep-wandering-shape-a5fj9x1g.us-east-2.aws.neon.tech/neondb?sslmode=require"
    })
    try {
        await client.connect()
        const result = await client.query(`
            CREATE TABLE addresses (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL,
                city VARCHAR(100) NOT NULL,
                country VARCHAR(100) NOT NULL,
                street VARCHAR(255) NOT NULL,
                pincode VARCHAR(50),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `)
        console.log("Table adresses created successfully:", result)
    } catch(err) {
        console.log("Error creating table adresses:", err)
    } finally {
        await client.end()
    }
}

async function insertUsersData(username: string, email: string, password: string) {
    const client = new Client({
        // host: 'localhost',
        // port: 5432,
        // database: 'postgres',
        // user: 'postgres',
        // password: 'mysecretpassword'
        connectionString: "postgresql://neondb_owner:jHKgQ4fbzL6n@ep-wandering-shape-a5fj9x1g.us-east-2.aws.neon.tech/neondb?sslmode=require"
    })

    try {
        await client.connect()
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`
        const values = [username, email, password]
        const res = await client.query(insertQuery, values)
        console.log('Insertion successful:', res)
    } catch(err) {
        console.log('Insertion failed:', err)
    } finally {
        await client.end()
    }
}

async function insertAddressesData(user_id: string, city: string, country: string, street: string, pincode: string) {
    const client = new Client({
        // host: 'localhost',
        // port: 5432,
        // database: 'postgres',
        // user: 'postgres',
        // password: 'mysecretpassword'
        connectionString: "postgresql://neondb_owner:jHKgQ4fbzL6n@ep-wandering-shape-a5fj9x1g.us-east-2.aws.neon.tech/neondb?sslmode=require"
    })

    try {
        await client.connect()
        const insertQuery = `INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)`
        const values = [user_id, city, country, street, pincode]
        const res = await client.query(insertQuery, values)
        console.log('Insertion successful:', res)
    } catch(err) {
        console.log('Insertion failed:', err)
        throw err
    } finally {
        await client.end()
    }
}

async function getUser(email: string) {
    const client = new Client({
        // host: 'localhost',
        // port: 5432,
        // database: 'postgres',
        // user: 'postgres',
        // password: 'mysecretpassword'
        connectionString: "postgresql://neondb_owner:jHKgQ4fbzL6n@ep-wandering-shape-a5fj9x1g.us-east-2.aws.neon.tech/neondb?sslmode=require"
    })
    
    try {
        await client.connect()
        const getQuery = 'SELECT * FROM users WHERE email = $1'
        const values = [email]
        const res = await client.query(getQuery, values)
        if (res.rows.length > 0) {
            console.log("Result found:", res.rows[0])
            return res.rows[0]
        } else {
            console.log("Result not found with given email..")
            return null
        }
    } catch(err) {
        console.log("Error getting users:", err)
        throw err
    } finally {
        await client.end()
    }
}

async function getUserDetailsAndAddresses(id: string) {
    const client = new Client({
        // host: 'localhost',
        // port: 5432,
        // database: 'postgres',
        // user: 'postgres',
        // password: 'mysecretpassword'
        connectionString: "postgresql://neondb_owner:jHKgQ4fbzL6n@ep-wandering-shape-a5fj9x1g.us-east-2.aws.neon.tech/neondb?sslmode=require"
    })
    
    try {
        await client.connect()
        const getQuery = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1
        `;
        const values = [id]
        const res = await client.query(getQuery, values)
        if (res.rows.length > 0) {
            console.log("Result found:", res.rows[0])
            return res.rows[0]
        } else {
            console.log("Result not found with given id..")
            return null
        }
    } catch(err) {
        console.log("Error getting results:", err)
        throw err
    } finally {
        await client.end()
    }
}

async function updateUser(username: string, password: string, email: string) {
    const client = new Client({
        // host: 'localhost',
        // port: 5432,
        // database: 'postgres',
        // user: 'postgres',
        // password: 'mysecretpassword'
        connectionString: "postgresql://neondb_owner:jHKgQ4fbzL6n@ep-wandering-shape-a5fj9x1g.us-east-2.aws.neon.tech/neondb?sslmode=require"
    })

    try {
        await client.connect()
        const updateQuery = 'UPDATE users SET email = $1 WHERE username = $2 AND password = $3'
        const values = [email, username, password]
        const res = await client.query(updateQuery, values)
        console.log("Email updated successfully:", res)
    } catch (err) {
        console.log("Error updating:", err)
        throw err
    } finally {
        await client.end()
    }
}

// createUsersTable()
// createAdressesTable()
// insertUsersData('vikash_rock', 'vik12345@gmail.com', 'rock123').catch(console.error)
// insertAddressesData('3', 'patna', 'IN', 'patna', '818480')
// getUser('vik123456@gmail.com').catch(console.error)
// updateUser('vikash12345', 'rock123', 'vikrock@gmail.com')
getUserDetailsAndAddresses('1')