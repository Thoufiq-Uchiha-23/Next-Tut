async function getAllTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
}

const TodosPage = async () => {
  const todos = await getAllTodos();
  console.log(todos)
  return (
    <div>
      <h1 className="text-4xl font-bold">I am a Todo Page</h1>
      {/* <p>{JSON.stringify(todos)}</p> */}
      <div className="grid grid-cols-3 gap-4">
      {
        todos && Array.isArray(todos) && todos.map((todo) => (
          <div key={todo.id} className="border rounded-lg p-5 text-xl mt-2 shadow-lg">
            <h1>{todo.title}</h1>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default TodosPage;
