import "./App.css";
import Header from "./Header";
import User from "./User";
import Skills from "./Skills";

function App() {
  const skills=['React' ,'JS', 'Css'];

  const user = {
    name: "Chandana",
    age: 22,
    city: "Bengaluru",
    profession: "React Developer",
  };

  return (
    <div className="app">
      <Header />
      <User user={user} skills={skills} />
    </div>
  );
}

export default App;