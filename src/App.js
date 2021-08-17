import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className = "navbar bg-light navbar-expand-lg navbar-light">
        <ul className = "navbaar-nav mr-auto">
          <li className = "navbar-item">
            <Link to = "/" className="nav-link">Todos</Link>
          </li>
          <li className = "navbar-item">
            <Link to = "/create" className="nav-link">Create Todo</Link>
          </li>
        </ul>
      </nav>
    <Switch>
      <Route exact path="/" component={TodoList}/>
      <Route exact path="/edit/:id" component={EditTodo}/>
      <Route exact path="/create" component={CreateTodo}/>
    </Switch>
    </div>
  );
}

export default App;
