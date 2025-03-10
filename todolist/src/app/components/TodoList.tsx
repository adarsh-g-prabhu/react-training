interface Todo {
    _id: string;
    task: string;
    completed: boolean;
  }
  
  interface TodoListProps {
    todos: Todo[];
    onRemoveTodo: (id: string) => Promise<void>;
  }
  
  export default function TodoList({ todos, onRemoveTodo }: TodoListProps) {
    return (
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="flex justify-between p-2 bg-gray-100 dark:bg-gray-800 rounded">
            {todo.task}
            <button
              onClick={() => onRemoveTodo(todo._id)}
              className="text-red-500 font-bold"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    );
  }
  