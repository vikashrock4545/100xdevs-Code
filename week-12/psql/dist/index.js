"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://psql-tut_owner:iPRxW4Np8yvX@ep-sparkling-haze-a53ik510.us-east-2.aws.neon.tech/psql-tut?sslmode=require"
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const result = yield client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
            console.log(result);
        }
        catch (e) {
            console.log(`Error creating table`, e);
        }
        finally {
            yield client.end();
        }
    });
}
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const result = yield client.query(`
            INSERT INTO users (username, email, password)
            VALUES ('username', 'user@example.com', 'user_password');
        `);
            console.log(result);
        }
        catch (e) {
            console.log(`Error inserting data`, e);
        }
        finally {
            yield client.end();
        }
    });
}
// More securely way to insert data to avoid SQL injection.
function insertDataS(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const insertQuery = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
            const value = [username, email, password];
            const result = yield client.query(insertQuery, value);
            console.log(result);
        }
        catch (e) {
            console.log(`Error inserting data`, e);
        }
        finally {
            yield client.end();
        }
    });
}
function getUsers(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const getQuery = 'SELECT * FROM users WHERE email = $1';
            const value = [email];
            const result = yield client.query(getQuery, value);
            if (result.rows.length > 0) {
                console.log('User found:', result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log('No user found with the given email.');
                return null;
            }
        }
        catch (err) {
            console.log(`Error getting data`, err);
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
function updateData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const result = yield client.query(`
            UPDATE users SET username = 'new_username' WHERE id = 1;
        `);
            console.log(result);
        }
        catch (e) {
            console.log(`Error updating data`, e);
        }
        finally {
            yield client.end();
        }
    });
}
function insertUserAndAddress(username, email, password, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            yield client.query('BEGIN');
            const insertUserText = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id;
        `;
            const userRes = yield client.query(insertUserText, [username, email, password]);
            const userId = userRes.rows[0].id;
            const insertAddressText = `
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
        `;
            yield client.query(insertAddressText, [userId, city, country, street, pincode]);
            yield client.query('COMMIT');
            console.log('User and address inserted successfully');
        }
        catch (err) {
            yield client.query('ROLLBACK');
            console.error('Error during transaction, rolled back.', err);
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
// createUsersTable()
// insertData()
// insertDataS('vikash', 'vikash@km.com', 'vikashrock')
// updateData()
// getUsers('vikash@km.com')
insertUserAndAddress('johndoe1', 'john.doe1@example.com', 'securepassword123', 'New York', 'USA', '123 Broadway St', '10001');
