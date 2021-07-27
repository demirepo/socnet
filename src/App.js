import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

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
