import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
  try {
    const createQuery = `INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *`;
    const values = [userId, title, description];
    const res = await client.query(createQuery, values);
    return res.rows[0];
  } catch (error) {
    throw new Error('Error during todo creation: ' + error);
  }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  try {
    const updateQuery = `UPDATE todos SET done = true WHERE id = $1 RETURNING *`;
    const values = [todoId];
    const res = await client.query(updateQuery, values);
    return res.rows[0];
  } catch (error) {
    throw new Error('Error during todo update: ' + error);
  }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  try {
    const selectQuery = `SELECT * FROM todos WHERE user_id = $1`;
    const values = [userId];
    const result = await client.query(selectQuery, values);
    return result.rows;
  } catch (error) {
    throw new Error('Error during todo retrieval: ' + error); // Throw the error for proper error handling
  }
}