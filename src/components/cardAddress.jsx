import React from 'react';
import { FaHome } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import Map from '../assets/map.png';

export default function CardAddress({ title, street, lote, phone, index }) {
  return (
    <div className="border-2 p-2 border-violet-400 rounded-xl text-textwhite-500 bg-bgdark-100 mt-5  md:w-[20%] md:h-[20%]">
      <div className="flex items-center justify-between p-1">
        <FaHome className="text-violet-400 text-xl" />
        <h3 className="font-medium">{title}</h3>
        <MdClose />
      </div>
      <div className="flex py-5">
        <div className="flex items-center">
          <img src={Map} alt="" className="w-20 rounded-xl" />
        </div>
        <div className="flex flex-col pl-2 justify-center">
          <span>{street ? `Rua: ${street}` : `Lote: ${lote}`}</span>
          <span>{phone}</span>
        </div>
      </div>
      <div className="flex items-center justify-center py-2">
        <Link to={`/edit-address/${index}`} className="bg-violet-500 py-2 px-4 rounded-md w-full text-center font-medium">
          Editar meu endereço
        </Link>
      </div>
    </div>
  );
}
