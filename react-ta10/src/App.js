import "./App.css";
import { useState, useEffect } from "react";

const getUsers = async () => {
  const usersFetch = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await usersFetch.json();
  return users;
};

const ShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  return (
    <div className="users-container">
      {users.map((user) => {
        return (
          <div key={user.id} className="user-card">
            <div className="user-email">{user.email}</div>
            <div className="user-username">{user.username}</div>
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <ShowUsers />
    </div>
  );
};

export default App;
