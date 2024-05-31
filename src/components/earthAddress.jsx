import React from 'react';

export default function earthAddress({ title, setTitle, street, setStreet, phone, setPhone }) {
  return (
    <>
      <div className="mb-4">
        <label className="block text-textwhite-400 py-1 font-medium">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
      <label className="block text-textwhite-400 py-1 font-medium">Rua</label>
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
      <label className="block text-textwhite-400 py-1 font-medium">Telefone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </>
  );
}
