import logo from "./logo.svg";
import Product from "./ProductsApp/Product";
import "./App.scss";
import Home from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";
import Nav from "./components/Navigation/Nav";
import Page404 from "./components/404Page/Page404";
import ProductPage from "./ProductsApp/ProductPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Weather from "./components/Weather/Weather";
import OTP from "./components/OTP/OTP";
import WeatherByWoeId from "./components/Weather/WeatherByWoeId";
// function App() {
let App = () => {
  let x = { name: "Amie" };
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact={true}>
          {" "}
          <div className="App">
            <div className="content-left">
              <header className="App-header">
                <div style={{ textAlign: "center" }}>
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
                <p>Hello world with {JSON.stringify(x.name)}</p>
                <Home />
              </header>
            </div>
            <div className="content-right">
              <AddNewProduct />
              <hr />
              <div>
                <Product />
              </div>
            </div>
          </div>
        </Route>
        <Route path="/product">
          <ProductPage />
        </Route>
        <Route path="/weather-app">
          <Weather />
        </Route>
        <Route path="/weather/detail/:woeId">
          <WeatherByWoeId />
        </Route>
        <Route path="/otp">
          <OTP />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
