import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Profile />
      <footer></footer>
    </div>
  );
}

export default App;
