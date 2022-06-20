import { Route, Switch } from "react-router-dom";
import Footer from "./components/Header/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./container/Home/Home";


function App() {
  return (
   <>
   <Header/>
   <Switch>
    <Route exact path={"/"}component={Home}/>

   </Switch>
   <Footer/>
   </>
  );
}

export default App;
