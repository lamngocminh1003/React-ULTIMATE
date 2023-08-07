import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";
// function App() {
let App = () => {
  let x = { name: "Amie" };
  let y = false;
  console.log("check y", y);
  return (
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
      </div>
    </div>
  );
};

export default App;
