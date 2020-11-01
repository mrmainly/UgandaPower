import MainPagesUganda from "./pages/mainPagesUganda";
import Courses from "./pages/courses";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import myCourses from "./pages/myCourses";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from './pages/register'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPagesUganda} exact />
        <Route path="/Courses" component={Courses} />
        <Route path="/MyCourses" component={myCourses} />
        <Route path="/LogIn" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
