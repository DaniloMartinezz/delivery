import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './register';
import MyAddress from './myAddress';
import EditAddress from './editAddress';

function App() {
  const [addresses, setAddresses] = useState([
    { title: "Planeta Terra", street: "Ferreira Souza", phone: "(19) 91210-1923" },
    { title: "Planeta Marte", lote: "5948", phone: "(00) 19230-0293" },
    { title: "Planeta Marte", lote: "1234", phone: "(00) 485719-6221" },
  ]);

  return (
    <div className='bg-bgdark'>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/my-address" element={<MyAddress addresses={addresses} setAddresses={setAddresses} />} />
        <Route path="/edit-address/:index" element={<EditAddress addresses={addresses} setAddresses={setAddresses} />} />
      </Routes>
    </div>
  );
}

export default App;
