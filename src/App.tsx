import { Route, Switch } from "react-router";

import Home from "./pages/home/Home";
import NoMatch from "./pages/404/NoMatch";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <Switch>
      <Route exact path="/kr" component={Home} />
      <Route path="/NotFound">
        <NotFound />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
}

export default App;
