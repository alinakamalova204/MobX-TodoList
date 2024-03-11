import './index.css'
import { useCallback, useState } from 'react';
import TodoItemModel from '../../stores/TodoItem';
import { useStore } from '../../stores/use-store';
import { onEnterPress } from '../../ui-helpers/on-enter';

export const TodoItem = (props: { todo: TodoItemModel }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState('');
  const todoList = useStore();

  const { todo } = props;

  const saveText = useCallback(() => {
    todo.updateText(newText);
    setIsEditing(false);
    setNewText('');
  }, [todo, newText]);

  return (
    <div className="todo-item">
      {isEditing ? (
        <div className="edit-mode">
          <input type="text" onKeyDown={onEnterPress(saveText)} onChange={(e) => setNewText(e.target.value)} />
          <button onClick={saveText}>save</button>
        </div>
      ) : (
        <div className="btn">
          <div>
            <span>{todo.text}</span>
          </div>
          <div>
            <button className={'Edit'} onClick={() => todo.toggleIsDone()}>done</button>
            <button onClick={() => setIsEditing(true)}>edit</button>
            <button onClick={() => todoList.removeTodo(todo)}>X</button>
          </div>

        </div>
      )}
    </div>
  );
};
