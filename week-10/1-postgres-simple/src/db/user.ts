import { client } from "..";

/*
 * Should insert into the users table
 * Should return the inserted User object
 * {
 *   id: number,
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
  try {
    const createQuery = `INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *`;
    const values = [username, password, name];
    const result = await client.query(createQuery, values);
    return result.rows[0]; // Return the inserted user object
  } catch (error) {
    throw new Error('Error during user creation: ' + error); // Throw the error for proper error handling
  }
}

/*
 * Should return the User object by ID
 * {
 *   id: number,
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  try {
    const selectQuery = `SELECT * FROM users WHERE id = $1`;
    const values = [userId];
    const result = await client.query(selectQuery, values);
    return result.rows[0]; // Return the retrieved user object
  } catch (error) {
    throw new Error('Error during user retrieval: ' + error); // Throw the error for proper error handling
  }
}
