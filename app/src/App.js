import './App.css';

import { Route } from 'wouter';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Route path="/" component={Login} />
      </section>
    </div>
  );
}

export default App;
