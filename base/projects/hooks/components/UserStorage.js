import React, { useState, useEffect } from "react";


function UserStorage() {
  const [user, setUser] = useState("Sanjiv");
 

  useEffect(() => {
    const storedUser = window.localStorage.getItem("user");

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("user", user);
  }, [user]);

  return (
    <select value={user} onChange={e => setUser(e.target.value)}>
      <option>Jason</option>
      <option>Akiko</option>
      <option>Sanjiv</option>
      <option>Clarisse</option>
      
    </select>
  );
}

export default function StoreUser() {
  return (
    <div className="App">
      <UserStorage />
    </div>
  );
}
