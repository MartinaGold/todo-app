export async function removeTodoItems(data: any) {
  console.log('data: ', data);
  const result = await fetch('http://localhost:3001/todo-items', {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data)
  });
  console.log('result: ', result);
  assertResponse(result);

  return result.status;
}

function assertResponse(result: any) {
  if (result.status !== 200) {
    throw new Error(`Expected 200 but got ${result.status} while removing todo items. Body was ${result.body}`);
  }
}
