import './App.css';
import Header from './components/Header';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="ui container">
      <Header text="Todo List"></Header>
      <Todo></Todo>
    </div>
  );
}

export default App;
