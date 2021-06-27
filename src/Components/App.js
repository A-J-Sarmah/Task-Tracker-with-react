import Form from "./Form";
import Task from "./Task";
import getData from "../getData";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(getData);
  function handleData(e) {
    e.preventDefault();
    const name = document.getElementById("assigned").value;
    document.getElementById("assigned").value = "";
    const date = document.getElementById("date").value;
    document.getElementById("date").value = "";
    const task = document.getElementById("name").value;
    document.getElementById("name").value = "";
    setData([
      ...data,
      {
        id: new Date().getTime().toString(),
        name: name,
        date: date,
        task: task,
        isDone: false,
      },
    ]);
  }
  function markAsDone(id) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i].isDone = !data[i].isDone;
      }
    }
    setData([...data]);
  }
  function removeAll() {
    localStorage.clear();
    setData([]);
  }
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      localStorage.setItem(i, JSON.stringify(data[i]));
    }
  }, [data]);
  return (
    <>
      <header>
        <h1>Task Tracker</h1>
      </header>
      <div className="app-body">
        <Form handleData={handleData} />
        <Task data={data} done={markAsDone} remove={removeAll} />
      </div>
    </>
  );
}
export default App;
