// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import './App.css'
import Home from './screens/Home/Home'
import Books from './screens/Books/Books'
import BookCreate from './screens/BookCreate/BookCreate'
import BookEdit from './screens/BookEdit/BookEdit'
import BookDetail from './screens/BookDetail/BookDetail'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        <Route path="/books" component={BookCreate} />
        <Route exact path="/books/:id/edit" component={BookEdit} />
        <Route exact path="/books/:id" component={BookDetail} />
      </Switch>
  


    </div>
  )
}

export default App