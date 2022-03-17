import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tab1 from './components/Tab1/Tab1';
import Tab2 from './components/Tab2/Tab2';
import Tab3 from './components/Tab3/Tab3';
import Done from './components/Done/Done';
import AuthProvider from './Context/AuthProvider';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <AuthProvider >
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/tab1">
              <Tab1></Tab1>
            </Route>
            <Route path="/tab2">
              <Tab2></Tab2>
            </Route>
            <Route path="/tab3">
              <Tab3></Tab3>
            </Route>
            <Route path="/done">
              <Done></Done>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
