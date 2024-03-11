import { TodoList } from './components/TodoList/TodoList';
import { TodoNew } from './components/TodoNew/TodoNew';
import './index.css'
const App = () => (
  <div className="App">
      <h1>TodoList</h1>
    <TodoNew />
    <TodoList />
  </div>
);

export default App;
