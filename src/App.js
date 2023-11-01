import "./App.css";
import Navbar from "./Components/Navbar";
import CourseList from "./Components/CourseList";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <CourseList></CourseList>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
