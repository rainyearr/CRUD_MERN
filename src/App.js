import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={TodoList}/>
      <Route exact path="/edit/:id" component={EditTodo}/>
      <Route exact path="/create" component={CreateTodo}/>
    </Switch>
  );
}

export default App;
