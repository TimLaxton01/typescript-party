import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Robert Crumb",
      url: "https://13thdimension.com/wp-content/uploads/2015/08/Crumb003.jpg",
      age: 78,
      note: "Keep on trucking",
    },
  ]);

  return (
    <div className='App'>
      <h1>People at the party</h1>
      <List people={people} />
      <AddToList />
    </div>
  );
}

export default App;
