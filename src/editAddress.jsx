import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PlanetaTerra from './components/earthAddress';
import Marte from './components/marsAddress';

export default function EditAddress({ addresses, setAddresses }) {
  const { index } = useParams();
  const navigate = useNavigate();

  const address = addresses[index];

  const [selectedPlanet, setSelectedPlanet] = useState('terra'); 
  const [title, setTitle] = useState('');
  const [street, setStreet] = useState('');
  const [lote, setLote] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (address) {
      setTitle(address.title);
      setPhone(address.phone);
      if (address.street) {
        setStreet(address.street);
        setSelectedPlanet('terra');
      } else if (address.lote) {
        setLote(address.lote);
        setSelectedPlanet('marte');
      }
    } else {

      navigate('/my-address');
    }
  }, [address, navigate]);

  const handleSave = () => {
    const updatedAddresses = [...addresses];
    if (selectedPlanet === 'terra') {
      updatedAddresses[index] = { title, street, phone };
    } else {
      updatedAddresses[index] = { title, lote, phone };
    }
    setAddresses(updatedAddresses);
    navigate('/my-address');
  };

  if (!address) {
    return <div>Endereço não encontrado</div>;
  }

  return (
    <div className="p-5 font-inter w-full h-screen flex items-center justify-center">
      <div className="w-full md:w-1/3 bg-bgdark-200 p-5 rounded-lg">
        <h2 className="text-2xl mb-4 text-textwhite-400">Editar Endereço</h2>
        <div className="mb-4">
          <label className="block mb-2 text-textwhite-400">Selecione o Planeta</label>
          <select
            value={selectedPlanet}
            onChange={(e) => setSelectedPlanet(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="terra">Planeta Terra</option>
            <option value="marte">Marte</option>
          </select>
        </div>
        {selectedPlanet === 'terra' ? (
          <PlanetaTerra
            title={title}
            setTitle={setTitle}
            street={street}
            setStreet={setStreet}
            phone={phone}
            setPhone={setPhone}
          />
        ) : (
          <Marte
            title={title}
            setTitle={setTitle}
            lote={lote}
            setLote={setLote}
            phone={phone}
            setPhone={setPhone}
          />
        )}
        <button
          onClick={handleSave}
          className="bg-violet-500 py-2 px-4 rounded-md text-white w-full mt-5"
        >
          Salvar
        </button>
      </div>
    </div>
  );
}
