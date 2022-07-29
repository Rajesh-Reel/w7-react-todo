import React, {useState} from "react";
// import logo from '../../logo.svg';
import './App.css';
import List from "./List";
import Input from "./Input";
// import ListItem from "./ListItem";

function App() {
  // const [array, setArray] = useState(["Tenerife", "Mauritius", "Japan", "China", "Korea", "India", "Croatia", "Italy"])
  const [array, setArray] = useState([])

  
  function handleChange(e){
    e.preventDefault()
    const input = e.target.newItem.value;
    e.target.reset()
    return setArray([...array, input]);
  }

  function handleDelete(e) {
    const item = e.target.getAttribute("data-key");
    const itemIndex = array.findIndex((elem) => elem === item);
    const newList = [...array.slice(0, itemIndex), ...array.slice(itemIndex + 1)]
    e.preventDefault()
    return setArray(newList)
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" width="50px" /> */}
        <p className="emoji App-logo">✈️</p>
      </header>
      <main>
      <h1>List of holiday destinations</h1>
        <Input onSubmit={handleChange}/>
        <List liItems={array} onClick={handleDelete}></List>
      </main>
    </div>
  );
}

export default App;
