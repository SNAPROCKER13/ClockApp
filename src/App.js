import "./App.css";
import Clock from "./Clock";

function App() {
  return (
    <div>
      <h1 className='title'>Clock App</h1>
      <div className="Page">
        <div className="App">
          <div className="box-space"></div>
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default App;
