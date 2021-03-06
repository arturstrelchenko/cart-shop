import React from "react";
import "./scss/app.scss"
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <div className="wrapper">
       <Header/>
        <div className="content">
            <Route path='/' component={Home} exact/>
            <Route path='/cart' component={Cart} exact/>
        </div>
      </div>
    </div>
  );
}
export default App;

