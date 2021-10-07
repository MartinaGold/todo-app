export async function getTodoList() {
  const result = await fetch('http://localhost:3001/todo-list', {
    headers: {
      'content-type': 'application/json',
    },
    method: 'GET',
  });
  assertResponse(result);

  return result.json();
}

function assertResponse(result: any) {
  if (result.status !== 200) {
    throw new Error(`Expected 200 but got ${result.status} while fetching a todo list. Body was ${result.body}`);
  }
}
