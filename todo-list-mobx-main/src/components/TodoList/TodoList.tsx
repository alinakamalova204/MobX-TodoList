import './index.css'
import { Observer } from 'mobx-react-lite';
import { useStore } from '../../stores/use-store';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = () => {
  const todoList = useStore();

  return (
      <Observer>
        {() => (
            <div className="todo-list">
                {todoList.openTodos.length > 0 && (
                    <div className="open-todos">
                        <span>Невыполненные задачи</span>
                        {todoList.openTodos.map((todo) => (
                            <TodoItem key={`${todo.id}-${todo.text}`} todo={todo}/>
                        ))}
                    </div>
                )}

                {todoList.openTodos.length === 0 && (
                    <div className="open-todos">
                        <span>Задач пока нет</span>
                    </div>
                )}

                {todoList.finishedTodos.length > 0 && (
                  <div className="finished-todos">
                    <span>Завершенные Задачи</span>
                    {todoList.finishedTodos.map((todo) => (
                        <TodoItem key={`${todo.id}-${todo.text}`} todo={todo}/>
                    ))}
                  </div>
              )}
            </div>
        )}
      </Observer>
  )
}

