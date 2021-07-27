import './App.css'
import React from 'react'
import Home from './screens/Home/Home'
import Books from './screens/Books/Books'
import { Route, Switch } from 'react-router-dom'

const App = () => {

return(
  <div>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/books" component={Books} />
    
  
  </Switch>
  </div>
)
}

export default App;