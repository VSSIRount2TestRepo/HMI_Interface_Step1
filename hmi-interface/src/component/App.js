import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import PageA from "./PageA";
import PageB from "./PageB";
import PageMain from "./PageMain";
import NavBar from "./NavBar";

import '../stylesheet/App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar/>
          <Routes>
            <Route path="*" element={ <PageMain/> } />
            <Route path="/home" element={ <PageMain /> }/>
            <Route path="/pageA" element={ <PageA /> }/>
            <Route path="/pageB" element={ <PageB /> }/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
