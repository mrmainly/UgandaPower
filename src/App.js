import MainPagesUganda from "./pages/mainPagesUganda";
import Courses from "./pages/courses";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MyCourses from "./pages/myCourses";
import myCourses from "./pages/myCourses";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPagesUganda} exact />
        <Route path="/Courses" component={Courses} />
        <Route path="/MyCourses" component={myCourses} />
      </Switch>
    </Router>
  );
}

export default App;
