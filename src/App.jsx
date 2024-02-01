import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setdata] = useState("");
  const [tododata, setododata] = useState([]);
  const func = () => {
    setododata([...tododata, data]);
    setdata("");
    console.log(tododata);
  };
  function Remove(i) {
    const result = tododata.filter((ele, id) => {
      if (id != i) {
        return ele;
      }
    });
    setododata(result);
  }
  function Removeall() {
    setododata([]);
  }
  return (
    <>
      <h1>My ToDoList</h1>
      <div className="main">
        <div className="section">
          <input
            type="text"
            value={data}
            onChange={(e) => setdata(e.target.value)}
            placeholder="Add Data"
            maxLength={20}
          />
          <button onClick={func}>Add</button>
        </div>
        <div className="result">
          {tododata.map((value, i) => (
            <>
              <p key={i}>
                {value}
                <span>
                  <button onClick={() => Remove(i)}>Remove</button>
                </span>
              </p>
            </>
          ))}
        </div>
        {tododata.length > 0 && <button onClick={Removeall}>Remove All</button>}
      </div>
    </>
  );
}

export default App;
