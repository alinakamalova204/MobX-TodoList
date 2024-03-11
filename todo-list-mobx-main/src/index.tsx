import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { StoreProvider } from './stores/store-provider';
import { TodoList as TodoListModel } from './stores/TodoList';

const todoList = new TodoListModel([
  'Первая задача',
  'Вторая задача',
  'Третья задача',
]);



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <StoreProvider value={todoList}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
