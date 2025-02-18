const BASE_URL = 'http://localhost:3000';

export type TTodo = {
  done: boolean,
  text: string,
  id: number,
}

export async function getTodos(): Promise<Array<TTodo>> {
  return fetch(`${BASE_URL}/api/todos`).then(r => r.json());
}

export async function getTodo(id: number|string): Promise<TTodo> {
  return fetch(`${BASE_URL}/api/todos/${id}`).then(r => r.json());
}

export async function createTodo(text: string): Promise<TTodo> {
  return fetch(`${BASE_URL}/api/todos`, {
    method: 'POST',
    body: JSON.stringify({text}),    
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(r => r.json());
}

export async function updateTodo(todo: TTodo): Promise<TTodo> {
  return fetch(`${BASE_URL}/api/todos/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),    
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(r => r.json());  
}

export async function deleteTodo(id: number): Promise<number> {
  return fetch(`${BASE_URL}/api/todos/${id}`, {
    method: 'DELETE',
  }).then(r => r.status);
}