import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://psql-tut_owner:iPRxW4Np8yvX@ep-sparkling-haze-a53ik510.us-east-2.aws.neon.tech/psql-tut?sslmode=require"
})

async function createUsersTable() {
    try {
        await client.connect()
        const result = await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `)
        console.log(result)
    } catch (e) {
        console.log(`Error creating table`, e)
    } finally {
        await client.end()
    }
}

async function insertData() {
    try {
        await client.connect()
        const result = await client.query(`
            INSERT INTO users (username, email, password)
            VALUES ('username', 'user@example.com', 'user_password');
        `)
        console.log(result)
    } catch (e) {
        console.log(`Error inserting data`, e)
    } finally {
        await client.end()
    }
}

// More securely way to insert data to avoid SQL injection.
async function insertDataS(username: string, email: string, password: string) {
    try {
        await client.connect()
        const insertQuery = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)'
        const value = [username, email, password]
        const result = await client.query(insertQuery, value)
        console.log(result)
    } catch (e) {
        console.log(`Error inserting data`, e)
    } finally {
        await client.end()
    }
}

async function getUsers(email: string) {
    try {
        await client.connect()
        const getQuery = 'SELECT * FROM users WHERE email = $1';
        const value = [email]
        const result = await client.query(getQuery, value)

        if (result.rows.length > 0) {
            console.log('User found:', result.rows[0]);
            return result.rows[0];
        } else {
            console.log('No user found with the given email.');
            return null;
        }
    } catch (err) {
        console.log(`Error getting data`, err)
        throw err
    } finally {
        await client.end()
    }
}

async function updateData() {
    try {
        await client.connect()
        const result = await client.query(`
            UPDATE users SET username = 'new_username' WHERE id = 1;
        `)
        console.log(result)
    } catch (e) {
        console.log(`Error updating data`, e)
    } finally {
        await client.end()
    }
}

async function insertUserAndAddress(
    username: string, 
    email: string, 
    password: string, 
    city: string, 
    country: string, 
    street: string, 
    pincode: string
) {

    try {
        await client.connect();
        await client.query('BEGIN');

        const insertUserText = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id;
        `;
        const userRes = await client.query(insertUserText, [username, email, password]);
        const userId = userRes.rows[0].id;

        const insertAddressText = `
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
        `;
        await client.query(insertAddressText, [userId, city, country, street, pincode]);

        await client.query('COMMIT');

        console.log('User and address inserted successfully');
    } catch (err) {
        await client.query('ROLLBACK');
        console.error('Error during transaction, rolled back.', err);
        throw err;
    } finally {
        await client.end(); 
    }
}

// createUsersTable()
// insertData()
// insertDataS('vikash', 'vikash@km.com', 'vikashrock')
// updateData()
// getUsers('vikash@km.com')
insertUserAndAddress(
    'johndoe1', 
    'john.doe1@example.com', 
    'securepassword123', 
    'New York', 
    'USA', 
    '123 Broadway St', 
    '10001'
);