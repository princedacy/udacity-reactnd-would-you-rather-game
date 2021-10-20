import Login from "./views/Login";
import Navbar from './components/Navbar'
import Home from './views/Home'
import LeaderBoard from "./views/LeaderBoard";
import NewQuestion from "./views/NewQuestion";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login/>
    </div>
  );
}

export default App;
