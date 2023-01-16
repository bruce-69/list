import { useState } from 'react';
import './App.css';

/* 
useEffect(() => {
  setList(["tarefa1, tarefa2"])
}, []);
  */


function App() {
  let [list, setList] = useState([]);
  let [newlist, setNewlist] = useState("");
  return (


    <>
      <input value={setNewlist} onChange={value => setNewlist(value.target.value)} type="text" />
      <button onClick={() => setNewlist()} >NEW</button>
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

  function addNewitem() {
    setList([...list, newlist]);
  }

  function delitelist(index) {
    let tenporario = [...list]
    tenporario.splice(index, 1)

    setList(tenporario)
  }

}

export default App;
