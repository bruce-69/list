import { useEffect, useState } from 'react';
import './App.css';





function App() {
  let [list, setList] = useState([""]);
  let [newlist, setNewlist] = useState("");

  useEffect(() => {
    setList(["tarefa1",])
  }, []);




  return (

    
  <>
    <input value={setNewlist} onChange={value => setNewlist(value.target.value)} type="text" />
    <button onClick={() => addNewlist()} >NEW</button>
    <ul>
      {list.map(list, index => (
        <li>
          {list}
          <button onClick={() => delitelist(index)}>
            DELETAR
          </button>
        </li>
      ))}
    </ul>
  </>
  );

  function addNewlist() {
    setList([...list, newlist]);
    setNewlist("");
  }

  function delitelist(index) {
    let tenporario = [...list];
    tenporario.splice(index, 1);

    setList(tenporario);
  }

}

export default App;
