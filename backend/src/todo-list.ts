const pool = require('../database/todo-items')
export async function handleTodoList(req: any, res: any): Promise<any> {
  try {
    const sqlQuery = 'Select * FROM tasks';
    const rows = await pool.query(sqlQuery);
    res.send(rows)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}

export function deleteTodoItems(req: any, res: any): any {
  res.send('Got a DELETE request at /user')
}