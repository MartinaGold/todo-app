export function handleTodoList(req: any, res: any): any {
  res.json([
    {id: 1, task: 'Vacuuming'},
    {id: 2, task: 'Washing dishes'},
    {id: 3, task: 'Feeding pets'},
    {id: 4, task: 'Preparing meals'},
    {id: 5, task: 'Doing laundry'},
    {id: 6, task: 'Sweeping'},
    {id: 7, task: 'Dusting'},
  ]);
}

export function deleteTodoItems(req: any, res: any): any {
  res.send('Got a DELETE request at /user')
}