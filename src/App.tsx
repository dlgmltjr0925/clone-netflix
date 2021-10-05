import { Route, Switch } from "react-router";

import Home from "./pages/home/Home";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <Switch>
      <Route path="/kr" component={Home}></Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
