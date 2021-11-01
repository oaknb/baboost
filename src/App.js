import React from "react";
import Navbar from "./Companents/Navbar";
import Header from "./Companents/Header";
import Content from "./Companents/Content";
import Footer from "./Companents/Footer";
import Grid from "./Companents/Grid/Grid";
import {
  BrowserRouter,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {
  return (
    <> <BrowserRouter>
    <Switch>
    <Route exact path="/">
      <Navbar></Navbar>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
      </Route>
      
          <Route path="/grid">
            <Grid />
          </Route>
          
        </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;