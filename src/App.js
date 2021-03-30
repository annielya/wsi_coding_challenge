
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './component/main'
import Single from './component/single'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/:id" component={Single} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
