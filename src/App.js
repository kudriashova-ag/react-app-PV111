import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDo/ToDoList';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div>
      <Counter />
      <ToDoList />
    </div>
  );
}

export default App;