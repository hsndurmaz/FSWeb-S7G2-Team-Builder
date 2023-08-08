import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [memberList, setMemberList] = useState([
    { name: "Hasan", old: "25", major: "Civil Engineer" },
    { name: "Gülşen", old: "24", major: "Maths" },
    { name: "Emre", old: "25", major: "Computer Science" },
    { name: "Selo", old: "25", major: "Agriculture Engineer" },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {memberList.map((member, i) => (
          <span key={i}>
            <strong> {member.name}</strong>-{member.major}-{member.old}
          </span>
        ))}
        <Form />
      </header>
    </div>
  );
}

export default App;
