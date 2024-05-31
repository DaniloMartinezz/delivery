import React from 'react';
import { FaPlus, FaArrowLeftLong } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import CardAddress from "./components/cardAddress"; 

export default function MyAddress({ addresses, setAddresses }) {
  return (
    <div className="p-5 font-inter w-full md:h-screen ">
      <header className="flex justify-between items-center pt-3">
        <div className="bg-cardgray rounded-md px-3 py-2">
          <FaArrowLeftLong className="text-violet-400 text-xl" />
        </div>
        <div className="text-textgray-700 font-medium md:text-2xl">Minhas Localizações</div>
        <div className="bg-cardgray rounded-md px-3 py-2">
          <IoSettingsOutline className="text-violet-400 text-xl" />
        </div>
      </header>
    <div className="md:flex md:items-center md:justify-center">
    <div className="bg-violet-300 rounded-md p-4 mt-8 md:w-[20%] md:flex md:justify-around ">
        <h3 className="flex text-violet-500 font-semibold p-1 items-center justify-around">
          <FaPlus className="md:mr-2"/>Adicionar novo endereço
        </h3>
      </div>
    </div>


      <div className="mt-8 md:mt-24 md:flex md:justify-around md:items-center  ">
        {addresses.map((address, index) => (
          <CardAddress
            key={index}
            index={index}
            title={address.title}
            street={address.street}
            lote={address.lote}
            phone={address.phone}
          />
        ))}
      </div>
    </div>
  );
}
